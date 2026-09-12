import { BriefcaseBusiness, Github, Linkedin, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import profileImage from '@assets/portrait.webp';
import { emailComposeUrl, socials } from '../site';
import type { Copy, Reveal } from '../site';

function Hero({ copy, reveal }: { copy: Copy; reveal: Reveal }) {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <div {...reveal('hero-eyebrow')} className={`${reveal('hero-eyebrow').className} eyebrow`} style={reveal('hero-eyebrow').style}>{copy.hero.eyebrow}</div>
          <h1 {...reveal('hero-title', 90)} className={`${reveal('hero-title').className}`} style={reveal('hero-title').style}>
            {copy.hero.first}<br /><span className="accent">{copy.hero.second}</span>
          </h1>
          <p {...reveal('hero-role', 150)} className={`${reveal('hero-role').className} hero-subtitle`} style={reveal('hero-role').style}>{copy.hero.role}</p>
          <p {...reveal('hero-bio', 180)} className={`${reveal('hero-bio').className} hero-bio`} style={reveal('hero-bio').style}>{copy.hero.bio}</p>
          <div {...reveal('hero-meta', 210)} className={`${reveal('hero-meta').className} hero-meta`} style={reveal('hero-meta').style}>
            <span className="meta-item" data-testid="text-location"><MapPin size={14} />{copy.hero.location}</span>
            <span className="meta-item" data-testid="text-status"><BriefcaseBusiness size={14} />{copy.hero.status}</span>
          </div>
          <div {...reveal('hero-links', 270)} className={`${reveal('hero-links').className} hero-links`} style={reveal('hero-links').style}>
            <a href={socials.github} target="_blank" rel="noreferrer" className="text-link" data-testid="link-github-hero"><Github size={15} />GitHub</a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="text-link" data-testid="link-linkedin-hero"><Linkedin size={15} />LinkedIn</a>
            <a href={emailComposeUrl} target="_blank" rel="noreferrer" className="text-link" data-testid="link-email-hero"><Mail size={15} />Email</a>
            <a href={socials.telegram} target="_blank" rel="noreferrer" className="text-link" data-testid="link-telegram-hero"><Send size={15} />Telegram</a>
            <a href={socials.reddit} target="_blank" rel="noreferrer" className="text-link" data-testid="link-reddit-hero"><MessageCircle size={15} />Reddit</a>
          </div>
        </div>
        <div {...reveal('portrait', 170)} className={`${reveal('portrait').className} portrait-wrap`} style={reveal('portrait').style}>
          <div className="portrait" data-testid="img-khalil">
            <img src={profileImage} alt="Khalil Housheya" width={780} height={1170} decoding="async" />
            <div className="portrait-content">
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-cue"><span />{copy.hero.scroll}</div>
    </section>
  );
}

export default Hero;
