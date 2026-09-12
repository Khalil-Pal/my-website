import { useEffect, useRef, useState } from 'react';
import { translations } from './translations.js';
import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Work from './components/Work';
import About from './components/About';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';
import type { Language } from './site';

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  const saved = window.localStorage.getItem('khalil-language');
  if (saved === 'ar' || saved === 'ru' || saved === 'en') return saved;

  const browserLanguage = window.navigator.languages?.[0] ?? window.navigator.language ?? '';
  if (browserLanguage.toLowerCase().startsWith('ar')) return 'ar';
  if (browserLanguage.toLowerCase().startsWith('ru')) return 'ru';
  return 'en';
}

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState<Record<string, boolean>>({});
  const copy = translations[language] as any;
  const revealRoot = useRef<HTMLDivElement>(null);
  const languageMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    window.localStorage.setItem('khalil-language', language);
  }, [language]);

  useEffect(() => {
    const closeLanguageMenuOnOutsideClick = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) setLanguageMenuOpen(false);
    };
    const closeOverlaysOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLanguageMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', closeLanguageMenuOnOutsideClick);
    document.addEventListener('keydown', closeOverlaysOnEscape);
    return () => {
      document.removeEventListener('mousedown', closeLanguageMenuOnOutsideClick);
      document.removeEventListener('keydown', closeOverlaysOnEscape);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const nodes = revealRoot.current?.querySelectorAll('.reveal');
    if (!nodes) return;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(Object.fromEntries([...nodes].map((node) => [node.id, true])));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setVisible((current) => ({ ...current, [entry.target.id]: true }));
      }),
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [language]);

  const reveal = (id: string, delay = 0, extraClass = '') => ({
    id,
    className: `reveal${extraClass ? ` ${extraClass}` : ''}${visible[id] ? ' is-visible' : ''}`,
    style: { transitionDelay: `${delay}ms` },
  });

  const switchLanguage = (next: Language) => {
    setLanguage(next);
    setLanguageMenuOpen(false);
  };

  return (
    <div className="portfolio" ref={revealRoot}>
      <Header
        copy={copy}
        scrolled={scrolled}
        language={language}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        languageMenuOpen={languageMenuOpen}
        setLanguageMenuOpen={setLanguageMenuOpen}
        onSelectLanguage={switchLanguage}
        languageMenuRef={languageMenuRef}
      />

      <main id="top">
        <Hero copy={copy} reveal={reveal} />
        <Ticker copy={copy} />
        <Work copy={copy} reveal={reveal} />
        <About copy={copy} reveal={reveal} />
        <Skills copy={copy} reveal={reveal} />
        <Journey copy={copy} reveal={reveal} />
        <Contact copy={copy} reveal={reveal} />
      </main>

      <Footer copy={copy} />
    </div>
  );
}

export default App;
