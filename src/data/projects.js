export const projects = [
  {
    id: 1,
    title: "Déploiement Windows Server 2022",
    icon: "/images/windows-server.png",
    shortDescription: "Installation complète avec AD, DNS, DHCP, VLAN et GPO.",
    description: `
      Projet complet de mise en place d’un environnement Windows Server 2022 :
      - Installation sous VMware Workstation
      - Création d'un domaine Active Directory
      - Serveur DNS interne + DHCP avec scopes
      - Segmentation réseau via plusieurs VLANs
      - Création et déploiement de GPO
    `,
    skills: [
      "Windows Server 2022",
      "Active Directory",
      "DNS / DHCP",
      "GPO",
      "Segmentation VLAN",
      "VMware"
    ],
    images: [
      "/images/projets/ws-1.png",
      "/images/projets/ws-2.png"
    ]
  }
];
