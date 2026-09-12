import { Code2, Database, Layers3 } from 'lucide-react';
import type { Copy, Reveal } from '../site';

const techStack = ['Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'Git', 'GitHub', 'GitHub Actions', 'Postman'];

function Skills({ copy, reveal }: { copy: Copy; reveal: Reveal }) {
  return (
    <section className="section skills" id="skills">
      <div className="section-inner">
        <div className="section-heading">
          <div className="section-kicker">{copy.skills.kicker}</div>
          <div><h2 {...reveal('skills-title')} className="section-title" style={reveal('skills-title').style}>{copy.skills.title}</h2><p {...reveal('skills-intro', 80)} className="section-intro" style={reveal('skills-intro').style}>{copy.skills.intro}</p></div>
        </div>
        <div className="skills-layout">
          <div {...reveal('skills-symbol')} style={reveal('skills-symbol').style} className="skills-symbol" aria-hidden="true"><Code2 size={78} strokeWidth={1} color="var(--coral)" /><Database size={52} strokeWidth={1} color="var(--mint)" /><Layers3 size={60} strokeWidth={1} color="var(--gold)" /></div>
          <div className="skill-groups">
            {copy.skills.tiers.map((tier: any, index: number) => <div {...reveal(`skill-tier-${tier.id}`, index * 80)} className={`skill-tier ${tier.id}`} style={reveal(`skill-tier-${tier.id}`).style} key={tier.id}><h3>{tier.title}</h3><div className="skill-chips">{tier.skills.map((skill: string) => <span className="skill-chip" key={skill} data-testid={`skill-${skill.replaceAll(' ', '-').toLowerCase()}`}>{skill}</span>)}</div></div>)}
            <p {...reveal('skills-credential', 180)} className="skill-credential" style={reveal('skills-credential').style}>{copy.skills.credential}</p>
          </div>
        </div>
        <div className="tech-marquee" aria-label="Technology stack">
          <div className="tech-marquee-track">
            {[0, 1, 2, 3].map((sequence) => (
              <div className="tech-marquee-sequence" aria-hidden={sequence !== 0} key={sequence}>
                {techStack.map((item) => <span key={item}>{item}</span>)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
