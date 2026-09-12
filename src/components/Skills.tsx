import { Code2, Database, Layers3 } from 'lucide-react';
import type { Copy, Reveal } from '../site';

const techStack = ['Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'Git', 'GitHub', 'GitHub Actions', 'Postman'];

function Skills({ copy, reveal }: { copy: Copy; reveal: Reveal }) {
  return (
    <section className="section skills" id="skills">
      <div className="section-inner">
        <div className="section-heading">
          <div className="section-kicker">{copy.skills.kicker}</div>
          <div><h2 {...reveal('skills-title', 0, 'section-title')}>{copy.skills.title}</h2><p {...reveal('skills-intro', 80, 'section-intro')}>{copy.skills.intro}</p></div>
        </div>
        <div className="skills-layout">
          <div {...reveal('skills-symbol', 0, 'skills-symbol')} aria-hidden="true"><Code2 size={78} strokeWidth={1} color="var(--coral)" /><Database size={52} strokeWidth={1} color="var(--mint)" /><Layers3 size={60} strokeWidth={1} color="var(--gold)" /></div>
          <div className="skill-groups">
            {copy.skills.tiers.map((tier: any, index: number) => <div {...reveal(`skill-tier-${tier.id}`, index * 80, `skill-tier ${tier.id}`)} key={tier.id}><h3>{tier.title}</h3><div className="skill-chips">{tier.skills.map((skill: string) => <span className="skill-chip" key={skill}>{skill}</span>)}</div></div>)}
            <p {...reveal('skills-credential', 180, 'skill-credential')}>{copy.skills.credential}</p>
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
