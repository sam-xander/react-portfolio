import Project from "../components/Project";
import projects from "../projects.json";

function Work() {
  return (
    <section class="work-section" id="work">
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
