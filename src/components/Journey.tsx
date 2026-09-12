import type { Copy, Reveal } from '../site';

function Journey({ copy, reveal }: { copy: Copy; reveal: Reveal }) {
  return (
    <section className="section journey" id="journey">
      <div className="section-inner">
        <div className="section-heading">
          <div className="section-kicker">{copy.journey.kicker}</div>
          <div><h2 {...reveal('journey-title', 0, 'section-title')}>{copy.journey.title}</h2><p {...reveal('journey-intro', 80, 'section-intro')}>{copy.journey.intro}</p></div>
        </div>
        <div className="timeline">
          {copy.journey.items.map((item: any, index: number) => <article {...reveal(`journey-${index}`, index * 80, 'timeline-item')} key={item.title}><div className="timeline-date">{item.date}</div><div className="timeline-copy"><h3>{item.title}</h3><p>{item.text}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}

export default Journey;
