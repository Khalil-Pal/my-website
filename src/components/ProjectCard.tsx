import { ArrowUpRight, Github, Instagram } from 'lucide-react';
import sandyLogo from '@assets/sandy.webp';
import nidaaLogo from '@assets/nidaa.webp';
import emilieLogo from '@assets/emilie.webp';
import type { Reveal } from '../site';

const projectImages = {
  sandy: sandyLogo,
  nidaa: nidaaLogo,
  emilie: emilieLogo,
};

function ProjectCard({ project, index, reveal }: { project: any; index: number; reveal: Reveal }) {
  return (
    <article {...reveal(`project-${project.id}`, index * 100)} className={`project ${project.id}`} style={reveal(`project-${project.id}`).style}>
      <div className="project-index">{project.index}</div>
      <div className="project-main">
        <div><div className="project-tag">{project.tag}</div><h3>{project.title}</h3><p className="project-description">{project.description}</p>{project.hardPart && <p className="project-hard-part"><strong>The hard part:</strong> {project.hardPart}</p>}</div>
        <div className="project-footer">
          <div className="stack">{project.stack.map((item: string) => <span key={item}>{item}</span>)}</div>
          <a href={project.link} target="_blank" rel="noreferrer" className="project-link">{project.id === 'emilie' ? <Instagram size={15} /> : project.id === 'nidaa' ? <Github size={15} /> : <ArrowUpRight size={15} />}{project.linkLabel}</a>
        </div>
      </div>
      <div className={`project-art ${project.id === 'nidaa' ? 'nidaa' : project.id === 'emilie' ? 'emilie' : 'bot'}`} aria-label={`${project.title} visual`}><img src={projectImages[project.id as keyof typeof projectImages]} alt={`${project.title} logo`} width={860} height={645} loading="lazy" decoding="async" /><span className="art-label">{project.artLabel}</span></div>
    </article>
  );
}

export default ProjectCard;
