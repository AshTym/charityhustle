import { Switch, Route, Link, useLocation } from 'wouter';
import { AppProvider, useAppContext } from './context/AppContext';
import { Home } from './pages/Home';
import { Charities } from './pages/Charities';
import { Contact } from './pages/Contact';
import { HeartHandshake, ArrowRight, Bookmark, Menu, Globe, ChevronDown } from 'lucide-react';
import { COUNTRIES, CountryCode } from './lib/data';
import { trackEvent } from './lib/analytics';
import './index.css';

function Layout({ children }: { children: React.ReactNode }) {
  const { country, setCountry, saved } = useAppContext();
  const [location, navigate] = useLocation();

  const handleScrollTo = (id: string) => {
    if (location !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBrandClick = () => {
    if (location !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="app-shell">
      <div className="noise" aria-hidden="true" />
      <div className="top-strip"><span>Small actions, real ripples</span> A better way to find your place in the mix</div>
      <header className="nav">
        <button type="button" className="brand" onClick={handleBrandClick} data-testid="button-brand-home" style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}>
          <span className="brand-mark"><HeartHandshake size={17} /></span><span className="brand-name">Charity Hustle</span>
        </button>
        
        <nav className="nav-links" aria-label="Primary navigation">
          <button type="button" className="nav-text-btn" onClick={() => handleScrollTo('how-it-works')} data-testid="link-how-it-works">How it works</button>
          
          <div className="country-picker">
            <Globe size={14} className="country-icon" />
            <select
              value={country}
              onChange={(e) => {
                const nextCountry = e.target.value as CountryCode;
                trackEvent('country_changed', { from: country, to: nextCountry });
                setCountry(nextCountry);
              }}
              aria-label="Select country"
            >
              {Object.entries(COUNTRIES).map(([code, name]) => (
                <option key={code} value={code}>{name}</option>
              ))}
            </select>
            <ChevronDown size={12} className="country-chevron" />
          </div>

          <Link href="/charities" className="nav-text-btn">Find organisations</Link>
          <Link href="/contact" className="nav-text-btn">Contact</Link>

          <button type="button" className="saved-nav" onClick={() => handleScrollTo('your-ideas')} data-testid="button-saved-ideas">
            <Bookmark size={14} /> Saved <span className="saved-count" data-testid="text-saved-count">{saved.size}</span>
          </button>
          
          <button type="button" className="nav-cta" onClick={() => handleScrollTo('questionnaire')} data-testid="button-start-nav">Start here <ArrowRight size={14} /></button>
          <button type="button" className="mobile-menu" aria-label="Menu" onClick={() => handleScrollTo('questionnaire')} data-testid="button-mobile-menu"><Menu size={21} /></button>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand-block">
            <div className="brand"><span className="brand-mark"><HeartHandshake size={17} /></span><span className="brand-name">Charity Hustle</span></div>
            <span className="footer-made-by">made by ash</span>
            <p>A gentle nudge toward useful, local action.</p>
            <p className="footer-copyright">© Ash Tym 2026</p>
          </div>
          <div className="footer-links">
            <button type="button" onClick={() => handleScrollTo('questionnaire')} data-testid="button-footer-start">Find my starting point</button>
            <button type="button" onClick={() => handleScrollTo('how-it-works')} data-testid="button-footer-how">How it works</button>
            <button type="button" onClick={() => handleScrollTo('share-site')} data-testid="button-footer-share">Share this website</button>
            <Link href="/charities" className="nav-text-btn">Find organisations</Link>
            <Link href="/contact" className="nav-text-btn">Contact</Link>
            <span>Made for your corner of the world.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/charities" component={Charities} />
          <Route path="/contact" component={Contact} />
          <Route>
            <div style={{ padding: '150px 28px', textAlign: 'center' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 40, marginBottom: 20 }}>Page not found</h2>
              <Link href="/" className="action-button">Return home</Link>
            </div>
          </Route>
        </Switch>
      </Layout>
    </AppProvider>
  );
}
