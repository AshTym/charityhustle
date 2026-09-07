import { type Dispatch, type SetStateAction, useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Bookmark,
  Check,
  Clock3,
  Compass,
  Lightbulb,
  RotateCcw,
  Sparkles,
  Users,
  Copy,
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'wouter';
import { generateIdeas, getIdea } from '@workspace/api-client-react';
import { useAppContext } from '../context/AppContext';
import { interests, skills, times, outcomes, modes, type Idea } from '../lib/data';
import { ShareSite } from '../components/ShareSite';

type Answers = {
  interests: string[];
  skills: string[];
  passionsDetail: string;
  contributionDetail: string;
  time: string;
  outcome: string;
  mode: string;
  kidFriendly: boolean;
};

const initialAnswers: Answers = {
  interests: [],
  skills: [],
  passionsDetail: '',
  contributionDetail: '',
  time: '',
  outcome: '',
  mode: '',
  kidFriendly: false,
};

function ChoiceButton({
  label,
  selected,
  onClick,
  testId,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
  testId: string;
}) {
  return (
    <button
      type="button"
      className={`choice ${selected ? 'selected' : ''}`}
      onClick={onClick}
      data-testid={testId}
      aria-pressed={selected}
    >
      {selected && <Check size={13} strokeWidth={2.5} />}
      {label}
    </button>
  );
}

function Questionnaire({
  answers,
  setAnswers,
  onSubmit,
  error,
  generating,
}: {
  answers: Answers;
  setAnswers: Dispatch<SetStateAction<Answers>>;
  onSubmit: () => void;
  error: string;
  generating: boolean;
}) {
  const completed = [answers.interests.length > 0, answers.skills.length > 0, Boolean(answers.time), Boolean(answers.outcome), Boolean(answers.mode)].filter(Boolean).length;
  const toggleMulti = (field: 'interests' | 'skills', value: string) => {
    setAnswers((current) => {
      const next = current[field].includes(value)
        ? current[field].filter((item) => item !== value)
        : [...current[field], value];
      return { ...current, [field]: next };
    });
  };
  const choose = (field: 'time' | 'outcome' | 'mode', value: string) => {
    setAnswers((current) => ({ ...current, [field]: value }));
  };

  return (
    <div className="questionnaire-wrap" id="questionnaire">
      <div className="questionnaire" data-testid="questionnaire">
        <div className="q-head">
          <div>
            <div className="q-kicker">Your ingredients</div>
            <h2 className="q-title">A little about you</h2>
          </div>
          <div className="q-progress" data-testid="status-questionnaire-progress">Step {Math.min(completed + 1, 5)} of 5</div>
        </div>
        <div className="progress-track" aria-label={`${completed} of 5 questions answered`}>
          <div className="progress-fill" style={{ width: `${(completed / 5) * 100}%` }} />
        </div>

        <div className="question">
          <div className="question-label"><span>What do you care about?</span><small>Choose any</small></div>
          <div className="choice-grid">
            {interests.map((item) => <ChoiceButton key={item} label={item} selected={answers.interests.includes(item)} onClick={() => toggleMulti('interests', item)} testId={`choice-interest-${item.toLowerCase().replaceAll(' ', '-')}`} />)}
          </div>
          <label className="write-in-wrap">
            <span>Tell us more about your passions <small>Optional</small></span>
            <textarea
              className="write-in"
              value={answers.passionsDetail}
              onChange={(event) => setAnswers((current) => ({ ...current, passionsDetail: event.target.value }))}
              placeholder="e.g. community gardens, music, mentoring, local history"
              rows={3}
              maxLength={400}
              data-testid="input-passions-detail"
            />
          </label>
        </div>
        <div className="question">
          <div className="question-label"><span>What can you bring?</span><small>Choose any</small></div>
          <div className="choice-grid">
            {skills.map((item) => <ChoiceButton key={item} label={item} selected={answers.skills.includes(item)} onClick={() => toggleMulti('skills', item)} testId={`choice-skill-${item.toLowerCase().replaceAll(' ', '-')}`} />)}
          </div>
          <label className="write-in-wrap">
            <span>What else could you offer your community? <small>Optional</small></span>
            <textarea
              className="write-in"
              value={answers.contributionDetail}
              onChange={(event) => setAnswers((current) => ({ ...current, contributionDetail: event.target.value }))}
              placeholder="e.g. bookkeeping, photography, a spare meeting room, lived experience"
              rows={3}
              maxLength={400}
              data-testid="input-contribution-detail"
            />
          </label>
        </div>
        <div className="question">
          <div className="question-label"><span>How much room is in your week?</span></div>
          <div className="choice-grid">
            {times.map((item) => <ChoiceButton key={item} label={item} selected={answers.time === item} onClick={() => choose('time', item)} testId={`choice-time-${item.toLowerCase().replaceAll(' ', '-')}`} />)}
          </div>
        </div>
        <div className="question">
          <div className="question-label"><span>What would feel good to get back?</span></div>
          <div className="choice-grid">
            {outcomes.map((item) => <ChoiceButton key={item} label={item} selected={answers.outcome === item} onClick={() => choose('outcome', item)} testId={`choice-outcome-${item.toLowerCase().replaceAll(' ', '-')}`} />)}
          </div>
        </div>
        <div className="question">
          <div className="question-label"><span>How would you like to help?</span></div>
          <div className="choice-grid">
            {modes.map((item) => <ChoiceButton key={item} label={item} selected={answers.mode === item} onClick={() => choose('mode', item)} testId={`choice-mode-${item.toLowerCase().replaceAll(' ', '-')}`} />)}
          </div>
        </div>
        <div className="question">
          <div className="question-label"><span>Make it easy to bring the family?</span><small>Optional</small></div>
          <ChoiceButton label="Show kid-friendly ideas" selected={answers.kidFriendly} onClick={() => setAnswers((current) => ({ ...current, kidFriendly: !current.kidFriendly }))} testId="choice-kid-friendly" />
        </div>

        {error && <div className="q-error" role="alert" data-testid="status-questionnaire-error">{error}</div>}
        <button type="button" className="q-submit" onClick={onSubmit} disabled={generating} data-testid="button-find-impact">
          {generating ? 'Creating six fresh ideas…' : 'Find my starting points'} {!generating && <ArrowRight size={17} />}
        </button>
        <p className="q-foot">{generating ? 'AI is shaping ideas around your answers and checking them against earlier suggestions.' : 'No sign-up. No perfect answer. Just a useful place to begin.'}</p>
      </div>
    </div>
  );
}

function IdeaCard({ idea, saved, onSave, shared }: { idea: Idea; saved: boolean; onSave: () => void; shared: boolean }) {
  const ctxQuery = encodeURIComponent(idea.tag);
  const [shareStatus, setShareStatus] = useState('');
  const ideaUrl = new URL(import.meta.env.BASE_URL, window.location.origin);
  ideaUrl.searchParams.set('idea', idea.id);
  const permanentUrl = ideaUrl.toString();
  const shareText = `${idea.title} — a Charity Hustle idea for turning spare time into community impact.`;

  const copyIdeaLink = async (platform?: string) => {
    try {
      await navigator.clipboard.writeText(permanentUrl);
      setShareStatus(platform ? `Link copied — paste it into ${platform}.` : 'Idea link copied.');
    } catch {
      setShareStatus('Copy the idea URL from your browser address bar.');
    }
    window.setTimeout(() => setShareStatus(''), 3200);
  };

  return (
    <article className={`idea-card ${shared ? 'shared-idea' : ''}`} data-testid={`card-impact-idea-${idea.id}`}>
      <button type="button" className={`save-idea ${saved ? 'saved' : ''}`} onClick={onSave} aria-label={saved ? `Remove ${idea.title} from saved ideas` : `Save ${idea.title}`} data-testid={`button-save-idea-${idea.id}`}>
        <Bookmark size={16} fill={saved ? 'currentColor' : 'none'} />
      </button>
      <div className="idea-overview">
        <div className="idea-tag">{shared ? 'Shared idea' : idea.tag}</div>
        <h3>{idea.title}</h3>
        <p className="idea-summary">{idea.description}</p>
        <div className="idea-meta"><span><Clock3 size={13} /> {idea.time}</span><span>Start small</span></div>
        <Link href={`/charities?cause=${ctxQuery}`} className="idea-directory-link" data-testid={`link-directory-${idea.id}`}>
          Find organisations <ArrowRight size={14} />
        </Link>
        <div className="idea-share">
          <span>Share or save this idea</span>
          <div className="idea-share-actions">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(permanentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share ${idea.title} on Facebook`}
            >
              <FaFacebookF />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(permanentUrl)}&text=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share ${idea.title} on X`}
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => void copyIdeaLink('Instagram')}
              aria-label={`Copy the link to ${idea.title} and open Instagram`}
            >
              <FaInstagram />
            </a>
            <button type="button" onClick={() => void copyIdeaLink()} aria-label={`Copy permanent link to ${idea.title}`}>
              <Copy />
            </button>
          </div>
          <code title={permanentUrl}>{permanentUrl}</code>
          <small aria-live="polite">{shareStatus}</small>
        </div>
      </div>

      <div className="idea-details">
        <section className="idea-detail idea-detail-first">
          <span>01</span>
          <h4>First step</h4>
          <p>{idea.first}</p>
        </section>
        <section className="idea-detail">
          <span>02</span>
          <h4>Why this fits</h4>
          <p>{idea.why}</p>
        </section>
        <section className="idea-detail">
          <span>03</span>
          <h4>The impact you’ll have</h4>
          <p>{idea.impact}</p>
        </section>
        <section className="idea-detail">
          <span>04</span>
          <h4>Potential for change</h4>
          <p>{idea.potential}</p>
        </section>
        <section className="idea-detail">
          <span>05</span>
          <h4>How to expand</h4>
          <p>{idea.expand}</p>
        </section>
      </div>
    </article>
  );
}

