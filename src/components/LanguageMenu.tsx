import type { Copy, Language } from '../site';

const languageOptions: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' },
  { code: 'ru', label: 'Русский' },
];

type Props = {
  copy: Copy;
  language: Language;
  open: boolean;
  setOpen: (update: (isOpen: boolean) => boolean) => void;
  onSelect: (next: Language) => void;
  menuRef: React.RefObject<HTMLDivElement>;
};

function LanguageMenu({ copy, language, open, setOpen, onSelect, menuRef }: Props) {
  return (
    <div className="language-menu" ref={menuRef}>
      <button type="button" className="language-trigger" onClick={() => setOpen((isOpen) => !isOpen)} aria-expanded={open} aria-haspopup="menu" data-testid="button-language-menu">
        {copy.language.label}
      </button>
      {open && (
        <div className="language-popover" role="menu" aria-label={copy.language.label}>
          {languageOptions.map((item) => (
            <button
              key={item.code}
              type="button"
              className={`language-option ${language === item.code ? 'active' : ''}`}
              onClick={() => onSelect(item.code)}
              role="menuitemradio"
              aria-checked={language === item.code}
              data-testid={`button-language-${item.code}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageMenu;
