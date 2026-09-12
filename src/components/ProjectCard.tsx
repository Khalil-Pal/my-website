import { ArrowUpRight, Github, Instagram } from 'lucide-react';
import sandyLogo from '@assets/sandy.webp';
import nidaaLogo from '@assets/nidaa.webp';
import emilieLogo from '@assets/emilie.webp';
import emilieOne from '@assets/emilie-1.webp';
import emilieTwo from '@assets/emilie-2.webp';
import emilieThree from '@assets/emilie-3.webp';
import type { Reveal } from '../site';

const projectImages = {
  sandy: sandyLogo,
  nidaa: nidaaLogo,
  emilie: emilieLogo,
};

// Real pieces from the studio's Instagram. Only the design project has a gallery;
// the alt text for each comes from the active language's project.gallery array.
const galleries: Record<string, string[]> = {
  emilie: [emilieOne, emilieTwo, emilieThree],
};

function ProjectCard({ project, index, reveal }: { project: any; index: number; reveal: Reveal }) {
  return (
    <article {...reveal(`project-${project.id}`, index * 100, `project ${project.id}`)}>
      <div className="project-index">{project.index}</div>
      <div className="project-main">
        <div><div className="project-tag">{project.tag}</div><h3>{project.title}</h3><p className="project-description">{project.description}</p>{project.hardPart && <p className="project-hard-part"><strong>The hard part:</strong> {project.hardPart}</p>}{galleries[project.id] && (
            <div className="project-gallery">
              <span className="project-gallery-label">{project.galleryLabel}</span>
              <div className="project-gallery-grid">
                {galleries[project.id].map((src, position) => (
                  <figure key={src}>
                    <img src={src} alt={project.gallery?.[position] ?? `${project.title} design piece`} width={480} height={600} loading="lazy" decoding="async" />
                  </figure>
                ))}
              </div>
            </div>
          )}</div>
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
