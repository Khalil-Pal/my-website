import { FileText, Github, Linkedin, Mail, MessageCircle, Send } from 'lucide-react';
import { emailComposeUrl, resumeUrl, socials } from '../site';
import type { Copy, Reveal } from '../site';

function Contact({ copy, reveal }: { copy: Copy; reveal: Reveal }) {
  return (
    <section className="section contact" id="contact">
      <div className="section-inner">
        <div className="section-kicker">{copy.contact.kicker}</div>
        <h2 {...reveal('contact-title')} style={reveal('contact-title').style}>{copy.contact.title}</h2>
        <p {...reveal('contact-copy', 80)} className="contact-sub" style={reveal('contact-copy').style}>{copy.contact.text}</p>
        <div className="contact-links">
          <a href={resumeUrl} target="_blank" rel="noreferrer" className="contact-button"><FileText size={16} />{copy.contact.resume}</a>
          <a href={socials.telegram} target="_blank" rel="noreferrer" className="contact-button"><Send size={16} />{copy.contact.telegram}</a>
          <a href={socials.github} target="_blank" rel="noreferrer" className="contact-button"><Github size={16} />{copy.contact.github}</a>
          <a href={emailComposeUrl} target="_blank" rel="noreferrer" className="contact-button"><Mail size={16} />{copy.contact.email}</a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" className="contact-button"><Linkedin size={16} />LinkedIn</a>
          <a href={socials.reddit} target="_blank" rel="noreferrer" className="contact-button"><MessageCircle size={16} />Reddit</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