export function Home() {
  const { country, saved, toggleSaved, savedMessage, setSavedMessage } = useAppContext();
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [sharedIdeaId, setSharedIdeaId] = useState(() => new URLSearchParams(window.location.search).get('idea'));
  const [visibleIdeas, setVisibleIdeas] = useState<Idea[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [generating, setGenerating] = useState(Boolean(sharedIdeaId));
  const [error, setError] = useState('');
  const resultsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sharedIdeaId) return;
    let cancelled = false;

    const loadSharedIdea = async () => {
      setGenerating(true);
      setError('');
      try {
        const idea = await getIdea(sharedIdeaId);
        if (cancelled) return;
        setVisibleIdeas([idea]);
        setSubmitted(true);
        window.setTimeout(
          () => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
          80,
        );
      } catch {
        if (!cancelled) {
          setError('That saved idea could not be found. Create a fresh set below.');
          setSharedIdeaId(null);
        }
      } finally {
        if (!cancelled) setGenerating(false);
      }
    };

    void loadSharedIdea();
    return () => {
      cancelled = true;
    };
  }, [sharedIdeaId]);

  const leadInterest = answers.interests[0] ?? 'what matters to you';

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = async () => {
    if (!answers.interests.length || !answers.time) {
      setError('Choose at least one cause and the amount of time you can honestly give.');
      scrollTo('questionnaire');
      return;
    }

    setError('');
    setGenerating(true);
    setSubmitted(false);
    setSharedIdeaId(null);
    window.history.replaceState({}, '', import.meta.env.BASE_URL);

    try {
      const result = await generateIdeas({ ...answers, country });
      setVisibleIdeas(result.ideas);
      setSubmitted(true);
      window.setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
    } catch (requestError) {
      const rateLimited = requestError instanceof Error && requestError.message.includes('HTTP 429');
      setError(rateLimited
        ? 'You’ve created several sets of ideas. Please try again in an hour.'
        : 'Fresh ideas could not be created just now. Please wait a moment and try again.');
      scrollTo('questionnaire');
    } finally {
      setGenerating(false);
    }
  };

  const reset = () => {
    setAnswers(initialAnswers);
    setVisibleIdeas([]);
    setSubmitted(false);
    setError('');
    setSharedIdeaId(null);
    window.history.replaceState({}, '', import.meta.env.BASE_URL);
    scrollTo('questionnaire');
  };

  const copyPlan = () => {
    const plan = `My Charity Hustle starting point: ${visibleIdeas[0].title}. First step: ${visibleIdeas[0].first}`;
    if (navigator.clipboard) void navigator.clipboard.writeText(plan);
    setSavedMessage('Your first step is ready to share.');
    window.setTimeout(() => setSavedMessage(''), 2800);
  };

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div>
          <div className="eyebrow"><span className="eyebrow-line" /> A practical guide to doing good</div>
          <h1 id="hero-title">There is a place for <em>your</em> good.</h1>
          <p className="hero-copy">Turn the things you already care about, and the skills people already trust, into a community contribution that feels possible.</p>
          <div className="hero-note">
            <div className="note-avatar"><Users /></div>
            <div><strong>Made for real life</strong><p>Ten minutes, a Tuesday, or a whole new chapter.</p></div>
            <span className="scribble">start here</span>
          </div>
        </div>
        <Questionnaire answers={answers} setAnswers={setAnswers} onSubmit={() => void handleSubmit()} error={error} generating={generating} />
      </section>

      <section className="section soft-section" id="how-it-works">
        <div className="section-inner">
          <div className="section-head">
            <div><div className="eyebrow"><span className="eyebrow-line" /> Nothing grand required</div><h2>Good intentions need a next step.</h2></div>
            <p>We match your interests, your energy and your actual calendar with a few grounded ways to show up.</p>
          </div>
          <div className="step-grid">
            <article className="step" data-testid="card-step-1"><span className="step-number">01 / NOTICE</span><Compass size={23} /><h3>Start with what pulls you.</h3><p>There is no single right cause. Curiosity is enough to begin.</p></article>
            <article className="step" data-testid="card-step-2"><span className="step-number">02 / MIX</span><Sparkles size={23} /><h3>Add what you can give.</h3><p>Skills, time and the way you like to work all count.</p></article>
            <article className="step" data-testid="card-step-3"><span className="step-number">03 / GO</span><Lightbulb size={23} /><h3>Leave with a first move.</h3><p>Every idea comes with a tiny action you can take this week.</p></article>
          </div>
        </div>
      </section>

      {submitted && (
        <section className="section results-section" id="your-ideas" ref={resultsRef} aria-labelledby="results-title">
          <div className="section-inner">
            <div className="result-intro">
              <div><div className="eyebrow"><span className="eyebrow-line" /> Your starting points</div><h2 id="results-title">A little room for <span>{leadInterest.toLowerCase()}</span>.</h2></div>
              <div className="result-count" data-testid="text-results-count"><strong>{visibleIdeas.length}</strong> ideas shaped around your life.</div>
            </div>
            <div className="ideas-grid">
              {visibleIdeas.map((idea) => <IdeaCard key={idea.id} idea={idea} saved={saved.has(idea.id)} onSave={() => toggleSaved(idea.id)} shared={idea.id === sharedIdeaId} />)}
            </div>
            <div className="next-step">
              <div><h3>Make one idea real before Friday.</h3></div>
              <div><p>Pick the one that gives you a small spark, not the one that sounds most impressive. A thoughtful message is a contribution too.</p><div className="action-row"><button type="button" className="action-button" onClick={copyPlan} data-testid="button-copy-plan">Copy my first step <ArrowRight size={14} /></button><button type="button" className="action-button secondary" onClick={reset} data-testid="button-start-over"><RotateCcw size={14} /> Start over</button></div></div>
            </div>
            <div className="saved-shelf" data-testid="status-saved-shelf"><span><strong>{saved.size} saved {saved.size === 1 ? 'idea' : 'ideas'}</strong> — keep the ones that feel like you.</span>{savedMessage && <span data-testid="status-saved-message">{savedMessage}</span>}</div>
          </div>
        </section>
      )}

      <ShareSite />

      <section className="quote-section">
        <div className="quote-inner">
          <div className="quote-mark" aria-hidden="true">“</div>
          <p className="quote-text">The most useful thing you can bring to a community is not a perfect plan. It is your honest attention.</p>
          <div className="quote-by">A note for the beginning</div>
        </div>
      </section>
    </>
  );
}
