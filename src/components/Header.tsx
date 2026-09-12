import { Menu, X } from 'lucide-react';
import LanguageMenu from './LanguageMenu';
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
          <span className="brand-name">Khalil Housheya</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {(Object.entries(copy.nav) as [string, string][]).map(([key, label]) => (
            <a key={key} href={`#${key}`} className="nav-link">{label}</a>
          ))}
        </nav>
        <div className="header-actions">
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
