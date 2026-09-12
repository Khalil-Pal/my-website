import { BriefcaseBusiness, Github, Linkedin, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import profileImage from '@assets/portrait.webp';
import { emailComposeUrl, socials } from '../site';
import type { Copy, Reveal } from '../site';

function Hero({ copy, reveal }: { copy: Copy; reveal: Reveal }) {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <div {...reveal('hero-eyebrow', 0, 'eyebrow')}>{copy.hero.eyebrow}</div>
          <h1 {...reveal('hero-title', 90)}>
            {copy.hero.first}<br /><span className="accent">{copy.hero.second}</span>
          </h1>
          <p {...reveal('hero-role', 150, 'hero-subtitle')}>{copy.hero.role}</p>
          <p {...reveal('hero-bio', 180, 'hero-bio')}>{copy.hero.bio}</p>
          <div {...reveal('hero-meta', 210, 'hero-meta')}>
            <span className="meta-item"><MapPin size={14} />{copy.hero.location}</span>
            <span className="meta-item"><BriefcaseBusiness size={14} />{copy.hero.status}</span>
          </div>
          <div {...reveal('hero-links', 270, 'hero-links')}>
            <a href={socials.github} target="_blank" rel="noreferrer" className="text-link"><Github size={15} />GitHub</a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="text-link"><Linkedin size={15} />LinkedIn</a>
            <a href={emailComposeUrl} target="_blank" rel="noreferrer" className="text-link"><Mail size={15} />Email</a>
            <a href={socials.telegram} target="_blank" rel="noreferrer" className="text-link"><Send size={15} />Telegram</a>
            <a href={socials.reddit} target="_blank" rel="noreferrer" className="text-link"><MessageCircle size={15} />Reddit</a>
          </div>
        </div>
        <div {...reveal('portrait', 170, 'portrait-wrap')}>
          <div className="portrait">
            <img src={profileImage} alt="Khalil Housheya" width={780} height={1170} decoding="async" />
          </div>
        </div>
      </div>
      <div className="scroll-cue"><span />{copy.hero.scroll}</div>
    </section>
  );
}

export default Hero;
