import { useState } from "react";
import "./App.css";
import heroImg from "./assets/images/hero.png";
import aboutPhoto from "./assets/images/about.jpg";
import icon1 from "./assets/icons/icon1.png";
import win1 from "./assets/projets/ws1.png";
import win2 from "./assets/projets/ws2.png";
import win3 from "./assets/projets/ws3.png";


export default function App() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Création d’un Laboratoire Informatique Professionnel (Lab Enterprise) sous VMware",
      icon: icon1,
      shortDescription: "Mise en place d’un laboratoire informatique complet sous VMware afin de simuler l’infrastructure d’une entreprise : domaine Active Directory, services réseau, machines clientes, politiques de sécurité et segmentation du réseau.",
      description: `
        
      Le but de ce projet toujours en cours est de créer un laboratoire informatique professionnel (Lab Enterprise) sous VMware Workstation afin de simuler l’infrastructure d’une entreprise typique.
      Ce laboratoire me permet de pratiquer et d’expérimenter diverses configurations réseau, services et politiques de sécurité dans un environnement contrôlé.
      Il me sert également de plateforme pour tester des scénarios de cybersécurité(coté offensive et défensive) et d’administration système.
      Pour l'instant, le laboratoire comprend les éléments suivants :
        - Installation de Windows Server 2022 sur VMware Workstation
        - Création d’un domaine Active Directory (AD DS)
        - Mise en place du serveur DNS, DHCP (scopes, réservations…)
        - Segmentation réseau VLANs + Routage inter-VLANs avec un routeur virtuel pfSense
        - Ajout de 3 machines clientes Windows 10/11 au domaine
        - Création et application de GPO (groupes de sécurité, et utilisateurs)
        - Scripts PowerShell pour automatiser les tâches
      `,
      images: [
        win1,
        win2,
        win3
      ],
      skills: [
        "Windows Server 2022",
        "Active Directory",
        "DNS / DHCP",
        "GPO",
        "Scripts PowerShell",
        "Segmentation réseau",
        "VMware Workstation"
      ]
    },

  ];

  return (
    <div className="app">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1 className="title">PORTFOLIO</h1>
          <p className="subtitle">
            <span className="blob">Cybersécurité</span> & <span className="blob">Réseaux</span>
          </p>
        </div>
        <img
          className="hero-img"
          src={heroImg}
        />
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <div className="about-card">
          <img
            className="about-photo"
            src={aboutPhoto}
          />
          <div className="about-text">
            <h2>A propos de moi</h2>
            <p>
              Je suis un étudiant en cycle d'ingénierie à CESI école d'ingenieurs (Bac+3) avec pour spécialité la cybersécurité, le réseau et l'administration systèmes.
              Passionné par ces domaines, j'aime créer, analyser et sécuriser des environnements techniques tout en gardant une approche esthétique et moderne.
            </p>
          </div>
        </div>
        
      </section>
    
      {/* PROJECTS SECTION */}
        <section className="projects">
          <h2 className="projects-title">Mes Projets</h2>
          <div className="projects-grid">
            {projects.map((p) => (
              <div
                key={p.id}
                className="project-card"
                onClick={() => setActiveProject(p)}
              >
                  <img src={p.icon} className="project-icon" />
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.shortDescription}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MODAL */}
        {activeProject && (
          <div className="modal-overlay" onClick={() => setActiveProject(null)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              
              <div className="modal-header">
                <img src={activeProject.icon} className="modal-icon" />
                <h2>{activeProject.title}</h2>
              </div>

              <p className="modal-description">{activeProject.description}</p>

                  <div className="gallery">
                    {activeProject.images.map((img, i) => (
                      <img key={i} src={img} className="gallery-img" />
                    ))}
                  </div>

              <button className="close-btn" onClick={() => setActiveProject(null)}>
                Fermer
              </button>
            </div>
          </div>
        )}
    </div>
  );
}