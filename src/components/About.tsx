import type { Copy, Reveal } from '../site';

function About({ copy, reveal }: { copy: Copy; reveal: Reveal }) {
  return (
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
            <div className="stats-row">
              {copy.about.stats.map((stat: any, index: number) => <div className="stat" key={stat.label} data-testid={`stat-about-${index}`}><span className="stat-value">{stat.value}</span><span className="stat-label">{stat.label}</span></div>)}
            </div>
            <div className="languages">
              <h3>{copy.about.languagesTitle}</h3>
              {copy.about.languages.map((item: any) => <div className="language-line" key={item.name}><span className="language-name">{item.name}</span><span className="language-level">{item.level}</span></div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
