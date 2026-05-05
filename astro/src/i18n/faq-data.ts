import type { Lang } from './ui';

interface FaqItem {
  q: string;
  a: string;
}

interface FaqSection {
  id: string;
  items: FaqItem[];
}

type FaqData = Record<Lang, FaqSection[]>;

export const faqData: FaqData = {
  es: [
    {
      id: 'general',
      items: [
        { q: '¿Con qué tipo de empresas trabajáis?', a: 'Trabajamos con autónomos, pequeñas empresas y empresas medianas que necesitan soluciones técnicas reales sin los tiempos ni los costes de una agencia grande. También colaboramos con empresas que ya tienen equipo interno pero necesitan capacidad extra para proyectos específicos.' },
        { q: '¿Tenéis oficina física o trabajáis en remoto?', a: 'Somos un equipo completamente remoto. Trabajamos con clientes de toda España y otros países europeos de forma digital. La ausencia de estructura de oficina nos permite dedicar más recursos a cada proyecto y ofrecer mejor relación calidad-precio.' },
        { q: '¿Cómo se define el precio de un proyecto?', a: 'El precio depende del servicio y el alcance. Trabajamos con precio cerrado acordado antes de empezar, con cuota mensual para proyectos continuados, o por horas para consultoría y proyectos abiertos. Contáctanos y te enviamos una estimación sin compromiso en menos de 48 horas.' },
      ],
    },
    {
      id: 'servicios',
      items: [
        { q: '¿Qué incluye una automatización de procesos?', a: 'Analizamos el proceso que quieres automatizar, diseñamos el flujo, lo conectamos con las herramientas que ya usas y lo desplegamos en tu infraestructura. Incluye pruebas, formación básica y documentación. El sistema queda bajo tu control total, sin dependencias de plataformas externas.' },
        { q: '¿La web necesita mantenimiento continuo?', a: 'Las webs que construimos están diseñadas para requerir el mínimo mantenimiento posible. Para cambios de contenido o evolutivos existe un servicio de soporte mensual opcional, pero no es obligatorio. Muchos clientes operan durante meses sin necesitar intervención.' },
        { q: '¿Qué diferencia hay entre un agente de IA y un chatbot?', a: 'Un chatbot sigue respuestas predefinidas. Un agente de IA entiende el lenguaje natural, consulta tu información, toma decisiones y ejecuta acciones reales: registrar datos, enviar respuestas personalizadas o derivar al equipo humano cuando corresponde. Todo sobre tu infraestructura, sin enviar información a terceros.' },
        { q: '¿Puedo cambiar de proveedor si trabajo con vosotros?', a: 'Sí, siempre. Todo lo que construimos te pertenece: el código, los flujos, la configuración y los accesos. Entregamos documentación completa para que cualquier persona pueda continuar el trabajo. No generamos dependencia técnica ni contractual más allá del proyecto acordado.' },
      ],
    },
    {
      id: 'proceso',
      items: [
        { q: '¿Cuánto tarda en arrancar un proyecto?', a: 'Una vez firmado el acuerdo y recibido el pago inicial, arrancamos en pocos días hábiles. Los plazos de entrega dependen del tipo de proyecto: los más sencillos pueden estar listos en días, los más complejos en semanas o meses. El plazo exacto se define antes de empezar y forma parte del acuerdo.' },
        { q: '¿Puedo pedir cambios durante el desarrollo?', a: 'Sí, dentro del alcance acordado. Cada proyecto incluye rondas de revisión pactadas. Los cambios dentro del scope se resuelven sin coste adicional. Si quieres ampliar el proyecto más allá de lo firmado, lo tratamos como un nuevo alcance con su estimación propia.' },
        { q: '¿Qué ocurre después de entregar el proyecto?', a: 'Incluimos un periodo de soporte post-lanzamiento en todos los proyectos para resolver ajustes sin coste adicional. Pasado ese periodo, ofrecemos soporte mensual para quienes necesitan continuidad, actualizaciones o acompañamiento técnico. También puedes contratarnos puntualmente sin compromiso permanente.' },
      ],
    },
    {
      id: 'datos',
      items: [
        { q: '¿Dónde están alojados los sistemas que construís?', a: 'Trabajamos con infraestructura propia en servidores europeos que cumplen con el RGPD. Para proyectos que lo requieren, también podemos operar sobre el servidor del propio cliente o configurar uno nuevo bajo su control total.' },
        { q: '¿Los sistemas de IA envían mis datos a servicios externos?', a: 'Nunca enviamos datos confidenciales a terceros sin informarte y obtener tu aprobación. Por defecto construimos sistemas que operan sobre tu propia infraestructura. Si la privacidad es crítica para tu sector, diseñamos arquitecturas completamente aisladas donde ningún dato abandona tu entorno.' },
        { q: '¿Cumplís con la normativa de protección de datos?', a: 'Sí. Toda la infraestructura que gestionamos está dentro de la UE. Los proyectos que lo requieren incluyen las adaptaciones legales necesarias: política de privacidad, aviso legal, gestión de cookies y medidas de seguridad adicionales según la sensibilidad de los datos.' },
      ],
    },
  ],
  en: [
    {
      id: 'general',
      items: [
        { q: 'What type of companies do you work with?', a: 'We work with freelancers, small businesses and medium-sized companies that need real technical solutions without the timelines or costs of a large agency. We also collaborate with companies that already have an internal team but need extra capacity for specific projects.' },
        { q: 'Do you have a physical office or do you work remotely?', a: 'We are a fully remote team. We work with clients from across Spain and other European countries digitally. The absence of an office structure allows us to dedicate more resources to each project and offer better value for money.' },
        { q: 'How is a project price determined?', a: 'The price depends on the service and scope. We work with a fixed price agreed before starting, a monthly fee for ongoing projects, or hourly for consulting and open projects. Contact us and we will send you a no-commitment estimate in less than 48 hours.' },
      ],
    },
    {
      id: 'servicios',
      items: [
        { q: 'What does a process automation include?', a: 'We analyze the process you want to automate, design the flow, connect it with the tools you already use and deploy it on your infrastructure. Includes testing, basic training and documentation. The system remains under your total control, without dependencies on external platforms.' },
        { q: 'Does the website need continuous maintenance?', a: 'The websites we build are designed to require minimal maintenance. For content changes or updates there is an optional monthly support service, but it is not mandatory. Many clients operate for months without needing intervention.' },
        { q: 'What is the difference between an AI agent and a chatbot?', a: 'A chatbot follows predefined responses. An AI agent understands natural language, consults your information, makes decisions and executes real actions: recording data, sending personalized responses or escalating to the human team when appropriate. All on your infrastructure, without sending information to third parties.' },
        { q: 'Can I change provider if I work with you?', a: 'Yes, always. Everything we build belongs to you: the code, flows, configuration and access. We deliver complete documentation so that anyone can continue the work. We do not create technical or contractual dependency beyond the agreed project.' },
      ],
    },
    {
      id: 'proceso',
      items: [
        { q: 'How long does it take for a project to start?', a: 'Once the agreement is signed and initial payment received, we start within a few business days. Delivery timelines depend on the type of project: simpler ones can be ready in days, more complex ones in weeks or months. The exact timeline is defined before starting and is part of the agreement.' },
        { q: 'Can I request changes during development?', a: 'Yes, within the agreed scope. Each project includes agreed review rounds. Changes within scope are resolved at no additional cost. If you want to expand the project beyond what was signed, we treat it as a new scope with its own estimate.' },
        { q: 'What happens after the project is delivered?', a: 'We include a post-launch support period in all projects to resolve adjustments at no additional cost. After that period, we offer monthly support for those who need continuity, updates or technical guidance. You can also hire us on an ad-hoc basis without permanent commitment.' },
      ],
    },
    {
      id: 'datos',
      items: [
        { q: 'Where are the systems you build hosted?', a: 'We work with our own infrastructure on European servers compliant with GDPR. For projects that require it, we can also operate on the client\'s own server or set up a new one under their full control.' },
        { q: 'Do AI systems send my data to external services?', a: 'We never send confidential data to third parties without informing you and obtaining your approval. By default we build systems that operate on your own infrastructure. If privacy is critical for your sector, we design completely isolated architectures where no data leaves your environment.' },
        { q: 'Do you comply with data protection regulations?', a: 'Yes. All the infrastructure we manage is within the EU. Projects that require it include the necessary legal adaptations: privacy policy, legal notice, cookie management and additional security measures depending on data sensitivity.' },
      ],
    },
  ],
  fr: [
    {
      id: 'general',
      items: [
        { q: 'Avec quel type d\'entreprises travaillez-vous ?', a: 'Nous travaillons avec des freelances, des petites entreprises et des moyennes entreprises qui ont besoin de solutions techniques réelles sans les délais ni les coûts d\'une grande agence. Nous collaborons également avec des entreprises qui ont déjà une équipe interne mais ont besoin de capacité supplémentaire pour des projets spécifiques.' },
        { q: 'Avez-vous un bureau physique ou travaillez-vous à distance ?', a: 'Nous sommes une équipe entièrement en télétravail. Nous travaillons avec des clients de toute l\'Espagne et d\'autres pays européens de manière digitale. L\'absence de structure de bureau nous permet de consacrer plus de ressources à chaque projet et d\'offrir un meilleur rapport qualité-prix.' },
        { q: 'Comment est défini le prix d\'un projet ?', a: 'Le prix dépend du service et de la portée. Nous travaillons avec un prix fixe convenu avant de commencer, une cotisation mensuelle pour les projets continus, ou à l\'heure pour la consultation et les projets ouverts. Contactez-nous et nous vous enverrons une estimation sans engagement en moins de 48 heures.' },
      ],
    },
    {
      id: 'servicios',
      items: [
        { q: "Qu'est-ce qu'une automatisation de processus inclut ?", a: 'Nous analysons le processus que vous souhaitez automatiser, concevons le flux, le connectons aux outils que vous utilisez déjà et le déployons sur votre infrastructure. Comprend des tests, une formation de base et une documentation. Le système reste sous votre contrôle total, sans dépendances aux plateformes externes.' },
        { q: 'Le site web a-t-il besoin d\'une maintenance continue ?', a: 'Les sites web que nous construisons sont conçus pour nécessiter un minimum de maintenance. Pour les changements de contenu ou les évolutions, il existe un service de support mensuel optionnel, mais il n\'est pas obligatoire. De nombreux clients opèrent pendant des mois sans avoir besoin d\'intervention.' },
        { q: 'Quelle est la différence entre un agent IA et un chatbot ?', a: 'Un chatbot suit des réponses prédéfinies. Un agent IA comprend le langage naturel, consulte vos informations, prend des décisions et exécute des actions réelles : enregistrer des données, envoyer des réponses personnalisées ou rediriger vers l\'équipe humaine le cas échéant. Tout sur votre infrastructure, sans envoyer d\'informations à des tiers.' },
        { q: 'Puis-je changer de fournisseur si je travaille avec vous ?', a: 'Oui, toujours. Tout ce que nous construisons vous appartient : le code, les flux, la configuration et les accès. Nous livrons une documentation complète afin que n\'importe qui puisse continuer le travail. Nous ne créons pas de dépendance technique ou contractuelle au-delà du projet convenu.' },
      ],
    },
    {
      id: 'proceso',
      items: [
        { q: 'Combien de temps faut-il pour démarrer un projet ?', a: 'Une fois l\'accord signé et le paiement initial reçu, nous démarrons en quelques jours ouvrables. Les délais de livraison dépendent du type de projet : les plus simples peuvent être prêts en quelques jours, les plus complexes en semaines ou en mois. Le délai exact est défini avant de commencer et fait partie de l\'accord.' },
        { q: 'Puis-je demander des modifications pendant le développement ?', a: 'Oui, dans le cadre convenu. Chaque projet comprend des rondes de révision convenues. Les modifications dans le périmètre sont résolues sans coût supplémentaire. Si vous souhaitez étendre le projet au-delà de ce qui a été signé, nous le traitons comme un nouveau périmètre avec sa propre estimation.' },
        { q: 'Que se passe-t-il après la livraison du projet ?', a: 'Nous incluons une période de support post-lancement dans tous les projets pour résoudre les ajustements sans coût supplémentaire. Après cette période, nous offrons un support mensuel pour ceux qui ont besoin de continuité, de mises à jour ou d\'accompagnement technique. Vous pouvez également nous embaucher ponctuellement sans engagement permanent.' },
      ],
    },
    {
      id: 'datos',
      items: [
        { q: 'Où sont hébergés les systèmes que vous construisez ?', a: 'Nous travaillons avec notre propre infrastructure sur des serveurs européens conformes au RGPD. Pour les projets qui le nécessitent, nous pouvons également opérer sur le serveur du client lui-même ou en configurer un nouveau sous son contrôle total.' },
        { q: 'Les systèmes IA envoient-ils mes données à des services externes ?', a: 'Nous n\'envoyons jamais de données confidentielles à des tiers sans vous en informer et obtenir votre approbation. Par défaut, nous construisons des systèmes qui fonctionnent sur votre propre infrastructure. Si la confidentialité est critique pour votre secteur, nous concevons des architectures complètement isolées où aucune donnée ne quitte votre environnement.' },
        { q: 'Respectez-vous la réglementation sur la protection des données ?', a: 'Oui. Toute l\'infrastructure que nous gérons est dans l\'UE. Les projets qui le nécessitent comprennent les adaptations légales nécessaires : politique de confidentialité, mentions légales, gestion des cookies et mesures de sécurité supplémentaires en fonction de la sensibilité des données.' },
      ],
    },
  ],
};
