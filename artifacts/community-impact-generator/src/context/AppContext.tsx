import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { type CountryCode, COUNTRIES } from '../lib/data';

function detectCountry(): CountryCode {
  try {
    const languages = navigator.languages?.length
      ? navigator.languages
      : [navigator.language || ''];
    const languageRegions = languages.map((language) => language.toUpperCase());

    if (languageRegions.some((language) => language.includes('-AU'))) return 'AU';
    if (languageRegions.some((language) => language.includes('-NZ'))) return 'NZ';
    if (languageRegions.some((language) => language.includes('-GB') || language.includes('-UK'))) return 'UK';
    if (languageRegions.some((language) => language.includes('-US'))) return 'US';
    if (languageRegions.some((language) => language.includes('-CA'))) return 'CA';

    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (tz.startsWith('Australia/')) return 'AU';
    if (tz.startsWith('Pacific/Auckland')) return 'NZ';
    if (tz.startsWith('Europe/London')) return 'UK';
    if (tz.startsWith('America/New_York') || tz.startsWith('America/Los_Angeles') || tz.startsWith('America/Chicago') || tz.startsWith('America/Denver')) return 'US';
    if (tz.startsWith('America/Toronto') || tz.startsWith('America/Vancouver') || tz.startsWith('America/Edmonton')) return 'CA';
  } catch {
    // Graceful fallback
  }
  return 'AU';
}

type AppContextType = {
  country: CountryCode;
  setCountry: (c: CountryCode) => void;
  saved: Set<string>;
  toggleSaved: (id: string) => void;
  savedMessage: string;
  setSavedMessage: (msg: string) => void;
};

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [country, setCountryState] = useState<CountryCode>('AU');
  const [saved, setSaved] = useState<Set<string>>(new Set());
  const [savedMessage, setSavedMessage] = useState('');

  useEffect(() => {
    const savedCountry = localStorage.getItem('cig_country') as CountryCode;
    if (savedCountry && COUNTRIES[savedCountry]) {
      setCountryState(savedCountry);
    } else {
      const detected = detectCountry();
      setCountryState(detected);
      localStorage.setItem('cig_country', detected);
    }
  }, []);

  const setCountry = (c: CountryCode) => {
    setCountryState(c);
    localStorage.setItem('cig_country', c);
  };

  const toggleSaved = (id: string) => {
    setSaved((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
        setSavedMessage('Removed from your saved ideas.');
      } else {
        next.add(id);
        setSavedMessage('Saved. Keep it somewhere you will see it.');
      }
      return next;
    });
    window.setTimeout(() => setSavedMessage(''), 2800);
  };

  return (
    <AppContext.Provider value={{ country, setCountry, saved, toggleSaved, savedMessage, setSavedMessage }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used within AppProvider');
  return ctx;
}
