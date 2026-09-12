import ProjectCard from './ProjectCard';
import type { Copy, Reveal } from '../site';

function Work({ copy, reveal }: { copy: Copy; reveal: Reveal }) {
  return (
    <section className="section work" id="work">
      <div className="section-inner">
        <div className="section-heading">
          <div className="section-kicker">{copy.work.kicker}</div>
          <div><h2 {...reveal('work-title')} className="section-title" style={reveal('work-title').style}>{copy.work.title}</h2><p {...reveal('work-intro', 80)} className="section-intro" style={reveal('work-intro').style}>{copy.work.intro}</p></div>
        </div>
        <div className="project-list">
          {copy.work.projects.map((project: any, index: number) => (
            <ProjectCard key={project.id} project={project} index={index} reveal={reveal} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
