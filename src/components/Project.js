import React from 'react'

const Project = ({title, description, img, tools, overview, link, repo}) => {
  return (
    <div>
        <section class="project-cs-hero">
      <div class="project-cs-hero__content">
        <h1 class="heading-primary">{title}</h1>
        <div class="project-cs-hero__info">
          <p class="text-primary">
            {description}
          </p>
        </div>
        <div class="project-cs-hero__cta">
          <a href={link} class="btn btn--bg" target="_blank">Live Link</a>
        </div>
      </div>
    </section>
    <section class="project-details">
      <div class="main-container">
        <div class="project-details__content">
          <div class="project-details__showcase-img-cont">
            <img
              src={img}
              alt="Project Image"
              class="project-details__showcase-img"
            />
          </div>
          <div class="project-details__content-main">
            <div class="project-details__desc">
              <h3 class="project-details__content-title">Project Overview</h3>
              <p class="project-details__desc-para">
                {overview}
              </p>
              
            </div>
            <div class="project-details__tools-used">
              <h3 class="project-details__content-title">Tools Used</h3>
              <div class="skills">
                {tools.map((tool) => <div class="skills__skill">{tool}</div>)}
                
              </div>
            </div>
            <div class="project-details__links">
              <h3 class="project-details__content-title">See Live</h3>
              <a
                href={link}
                class="btn btn--med btn--theme project-details__links-btn"
                target="_blank"
                >Live Link</a
              >
              <a
                href={repo}
                class="btn btn--med btn--theme-inv project-details__links-btn"
                target="_blank"
                >Code Link</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Project