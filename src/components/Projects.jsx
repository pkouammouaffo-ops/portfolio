import { useState } from "react";
import { projects } from "../data/projects";
import "./Projects.css";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <h2>Mes Projets</h2>

      {/* Liste des projets */}
      <div className="projects-grid">
        {projects.map((p) => (
          <div
            key={p.id}
            className="project-card"
            onClick={() => setSelectedProject(p)}
          >
            <img src={p.icon} className="project-icon" alt="" />
            <h3>{p.title}</h3>
            <p>{p.shortDescription}</p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            
            <button className="close-btn" onClick={() => setSelectedProject(null)}>
              ✕
            </button>

            <div className="modal-header">
              <img src={selectedProject.icon} className="modal-icon" alt="" />
              <h2>{selectedProject.title}</h2>
            </div>

            <p className="modal-description">{selectedProject.description}</p>

            {/* galerie d’images */}
            <div className="gallery">
              {selectedProject.images?.map((img, index) => (
                <img key={index} src={img} className="gallery-img" alt="" />
              ))}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
