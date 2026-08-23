import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, BriefcaseBusiness, Code2, Database, Github, Instagram, Layers3, Linkedin, Mail, MapPin, Menu, Send, X } from 'lucide-react';
import { translations } from './translations.js';
import profileImage from '@assets/my_picture_1787425333891.png';
import sandyLogo from '@assets/sandy-new.png';
import nidaaLogo from '@assets/nidaa-new.png';
import emilieLogo from '@assets/emilie-new.png';

type Language = 'en' | 'ar' | 'ru';

const socials = {
  github: 'https://github.com/Khalil-Pal',
  linkedin: 'https://www.linkedin.com/in/khalil-housheya/',
  telegram: 'https://t.me/khalil_ayed',
};
const email = 'Khalilayed777@gmail.com';
const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
const projectImages = {
  sandy: sandyLogo,
  nidaa: nidaaLogo,
  emilie: emilieLogo,
};

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en';
    const saved = window.localStorage.getItem('khalil-language');
    return saved === 'ar' || saved === 'ru' || saved === 'en' ? saved : 'en';
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState<Record<string, boolean>>({});
  const copy = translations[language] as any;
  const revealRoot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    window.localStorage.setItem('khalil-language', language);
  }, [language]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const nodes = revealRoot.current?.querySelectorAll('.reveal');
    if (!nodes) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setVisible((current) => ({ ...current, [entry.target.id]: true }));
      }),
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [language]);

  const reveal = (id: string, delay = 0) => ({
    id,
    className: `reveal ${visible[id] ? 'is-visible' : ''}`,
    style: { transitionDelay: `${delay}ms` },
  });

  const switchLanguage = (next: Language) => {
    setLanguage(next);
    setMenuOpen(false);
  };

  return (
    <div className="portfolio" ref={revealRoot}>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <a href="#top" className="brand" data-testid="link-brand">
          <span className="brand-mark">K</span>
          <span>KH / 24</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {(Object.entries(copy.nav) as [string, string][]).map(([key, label]) => (
            <a key={key} href={`#${key}`} className="nav-link" data-testid={`link-nav-${key}`}>{label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <div className="lang-switcher" aria-label="Language switcher">
            {(['en', 'ar', 'ru'] as Language[]).map((item) => (
              <button
                key={item}
                type="button"
                className={`lang-button ${language === item ? 'active' : ''}`}
                onClick={() => switchLanguage(item)}
                data-testid={`button-language-${item}`}
                aria-label={`Switch to ${item}`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
          <button type="button" className="menu-button" onClick={() => setMenuOpen(!menuOpen)} data-testid="button-mobile-menu" aria-label="Toggle menu">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>
      {menuOpen && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          {(Object.entries(copy.nav) as [string, string][]).map(([key, label]) => (
            <a key={key} href={`#${key}`} className="nav-link" onClick={() => setMenuOpen(false)} data-testid={`link-mobile-nav-${key}`}>{label}</a>
          ))}
        </nav>
      )}

      <main id="top">
        <section className="hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <div {...reveal('hero-eyebrow')} className={`${reveal('hero-eyebrow').className} eyebrow`} style={reveal('hero-eyebrow').style}>{copy.hero.eyebrow}</div>
              <h1 {...reveal('hero-title', 90)} className={`${reveal('hero-title').className}`} style={reveal('hero-title').style}>
                {copy.hero.first}<br /><span className="accent">{copy.hero.second}</span>
              </h1>
              <p {...reveal('hero-role', 150)} className={`${reveal('hero-role').className} hero-subtitle`} style={reveal('hero-role').style}>{copy.hero.role}</p>
              <div {...reveal('hero-meta', 210)} className={`${reveal('hero-meta').className} hero-meta`} style={reveal('hero-meta').style}>
                <span className="meta-item" data-testid="text-location"><MapPin size={14} />{copy.hero.location}</span>
                <span className="meta-item" data-testid="text-status"><BriefcaseBusiness size={14} />{copy.hero.status}</span>
              </div>
              <div {...reveal('hero-links', 270)} className={`${reveal('hero-links').className} hero-links`} style={reveal('hero-links').style}>
                <a href={socials.github} target="_blank" rel="noreferrer" className="text-link" data-testid="link-github-hero"><Github size={15} />GitHub</a>
                <a href={socials.linkedin} target="_blank" rel="noreferrer" className="text-link" data-testid="link-linkedin-hero"><Linkedin size={15} />LinkedIn</a>
                <a href={emailComposeUrl} target="_blank" rel="noreferrer" className="text-link" data-testid="link-email-hero"><Mail size={15} />Email</a>
              </div>
            </div>
            <div {...reveal('portrait', 170)} className={`${reveal('portrait').className} portrait-wrap`} style={reveal('portrait').style}>
              <div className="portrait" data-testid="img-khalil">
                <img src={profileImage} alt="Khalil Housheya" />
                <div className="portrait-content">
                </div>
              </div>
              <div className="portrait-stamp">{copy.hero.stamp}</div>
            </div>
          </div>
          <div className="scroll-cue"><span />{copy.hero.scroll}</div>
        </section>

        <div className="ticker" aria-label="Areas of practice">
          <div className="ticker-track">
            {[0, 1].map((sequence) => (
              <div className="ticker-sequence" aria-hidden={sequence === 1} key={sequence}>
                {copy.ticker.map((item: string, index: number) => <span className="ticker-item" key={`${item}-${index}`}>{item}</span>)}
              </div>
            ))}
          </div>
        </div>

        <section className="section about" id="about">
          <div className="section-inner">
            <div className="section-heading">
              <div className="section-kicker">{copy.about.kicker}</div>
              <div>
                <h2 {...reveal('about-title')} className="section-title" style={reveal('about-title').style}>{copy.about.title}</h2>
                <p {...reveal('about-intro', 80)} className="section-intro" style={reveal('about-intro').style}>{copy.about.intro}</p>
              </div>
            </div>
            <div className="about-grid">
              <div>
                <div {...reveal('about-copy')} className="about-copy" style={reveal('about-copy').style}>{copy.about.paragraph}</div>
                <p {...reveal('about-small', 80)} className="small-copy" style={reveal('about-small').style}>{copy.about.small}</p>
              </div>
              <div>
                <div className="what-grid">
                  {copy.about.what.map((item: any, index: number) => (
                    <article {...reveal(`what-${index}`, index * 80)} className="what-card" style={reveal(`what-${index}`).style} key={item.number} data-testid={`card-what-${index}`}>
                      <span className="what-number">{item.number}</span>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </article>
                  ))}
                </div>
                {/* REPLACE: update these editable portfolio stats */}
                <div className="stats-row">
                  {copy.about.stats.map((stat: any, index: number) => <div className="stat" key={stat.label} data-testid={`stat-about-${index}`}><span className="stat-value">{stat.value}</span><span className="stat-label">{stat.label}</span></div>)}
                </div>
                <div className="languages">
                  <h3>{copy.about.languagesTitle}</h3>
                  {copy.about.languages.map((item: any) => <div className="language-line" key={item.name}><span>{item.name}</span><span className="language-bar"><span className="language-fill" style={{ width: item.width }} /></span><span>{item.level}</span></div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section work" id="work">
          <div className="section-inner">
            <div className="section-heading">
              <div className="section-kicker">{copy.work.kicker}</div>
              <div><h2 {...reveal('work-title')} className="section-title" style={reveal('work-title').style}>{copy.work.title}</h2><p {...reveal('work-intro', 80)} className="section-intro" style={reveal('work-intro').style}>{copy.work.intro}</p></div>
            </div>
            <div className="project-list">
              {copy.work.projects.map((project: any, index: number) => (
                <article {...reveal(`project-${project.id}`, index * 100)} className={`project ${project.id === 'nidaa' ? 'nidaa' : ''}`} style={reveal(`project-${project.id}`).style} key={project.id} data-testid={`card-project-${project.id}`}>
                  <div className="project-index">{project.index}</div>
                  <div className="project-main">
                    <div><div className="project-tag">{project.tag}</div><h3>{project.title}</h3><p className="project-description">{project.description}</p>{project.hardPart && <p className="project-hard-part"><strong>The hard part:</strong> {project.hardPart}</p>}</div>
                    <div className="project-footer">
                      <div className="stack">{project.stack.map((item: string) => <span key={item}>{item}</span>)}</div>
                      {project.link ? <a href={project.link} target="_blank" rel="noreferrer" className="project-link" data-testid={`link-project-${project.id}`}>{project.id === 'emilie' ? <Instagram size={15} /> : <ArrowUpRight size={15} />}{project.linkLabel}</a> : <span className="replace-note">{/* REPLACE: add the hardest part and Nidaa project link */}{project.replace}</span>}
                    </div>
                  </div>
                  <div className={`project-art ${project.id === 'nidaa' ? 'nidaa' : project.id === 'emilie' ? 'emilie' : 'bot'}`} aria-label={`${project.title} visual`}><img src={projectImages[project.id as keyof typeof projectImages]} alt={`${project.title} logo`} /><span className="art-label">{project.artLabel}</span></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section skills" id="skills">
          <div className="section-inner">
            <div className="section-heading">
              <div className="section-kicker">{copy.skills.kicker}</div>
              <div><h2 {...reveal('skills-title')} className="section-title" style={reveal('skills-title').style}>{copy.skills.title}</h2><p {...reveal('skills-intro', 80)} className="section-intro" style={reveal('skills-intro').style}>{copy.skills.intro}</p></div>
            </div>
            <div className="skills-layout">
              <div {...reveal('skills-symbol')} style={reveal('skills-symbol').style} className="skills-symbol" aria-hidden="true"><Code2 size={78} strokeWidth={1} color="var(--coral)" /><Database size={52} strokeWidth={1} color="var(--mint)" /><Layers3 size={60} strokeWidth={1} color="var(--gold)" /></div>
              <div className="skill-groups">
                {copy.skills.groups.map((group: any, index: number) => <div {...reveal(`skill-group-${index}`, index * 80)} className="skill-group" style={reveal(`skill-group-${index}`).style} key={group.title}><h3>{group.title}</h3><div className="skill-chips">{group.skills.map((skill: string) => <span className="skill-chip" key={skill} data-testid={`skill-${skill.replaceAll(' ', '-').toLowerCase()}`}>{skill}</span>)}</div></div>)}
              </div>
            </div>
            <div className="tech-marquee" aria-label="Technology stack">
              <div className="tech-marquee-track">
                {['Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'Git', 'GitHub', 'GitHub Actions', 'Postman', 'Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'Git', 'GitHub', 'GitHub Actions', 'Postman'].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section journey" id="journey">
          <div className="section-inner">
            <div className="section-heading">
              <div className="section-kicker">{copy.journey.kicker}</div>
              <div><h2 {...reveal('journey-title')} className="section-title" style={reveal('journey-title').style}>{copy.journey.title}</h2><p {...reveal('journey-intro', 80)} className="section-intro" style={reveal('journey-intro').style}>{copy.journey.intro}</p></div>
            </div>
            <div className="timeline">
              {copy.journey.items.map((item: any, index: number) => <article {...reveal(`journey-${index}`, index * 80)} className="timeline-item" style={reveal(`journey-${index}`).style} key={item.title} data-testid={`timeline-${index}`}><div className="timeline-date">{item.date}</div><div className="timeline-copy"><h3>{item.title}</h3><p>{item.text}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="section-inner">
            <div className="section-kicker">{copy.contact.kicker}</div>
            <h2 {...reveal('contact-title')} style={reveal('contact-title').style}>{copy.contact.title}</h2>
            <p {...reveal('contact-copy', 80)} className="contact-sub" style={reveal('contact-copy').style}>{copy.contact.text}</p>
            <div className="contact-links">
              <a href={socials.telegram} target="_blank" rel="noreferrer" className="contact-button" data-testid="link-contact-telegram"><Send size={16} />{copy.contact.telegram}</a>
              <a href={socials.github} target="_blank" rel="noreferrer" className="contact-button" data-testid="link-contact-github"><Github size={16} />{copy.contact.github}</a>
              <a href={emailComposeUrl} target="_blank" rel="noreferrer" className="contact-button" data-testid="link-contact-email"><Mail size={16} />{copy.contact.email}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>{copy.footer.note}</span>
        <span className="footer-note">{copy.footer.made}</span>
        <a href="#top" data-testid="link-back-to-top">{copy.footer.top} <ArrowUpRight size={13} /></a>
      </footer>
    </div>
  );
}

export default App;