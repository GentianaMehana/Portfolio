function ProjectArtwork({ project }) {
  if (project.artwork === 'elsewhere') {
    return (
      <>
        <img
          src="/assets/elsewhere-library.jpg"
          alt="National Library of Kosovo, part of the Elsewhere city guide"
          loading="lazy"
        />
        <span className="photo-credit">National Library · Planeti · CC BY-SA 4.0</span>
      </>
    );
  }

  if (project.artwork === 'medpal') {
    return (
      <>
        <span className="medpal-orbit orbit-one" />
        <span className="medpal-orbit orbit-two" />
        <span className="medpal-cross" aria-hidden="true">+</span>
        <span className="medpal-word">medpal<span>.</span></span>
        <span className="medpal-caption">CARE, MADE<br />MORE HUMAN.</span>
      </>
    );
  }

  return (
    <>
      <span className="bursat-sun" aria-hidden="true">✳</span>
      <span className="bursat-big">MAKE<br />YOUR<br /><i>next move.</i></span>
      <span className="bursat-caption">A GOOD FUTURE IS<br />WORTH APPLYING FOR.</span>
    </>
  );
}

export default function ProjectCard({ project }) {
  const cardClass = project.featured ? 'project-card project-card-wide' : 'project-card';

  return (
    <article className={cardClass}>
      <a
        className={`project-image ${project.artwork}-image`}
        href={project.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit the ${project.title} website`}
      >
        <ProjectArtwork project={project} />
        <span className="image-tag">
          {project.featured ? 'CITY GUIDE' : project.category}
          <b>{project.number}</b>
        </span>
        <span className="image-arrow" aria-hidden="true">↗</span>
      </a>

      <div className="project-copy">
        <div className="project-meta">
          <span>{project.number} / {project.category}</span>
          <span>{project.format}</span>
        </div>
        <h3>
          {project.title}
          {project.subtitle && <i> {project.subtitle}</i>}
        </h3>
        <p>{project.description}</p>
        <div className="project-bottom">
          <div className="tag-list">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <a className="visit-link" href={project.url} target="_blank" rel="noreferrer">
            Visit website <span>↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}
