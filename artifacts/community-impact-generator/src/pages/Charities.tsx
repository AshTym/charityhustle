import { useEffect, useState } from 'react';
import { useSearch } from 'wouter';
import { ExternalLink } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { CHARITIES, COUNTRIES } from '../lib/data';

const coreTags = ['All', 'Community', 'Skills & behind the scenes', 'Crisis support', 'Nature & climate', 'Animals', 'Young people', 'Older neighbours', 'Food security', 'First Nations & Indigenous'];

const resolveFilter = (raw: string) => {
  if (raw === 'All') return 'All';
  const lower = raw.toLowerCase();
  
  if (lower.includes('behind the scenes') || lower.includes('skill') || lower.includes('writing') || lower.includes('design')) return 'Skills & behind the scenes';
  if (lower.includes('meet') || lower.includes('belonging') || lower.includes('nearby')) return 'Community';
  if (lower.includes('nature') || lower.includes('climate')) return 'Nature & climate';
  if (lower.includes('first nation') || lower.includes('indigenous') || lower.includes('māori') || lower.includes('native')) return 'First Nations & Indigenous';
  
  const match = coreTags.find(t => t.toLowerCase() === lower);
  return match || 'All';
};

export function Charities() {
  const { country } = useAppContext();
  const searchString = useSearch();
  const searchParams = new URLSearchParams(searchString);
  const initialCause = searchParams.get('cause') || 'All';
  
  const [filter, setFilter] = useState(() => resolveFilter(initialCause));

  useEffect(() => {
    const homeTitle = 'Charity Hustle | Turn Spare Time Into Community Impact';
    const homeDescription = 'Charity Hustle helps you turn your passions, practical skills and spare time into meaningful ways to support charities and strengthen your community.';
    const pageTitle = 'Find Charity Organisations | Charity Hustle';
    const pageDescription = 'Find trusted national charities and volunteering organisations where you can offer your skills, time and energy to causes that matter in your country.';

    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');

    metaDesc?.setAttribute('content', pageDescription);
    ogTitle?.setAttribute('content', pageTitle);
    ogDescription?.setAttribute('content', pageDescription);
    twitterTitle?.setAttribute('content', pageTitle);
    twitterDescription?.setAttribute('content', pageDescription);
    
    return () => {
      document.title = homeTitle;
      metaDesc?.setAttribute('content', homeDescription);
      ogTitle?.setAttribute('content', homeTitle);
      ogDescription?.setAttribute('content', homeDescription);
      twitterTitle?.setAttribute('content', homeTitle);
      twitterDescription?.setAttribute('content', homeDescription);
    };
  }, []);

  useEffect(() => {
    const cause = searchParams.get('cause');
    if (cause) setFilter(resolveFilter(cause));
  }, [searchString]);

  const countryCharities = CHARITIES.filter(c => c.country === country);
  const availableTags = coreTags.filter(tag => tag === 'All' || countryCharities.some(c => c.tags.includes(tag)));
  
  const filtered = countryCharities.filter(c => {
    if (filter === 'All') return true;
    return c.tags.includes(filter);
  });

  return (
    <div className="directory-page">
      <section className="dir-hero">
        <div className="dir-hero-inner">
          <div className="eyebrow"><span className="eyebrow-line" /> Next Steps</div>
          <h1>Find your place in the mix.</h1>
          <p>These organisations are excellent starting points for getting involved in <strong>{COUNTRIES[country]}</strong>. We've gathered official national networks to help you connect locally.</p>
        </div>
      </section>

      <section className="dir-content">
        {availableTags.length > 1 && (
          <div className="dir-filters">
            {availableTags.map(tag => (
              <button 
                key={tag} 
                className={`dir-filter ${filter === tag ? 'active' : ''}`}
                onClick={() => setFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="dir-empty">
            <p>We couldn't find a perfect match for "{filter}" in {COUNTRIES[country]}.</p>
            <button className="dir-filter active" onClick={() => setFilter('All')}>Show all organisations</button>
          </div>
        )}

        <div className="dir-grid">
          {filtered.map(charity => (
            <article key={charity.id} className="dir-card">
              <div className="dir-card-head">
                <h3>{charity.name}</h3>
              </div>
              <p>{charity.description}</p>
              
              <div className="dir-tags">
                {charity.tags.map(t => <span key={t} className="dir-tag">{t}</span>)}
              </div>

              <a href={charity.url} target="_blank" rel="noopener noreferrer" className="dir-visit-btn">
                Offer your skills <ExternalLink size={14} />
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
