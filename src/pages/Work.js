import Project from "../components/Project";
import projects from "../data/projects.json";

function Work() {
  return (
    <section class="work-section">
      <h1>MY WORK</h1>
      <p>Explore a selection of my creative projects.</p>
      <div class="work-container">
        <div class="work-grid">
          {projects.map((project) => (
            <Project
              link={project.link}
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
