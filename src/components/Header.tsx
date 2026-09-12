import { FileText, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import LanguageMenu from './LanguageMenu';
import { emailComposeUrl, resumeUrl, socials } from '../site';
import type { Copy, Language } from '../site';

type Props = {
  copy: Copy;
  scrolled: boolean;
  language: Language;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  languageMenuOpen: boolean;
  setLanguageMenuOpen: (update: (isOpen: boolean) => boolean) => void;
  onSelectLanguage: (next: Language) => void;
  languageMenuRef: React.RefObject<HTMLDivElement>;
};

function Header({ copy, scrolled, language, menuOpen, setMenuOpen, languageMenuOpen, setLanguageMenuOpen, onSelectLanguage, languageMenuRef }: Props) {
  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <a href="#top" className="brand">
          <span className="brand-mark">K</span>
          <span>KH / 24</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {(Object.entries(copy.nav) as [string, string][]).map(([key, label]) => (
            <a key={key} href={`#${key}`} className="nav-link">{label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <div className="header-links">
            <a href={socials.github} target="_blank" rel="noreferrer" className="header-link" aria-label="GitHub"><Github size={16} /></a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="header-link" aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a href={emailComposeUrl} target="_blank" rel="noreferrer" className="header-link" aria-label="Email"><Mail size={16} /></a>
          </div>
          <a href={resumeUrl} target="_blank" rel="noreferrer" className="header-resume"><FileText size={14} />{copy.contact.resume}</a>
          <LanguageMenu
            copy={copy}
            language={language}
            open={languageMenuOpen}
            setOpen={setLanguageMenuOpen}
            onSelect={onSelectLanguage}
            menuRef={languageMenuRef}
          />
          <button type="button" className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>
      {menuOpen && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          {(Object.entries(copy.nav) as [string, string][]).map(([key, label]) => (
            <a key={key} href={`#${key}`} className="nav-link" onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
      )}
    </>
  );
}

export default Header;
