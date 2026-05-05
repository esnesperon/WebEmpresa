import type { Lang } from './ui';

interface ServiceDetail {
  what: string;
  includes: string[];
  for: string;
}

type ServiceDetails = Record<string, Record<Lang, ServiceDetail>>;

export const serviceDetails: ServiceDetails = {
  automatizacion: {
    es: {
      what: "Diseñamos e implantamos flujos de trabajo automatizados que conectan tus herramientas y procesos. Una vez configurado, el sistema opera sin intervención humana.",
      includes: [
        "Análisis del proceso actual y mapa de flujos",
        "Diseño e implementación de las automatizaciones",
        "Integración con las herramientas que ya usas",
        "Pruebas en entorno de staging antes del despliegue",
        "Formación y documentación para tu equipo",
        "Soporte post-lanzamiento incluido",
      ],
      for: "Empresas con procesos repetitivos que consumen tiempo: confirmaciones, notificaciones, sincronización de datos entre herramientas, gestión de leads.",
    },
    en: {
      what: "We design and implement automated workflows that connect your tools and processes. Once configured, the system operates without human intervention.",
      includes: [
        "Current process analysis and flow mapping",
        "Design and implementation of automations",
        "Integration with the tools you already use",
        "Staging environment testing before deployment",
        "Training and documentation for your team",
        "Post-launch support included",
      ],
      for: "Companies with time-consuming repetitive processes: confirmations, notifications, data synchronization between tools, lead management.",
    },
    fr: {
      what: "Nous concevons et mettons en place des flux de travail automatisés qui connectent vos outils et processus. Une fois configuré, le système fonctionne sans intervention humaine.",
      includes: [
        "Analyse du processus actuel et cartographie des flux",
        "Conception et mise en œuvre des automatisations",
        "Intégration avec les outils que vous utilisez déjà",
        "Tests en environnement de staging avant le déploiement",
        "Formation et documentation pour votre équipe",
        "Support post-lancement inclus",
      ],
      for: "Entreprises avec des processus répétitifs chronophages : confirmations, notifications, synchronisation de données entre outils, gestion des prospects.",
    },
  },
  web: {
    es: {
      what: "Construimos sitios web rápidos, seguros y diseñados a medida. Sin dependencias de plugins ni plataformas de terceros que requieran mantenimiento constante.",
      includes: [
        "Diseño propio adaptado a tu identidad",
        "Desarrollo con tecnologías de alto rendimiento",
        "SEO técnico desde el primer día",
        "Responsive y optimizado para móvil",
        "Alojamiento en servidores europeos propios",
        "Formación para gestionar el contenido de forma autónoma",
      ],
      for: "Negocios que necesitan presencia digital profesional: empresas de servicios, autónomos, startups, comercios locales con clientes que buscan online.",
    },
    en: {
      what: "We build fast, secure, custom-designed websites. No plugin dependencies or third-party platforms requiring constant maintenance.",
      includes: [
        "Custom design adapted to your identity",
        "Development with high-performance technologies",
        "Technical SEO from day one",
        "Responsive and mobile-optimized",
        "Hosting on our own European servers",
        "Training to manage content independently",
      ],
      for: "Businesses that need professional digital presence: service companies, freelancers, startups, local businesses with customers who search online.",
    },
    fr: {
      what: "Nous construisons des sites web rapides, sécurisés et conçus sur mesure. Pas de dépendances aux plugins ni aux plateformes tierces nécessitant une maintenance constante.",
      includes: [
        "Design personnalisé adapté à votre identité",
        "Développement avec des technologies haute performance",
        "SEO technique dès le premier jour",
        "Responsive et optimisé pour mobile",
        "Hébergement sur nos propres serveurs européens",
        "Formation pour gérer le contenu de manière autonome",
      ],
      for: "Entreprises ayant besoin d'une présence numérique professionnelle : entreprises de services, freelances, startups, commerces locaux.",
    },
  },
  rag: {
    es: {
      what: "Sistemas de inteligencia artificial que consultan y razonan sobre tus propios documentos. Puedes hacer preguntas en lenguaje natural y obtener respuestas precisas con referencias a las fuentes.",
      includes: [
        "Ingesta y procesado de tu documentación existente",
        "Sistema de búsqueda semántica sobre tus datos",
        "Interfaz de consulta adaptada a tu flujo de trabajo",
        "Control de acceso por usuarios o roles",
        "Infraestructura propia: tus datos no salen de tu entorno",
        "Documentación técnica y formación incluidas",
      ],
      for: "Despachos legales, clínicas, empresas con catálogos técnicos, organizaciones con mucha documentación interna que se consulta con frecuencia.",
    },
    en: {
      what: "AI systems that query and reason over your own documents. You can ask questions in natural language and get precise answers with source references.",
      includes: [
        "Ingestion and processing of your existing documentation",
        "Semantic search system over your data",
        "Query interface adapted to your workflow",
        "Access control by users or roles",
        "Own infrastructure: your data never leaves your environment",
        "Technical documentation and training included",
      ],
      for: "Law firms, clinics, companies with technical catalogs, organizations with large internal documentation that is frequently consulted.",
    },
    fr: {
      what: "Systèmes d'IA qui interrogent et raisonnent sur vos propres documents. Vous pouvez poser des questions en langage naturel et obtenir des réponses précises avec références aux sources.",
      includes: [
        "Ingestion et traitement de votre documentation existante",
        "Système de recherche sémantique sur vos données",
        "Interface de consultation adaptée à votre flux de travail",
        "Contrôle d'accès par utilisateurs ou rôles",
        "Infrastructure propre : vos données ne quittent pas votre environnement",
        "Documentation technique et formation incluses",
      ],
      for: "Cabinets d'avocats, cliniques, entreprises avec des catalogues techniques, organisations avec beaucoup de documentation interne fréquemment consultée.",
    },
  },
  agente: {
    es: {
      what: "Agentes que atienden consultas, cualifican clientes y ejecutan acciones reales, las 24 horas, sin supervisión. No siguen árboles de decisión fijos: entienden el contexto y actúan en consecuencia.",
      includes: [
        "Diseño del flujo de atención y criterios de escalado",
        "Integración con tus canales de comunicación actuales",
        "Conexión con tu CRM, agenda o base de datos",
        "Lógica de derivación al equipo humano cuando corresponde",
        "Operación sobre tu infraestructura propia",
        "Monitorización y ajuste post-lanzamiento",
      ],
      for: "Negocios con alto volumen de consultas entrantes, equipos de atención saturados o necesidad de respuesta fuera del horario laboral.",
    },
    en: {
      what: "Agents that handle queries, qualify clients and execute real actions, 24 hours a day, without supervision. They don't follow fixed decision trees: they understand context and act accordingly.",
      includes: [
        "Design of the care flow and escalation criteria",
        "Integration with your current communication channels",
        "Connection to your CRM, calendar or database",
        "Human team escalation logic when appropriate",
        "Operation on your own infrastructure",
        "Post-launch monitoring and adjustment",
      ],
      for: "Businesses with high volumes of incoming queries, overloaded support teams or need for responses outside business hours.",
    },
    fr: {
      what: "Des agents qui traitent les requêtes, qualifient les clients et exécutent des actions réelles, 24h/24, sans supervision. Ils ne suivent pas d'arbres de décision fixes : ils comprennent le contexte et agissent en conséquence.",
      includes: [
        "Conception du flux d'assistance et des critères d'escalade",
        "Intégration avec vos canaux de communication actuels",
        "Connexion avec votre CRM, agenda ou base de données",
        "Logique d'escalade vers l'équipe humaine le cas échéant",
        "Fonctionnement sur votre propre infrastructure",
        "Surveillance et ajustement post-lancement",
      ],
      for: "Entreprises avec un volume élevé de demandes entrantes, équipes d'assistance surchargées ou besoin de réponses en dehors des heures de travail.",
    },
  },
  ecom: {
    es: {
      what: "Comercio electrónico completo: catálogo, pagos, gestión de pedidos e integraciones con tu operativa. Adaptamos la plataforma al proyecto, no al revés.",
      includes: [
        "Diseño de la tienda y experiencia de compra",
        "Integración de pasarela de pago",
        "Gestión de catálogo y variantes de producto",
        "Integración con sistemas de gestión de stock",
        "Automatización del proceso postventa",
        "Formación para gestionar la tienda de forma autónoma",
      ],
      for: "Negocios que venden productos físicos o digitales y quieren hacerlo online con un proceso de compra claro y bien integrado con su operativa.",
    },
    en: {
      what: "Complete e-commerce: catalog, payments, order management and integrations with your operations. We adapt the platform to the project, not the other way around.",
      includes: [
        "Store design and shopping experience",
        "Payment gateway integration",
        "Catalog management and product variants",
        "Stock management system integration",
        "Post-sale process automation",
        "Training to manage the store independently",
      ],
      for: "Businesses selling physical or digital products who want to do so online with a clear purchase process well integrated with their operations.",
    },
    fr: {
      what: "E-commerce complet : catalogue, paiements, gestion des commandes et intégrations avec votre exploitation. Nous adaptons la plateforme au projet, pas l'inverse.",
      includes: [
        "Conception de la boutique et expérience d'achat",
        "Intégration de la passerelle de paiement",
        "Gestion du catalogue et des variantes de produits",
        "Intégration avec les systèmes de gestion des stocks",
        "Automatisation du processus après-vente",
        "Formation pour gérer la boutique de manière autonome",
      ],
      for: "Entreprises vendant des produits physiques ou numériques qui souhaitent le faire en ligne avec un processus d'achat clair et bien intégré à leur exploitation.",
    },
  },
  branding: {
    es: {
      what: "Construcción de marca desde la estrategia. Empezamos por el posicionamiento y el público, y llegamos a la identidad visual como consecuencia coherente de esa base.",
      includes: [
        "Estrategia de marca y definición de posicionamiento",
        "Sistema visual completo: color, tipografía, elementos gráficos",
        "Logotipo en todos los formatos necesarios",
        "Manual de marca para uso interno y con terceros",
        "Entregables listos para aplicar en cualquier canal",
        "Plantillas para los materiales más usados",
      ],
      for: "Empresas que empiezan desde cero, negocios que han crecido y necesitan una identidad a la altura, o marcas cuya imagen actual no refleja quiénes son.",
    },
    en: {
      what: "Brand building from strategy. We start with positioning and audience, and arrive at visual identity as a coherent consequence of that foundation.",
      includes: [
        "Brand strategy and positioning definition",
        "Complete visual system: color, typography, graphic elements",
        "Logo in all necessary formats",
        "Brand guidelines for internal use and with third parties",
        "Deliverables ready to apply across any channel",
        "Templates for the most used materials",
      ],
      for: "Companies starting from scratch, businesses that have grown and need an identity to match, or brands whose current image doesn't reflect who they are.",
    },
    fr: {
      what: "Construction de marque depuis la stratégie. Nous commençons par le positionnement et le public, et arrivons à l'identité visuelle comme conséquence cohérente de cette base.",
      includes: [
        "Stratégie de marque et définition du positionnement",
        "Système visuel complet : couleur, typographie, éléments graphiques",
        "Logo dans tous les formats nécessaires",
        "Charte de marque pour usage interne et avec des tiers",
        "Livrables prêts à appliquer sur n'importe quel canal",
        "Modèles pour les matériaux les plus utilisés",
      ],
      for: "Entreprises qui démarrent de zéro, entreprises qui ont grandi et ont besoin d'une identité à la hauteur, ou marques dont l'image actuelle ne reflète pas qui elles sont.",
    },
  },
  saas: {
    es: {
      what: "Panel de gestión personalizado alojado en tu propio servidor. Centraliza la información que más usas en una interfaz diseñada para tu flujo de trabajo.",
      includes: [
        "Diseño del panel adaptado a tus necesidades",
        "Integración con las fuentes de datos que ya tienes",
        "Sistema de alertas y notificaciones",
        "Exportación de informes",
        "Alojamiento en tu infraestructura: sin cuotas externas",
        "Acceso por usuarios con control de permisos",
      ],
      for: "Equipos que necesitan visibilidad centralizada sobre sus operaciones y no quieren depender de plataformas genéricas que no encajan con su forma de trabajar.",
    },
    en: {
      what: "Custom management dashboard hosted on your own server. Centralizes the information you use most in an interface designed for your workflow.",
      includes: [
        "Dashboard design tailored to your needs",
        "Integration with the data sources you already have",
        "Alert and notification system",
        "Report exports",
        "Hosting on your infrastructure: no external fees",
        "User access with permission control",
      ],
      for: "Teams that need centralized visibility into their operations and don't want to depend on generic platforms that don't fit their way of working.",
    },
    fr: {
      what: "Tableau de bord de gestion personnalisé hébergé sur votre propre serveur. Centralise les informations que vous utilisez le plus dans une interface conçue pour votre flux de travail.",
      includes: [
        "Conception du tableau de bord adaptée à vos besoins",
        "Intégration avec les sources de données que vous avez déjà",
        "Système d'alertes et de notifications",
        "Exportation de rapports",
        "Hébergement sur votre infrastructure : sans frais externes",
        "Accès utilisateurs avec contrôle des permissions",
      ],
      for: "Équipes ayant besoin d'une visibilité centralisée sur leurs opérations et ne souhaitant pas dépendre de plateformes génériques ne correspondant pas à leur façon de travailler.",
    },
  },
  app: {
    es: {
      what: "Desarrollo de productos digitales completos: desde la validación del concepto hasta una plataforma lista para operar en producción y escalar.",
      includes: [
        "Definición del alcance y arquitectura del sistema",
        "Desarrollo por iteraciones con revisiones periódicas",
        "Sistema de autenticación y gestión de usuarios",
        "Integración de pagos si aplica",
        "Pruebas de calidad antes de cada despliegue",
        "Documentación técnica completa entregada",
      ],
      for: "Fundadores con un producto digital definido, empresas que necesitan un sistema interno a medida, o negocios que han superado las limitaciones de las herramientas genéricas.",
    },
    en: {
      what: "Complete digital product development: from concept validation to a platform ready to operate in production and scale.",
      includes: [
        "Scope definition and system architecture",
        "Iterative development with periodic reviews",
        "Authentication and user management system",
        "Payment integration if applicable",
        "Quality testing before each deployment",
        "Complete technical documentation delivered",
      ],
      for: "Founders with a defined digital product, companies that need a custom internal system, or businesses that have outgrown generic tool limitations.",
    },
    fr: {
      what: "Développement de produits numériques complets : de la validation du concept à une plateforme prête à opérer en production et à évoluer.",
      includes: [
        "Définition de la portée et architecture du système",
        "Développement par itérations avec révisions périodiques",
        "Système d'authentification et de gestion des utilisateurs",
        "Intégration des paiements si applicable",
        "Tests de qualité avant chaque déploiement",
        "Documentation technique complète livrée",
      ],
      for: "Fondateurs avec un produit numérique défini, entreprises ayant besoin d'un système interne sur mesure, ou entreprises ayant dépassé les limites des outils génériques.",
    },
  },
  scraper: {
    es: {
      what: "Automatización de la recogida de datos externos, alertas en tiempo real y pipelines de información. Desde fuentes simples hasta entornos con protección avanzada.",
      includes: [
        "Análisis de la fuente de datos y diseño del proceso de extracción",
        "Desarrollo del sistema de recogida automatizada",
        "Procesado y estructuración de los datos obtenidos",
        "Sistema de alertas cuando se detectan cambios relevantes",
        "Programación de ejecuciones periódicas",
        "Panel o informe con los datos recogidos",
      ],
      for: "Negocios que necesitan monitorizar precios, publicaciones, disponibilidad o cualquier información pública que cambia con frecuencia.",
    },
    en: {
      what: "Automation of external data collection, real-time alerts and information pipelines. From simple sources to environments with advanced protection.",
      includes: [
        "Data source analysis and extraction process design",
        "Development of the automated collection system",
        "Processing and structuring of obtained data",
        "Alert system when relevant changes are detected",
        "Scheduling of periodic executions",
        "Dashboard or report with collected data",
      ],
      for: "Businesses that need to monitor prices, publications, availability or any public information that changes frequently.",
    },
    fr: {
      what: "Automatisation de la collecte de données externes, alertes en temps réel et pipelines d'information. Des sources simples aux environnements avec protection avancée.",
      includes: [
        "Analyse de la source de données et conception du processus d'extraction",
        "Développement du système de collecte automatisée",
        "Traitement et structuration des données obtenues",
        "Système d'alertes lors de la détection de changements pertinents",
        "Planification des exécutions périodiques",
        "Tableau de bord ou rapport avec les données collectées",
      ],
      for: "Entreprises ayant besoin de surveiller les prix, les publications, la disponibilité ou toute information publique qui change fréquemment.",
    },
  },
  devops: {
    es: {
      what: "Configuración, despliegue y mantenimiento de infraestructura propia en servidores europeos. Control total, privacidad y sin dependencia de grandes plataformas cloud.",
      includes: [
        "Setup y configuración del servidor",
        "Despliegue y configuración de los servicios necesarios",
        "Automatización de backups",
        "Monitorización y alertas de estado",
        "Configuración de dominio y certificados de seguridad",
        "Documentación de la arquitectura",
      ],
      for: "Empresas que quieren reducir su dependencia de plataformas externas, mejorar el control sobre sus datos, o desplegar sus aplicaciones en un entorno propio.",
    },
    en: {
      what: "Configuration, deployment and maintenance of own infrastructure on European servers. Full control, privacy and no dependence on large cloud platforms.",
      includes: [
        "Server setup and configuration",
        "Deployment and configuration of necessary services",
        "Backup automation",
        "Monitoring and status alerts",
        "Domain configuration and security certificates",
        "Architecture documentation",
      ],
      for: "Companies that want to reduce their dependence on external platforms, improve control over their data, or deploy their applications in their own environment.",
    },
    fr: {
      what: "Configuration, déploiement et maintenance d'infrastructure propre sur des serveurs européens. Contrôle total, confidentialité et sans dépendance aux grandes plateformes cloud.",
      includes: [
        "Configuration et paramétrage du serveur",
        "Déploiement et configuration des services nécessaires",
        "Automatisation des sauvegardes",
        "Surveillance et alertes de statut",
        "Configuration du domaine et des certificats de sécurité",
        "Documentation de l'architecture",
      ],
      for: "Entreprises souhaitant réduire leur dépendance aux plateformes externes, améliorer le contrôle de leurs données ou déployer leurs applications dans leur propre environnement.",
    },
  },
  consulting: {
    es: {
      what: "Auditoría digital, estrategia tecnológica y acompañamiento en decisiones que tienen consecuencias duraderas. Visión estratégica con capacidad de ejecución real.",
      includes: [
        "Diagnóstico del estado tecnológico actual",
        "Identificación de ineficiencias y riesgos",
        "Evaluación de herramientas y proveedores existentes",
        "Hoja de ruta con prioridades y coste estimado",
        "Recomendaciones sobre herramientas, equipo o arquitectura",
        "Acompañamiento en la toma de decisiones",
      ],
      for: "Empresas antes de una inversión tecnológica importante, negocios donde algo no funciona y no está claro por qué, o equipos que necesitan criterio técnico externo sin contratar un perfil fijo.",
    },
    en: {
      what: "Digital audit, technology strategy and guidance on decisions with lasting consequences. Strategic vision with real execution capacity.",
      includes: [
        "Current technology status diagnosis",
        "Identification of inefficiencies and risks",
        "Evaluation of existing tools and providers",
        "Roadmap with priorities and estimated cost",
        "Recommendations on tools, team or architecture",
        "Decision-making support",
      ],
      for: "Companies before a major technology investment, businesses where something isn't working and it's not clear why, or teams that need external technical judgment without hiring a permanent role.",
    },
    fr: {
      what: "Audit numérique, stratégie technologique et accompagnement dans les décisions aux conséquences durables. Vision stratégique avec capacité d'exécution réelle.",
      includes: [
        "Diagnostic de l'état technologique actuel",
        "Identification des inefficacités et des risques",
        "Évaluation des outils et fournisseurs existants",
        "Feuille de route avec priorités et coût estimé",
        "Recommandations sur les outils, l'équipe ou l'architecture",
        "Accompagnement dans la prise de décisions",
      ],
      for: "Entreprises avant un investissement technologique important, entreprises où quelque chose ne fonctionne pas et on ne sait pas pourquoi, ou équipes ayant besoin d'un jugement technique externe sans embaucher un profil permanent.",
    },
  },
};

export function getServiceDetail(id: string, lang: Lang): ServiceDetail | null {
  const service = serviceDetails[id];
  if (!service) return null;
  return service[lang] ?? service['es'];
}
