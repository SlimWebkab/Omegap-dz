import { IMAGES } from '../assets/images';

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  category: 'Normes & Réglementation' | 'Guide de Chantier' | 'Comparatifs & Choix' | 'Innovation Plasturgie';
  tags: string[];
  datePublished: string;
  dateModified: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    department: string;
    badge: string;
  };
  featuredImage: string;
  featuredImageUrl: string;
  featuredImageAlt: string;
  secondaryImage?: string;
  secondaryImageUrl?: string;
  secondaryImageAlt?: string;
  tableOfContents: { id: string; title: string }[];
  keyTakeaways: string[];
  normativeReferences: { code: string; title: string; requirement: string }[];
  technicalAbacus?: {
    title: string;
    description: string;
    headers: string[];
    rows: {
      conduit: string;
      cableType: string;
      maxConductors: string;
      fillingRatio: string;
      typicalUsage: string;
      typicalUsageCol?: string;
    }[];
    note: string;
  };
  sections: {
    id: string;
    title: string;
    content: string[];
    callout?: {
      type: 'warning' | 'info' | 'tip' | 'standard';
      title: string;
      text: string;
    };
  }[];
  faqRelated: { question: string; answer: string }[];
  status: 'published' | 'upcoming';
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'art-01',
    slug: 'norme-icta-3422-coulage-dalle-beton-algerie',
    title: "Norme ICTA 3422 et Coulage Sous Dalle Béton en Algérie : Le Guide d'Ingénierie & Conformité NF C 15-100",
    seoTitle: "Norme ICTA 3422 et Dalle Béton en Algérie : Guide Technique NF C 15-100 | OMEGAP-DZ",
    metaDescription: "Guide technique d'ingénierie pour pose de gaines ICTA 3422 sous dalle béton en Algérie : résistance 750N, règle du tiers 1/3 (NF C 15-100), tire-fil acier et prévention des écrasements.",
    excerpt: "Pourquoi 80 % des sinistres d'écrasement de conduits sur chantier BTP proviennent d'une mauvaise classification mécanique et comment garantir l'intégrité de vos réseaux électriques sous chape et dalle pleine.",
    category: 'Normes & Réglementation',
    tags: ['NF C 15-100', 'ICTA 3422', 'Coulage Béton', 'Résistance 750N', 'Règle du Tiers', 'BTP Algérie'],
    datePublished: '2026-10-15',
    dateModified: '2026-10-18',
    readTime: '7 min de lecture technique',
    author: {
      name: "Département Technique & R&D OMEGAP-DZ",
      role: "Ingénieurs Plasturgie & Électricité BTP",
      department: "Unité Industrielle Aït Toudert, Ouacif (Tizi-Ouzou)",
      badge: "Ingénierie Certifiée"
    },
    featuredImage: IMAGES.articleDalleBeton,
    featuredImageUrl: IMAGES.publicUrls.articleDalleBeton,
    featuredImageAlt: "Pose de gaines électriques annelées grises ICTA 3422 OMEGAP-DZ sur ferraillage avant coulage de dalle béton en Algérie",
    secondaryImage: IMAGES.articleTestCompression,
    secondaryImageUrl: IMAGES.publicUrls.articleTestCompression,
    secondaryImageAlt: "Banc d'essai mécanique mesurant la résistance à l'écrasement 750 Newtons sur conduit ICTA 3422 au laboratoire OMEGAP-DZ",
    tableOfContents: [
      { id: 'definition-icta-3422', title: '1. Décryptage du code normatif ICTA 3422' },
      { id: 'contraintes-dalle-beton', title: '2. Les contraintes extrêmes du coulage sous dalle béton' },
      { id: 'regle-du-tiers', title: '3. La Règle du Tiers (1/3) : Tableau abaque de remplissage' },
      { id: 'bonnes-pratiques-pose', title: '4. Protocole d’arrimage et rayon de courbure minimal' },
      { id: 'role-tire-fil', title: '5. Le rôle déterminant du tire-fil acier galvanisé' },
      { id: 'conclusion-b2b', title: '6. Synthèse pour prescripteurs & cahier des charges' }
    ],
    keyTakeaways: [
      "Une gaine électrique coulée en dalle de compression béton DOIT impérativement afficher un code commençant par '3' (résistance mécanique ≥ 750 N). L'usage de gaines 450N ou non certifiées expose au risque immédiat de pincement définitif.",
      "La règle normative NF C 15-100 & NA 5275 impose un taux de remplissage maximal de 33 % (1/3 de la section intérieure libre) pour permettre le tirage fluide des conducteurs sans surchauffe par effet Joule.",
      "Le rayon de courbure ne doit jamais être inférieur à 3 fois le diamètre extérieur du conduit (ex. R ≥ 60 mm pour une gaine Ø20 mm).",
      "Le tire-fil en acier galvanisé de 0,8 mm intégré en usine chez OMEGAP-DZ résiste à une traction de plus de 20 kg, évitant les ruptures lors du passage des conducteurs."
    ],
    normativeReferences: [
      { code: 'NF EN 61386-22 / CEI 61386-22', title: 'Systèmes de conduits pour la gestion du câblage', requirement: 'Conduits cintrables transversalement élastiques (ICTA)' },
      { code: 'NF C 15-100 (Partie 5-52)', title: 'Installations électriques à basse tension', requirement: 'Taux d’occupation maximal 33% & cheminement sous dalle' },
      { code: 'NA 5275 (Norme Algérienne)', title: 'Sécurité des installations électriques des bâtiments', requirement: 'Auto-extinguibilité et résistance mécanique' }
    ],
    technicalAbacus: {
      title: "Abaque Technique de Remplissage (Règle du Tiers 1/3 - NF C 15-100)",
      description: "Nombre maximal de conducteurs cuivre isolés H07V-U / H07V-R admis par conduit pour garantir un tirage sans contrainte mécanique :",
      headers: ['Diamètre Extérieur Gaine', 'Section Intérieure Utile', 'Conducteurs 1,5 mm²', 'Conducteurs 2,5 mm²', 'Conducteurs 6 mm²', 'Usage Typique Chantier'],
      rows: [
        {
          conduit: 'Ø 16 mm (ICTA)',
          cableType: 'Ø int. ~10.7 mm',
          maxConductors: '3 conducteurs',
          fillingRatio: '2 conducteurs',
          typicalUsage: 'Non recommandé',
          typicalUsageCol: 'Circuits d’éclairage simples, navettes va-et-vient'
        },
        {
          conduit: 'Ø 20 mm (ICTA)',
          cableType: 'Ø int. ~14.1 mm',
          maxConductors: '5 conducteurs',
          fillingRatio: '4 conducteurs',
          typicalUsage: '2 conducteurs',
          typicalUsageCol: 'Prises 16A standard (3G2.5), éclairage + terre, volets roulants'
        },
        {
          conduit: 'Ø 25 mm (ICTA)',
          cableType: 'Ø int. ~18.3 mm',
          maxConductors: '8 conducteurs',
          fillingRatio: '6 conducteurs',
          typicalUsage: '4 conducteurs',
          typicalUsageCol: 'Lignes cuisson 32A (3G6), alimentations tableaux divisionnaires, câbles RJ45 blindés'
        },
        {
          conduit: 'Ø 32 mm (ICTA)',
          cableType: 'Ø int. ~24.2 mm',
          maxConductors: 'Grande capacité',
          fillingRatio: 'Multi-circuits',
          typicalUsage: 'Liaison forte puissance',
          typicalUsageCol: 'Colonne montante, arrivée principale compteur Sonelgaz, paires télécoms collectives'
        }
      ],
      note: "Ces valeurs correspondent au calcul selon la formule S_câbles ≤ 0.33 × S_int_conduit. En cas de cheminement comportant plus de deux coudes à 90°, il est fortement recommandé de surdimensionner d'un calibre de gaine (ex. passer de Ø20 à Ø25 mm)."
    },
    sections: [
      {
        id: 'definition-icta-3422',
        title: "1. Décryptage du code normatif ICTA 3422 : Que signifient ces 4 chiffres ?",
        content: [
          "Sur les chantiers de construction en Algérie (immeubles AADL, promotions immobilières privées, hôpitaux et villas individuelles), la mention « ICTA » est omniprésente sur les devis. Pourtant, peu de maîtres d'ouvrage et d'installateurs savent exactement ce que certifie la matrice de 4 chiffres associée (3422).",
          "L'acronyme ICTA signifie : Isolant, Cintrable, Transversalement élastique, Annelé. Il qualifie un conduit thermoplastique capable de reprendre sa forme ronde après une déformation modérée, contrairement aux conduits fendus ou rigides.",
          "Selon la norme internationale CEI / EN 61386-22 et la réglementation algérienne IANOR (NA 5275), le code à 4 chiffres '3422' correspond à des performances mécaniques et thermiques standardisées :"
        ],
        callout: {
          type: 'info',
          title: "Matrice de codification ICTA 3422",
          text: "• 1er chiffre (3) : Résistance à la compression ≥ 750 Newtons à 23°C (indispensable pour l'enrobage dans le béton).\n• 2e chiffre (4) : Résistance aux chocs mécaniques de 6 Joules à -5°C (résistance aux coups d'outils et brouettes de chantier).\n• 3e chiffre (2) : Température minimale d'installation et service : -5°C.\n• 4e chiffre (2) : Température maximale de service permanent : +90°C (supporte la montée en température des câbles sous charge)."
        }
      },
      {
        id: 'contraintes-dalle-beton',
        title: "2. Les contraintes extrêmes subies lors du coulage sous dalle béton",
        content: [
          "Lorsqu'un plancher en béton armé est coulé, les conduits électriques subissent trois agressions physiques simultanées : la pression statique du béton frais (masse volumique d'environ 2 400 kg/m³), l'action dynamique de la goulotte de déversement ou de la pompe à béton, et la vibration haute fréquence produite par les aiguilles vibrantes des maçons.",
          "Si une entreprise utilise une gaine bas de gamme non classée 750N (par exemple une gaine 450N ou fabriquée à partir de polymères recyclés non stabilisés), l'anneau s'écrase sous le poids du béton. Le diamètre intérieur se rétrécit irréversiblement.",
          "Conséquence catastrophique : lors du tirage des câbles une fois le gros œuvre achevé, l'aiguille d'électricien bute dans la gaine écrasée. L'artisan se trouve contraint de piocher le béton au marteau-piqueur pour libérer le conduit, ou pire, de poser des câbles apparents disgracieux et non conformes."
        ],
        callout: {
          type: 'warning',
          title: "Alerte Pathologie Chantier",
          text: "Un écrasement de gaine découvert après coulage génère en moyenne un surcoût de 15 000 à 45 000 DZD par point d'arrêt (main-d'œuvre de burinage, reprise d'étanchéité et retards de réception de chantier)."
        }
      },
      {
        id: 'regle-du-tiers',
        title: "3. La Règle du Tiers (1/3) : Le calcul mathématique impératif de la NF C 15-100",
        content: [
          "La norme NF C 15-100 (partie 5-52) et les recommandations de l'UTE C 15-520 stipulent que la somme des sections extérieures des conducteurs (isolant compris) ne doit pas excéder un tiers (33 %) de la section intérieure du conduit.",
          "Pourquoi cette marge de deux tiers d'air libre ? Pour deux raisons scientifiques fondamentales :",
          "1. Facilité de tirage : Réduire le coefficient de frottement linéaire et permettre à l'aiguille de circuler sans arc-boutement.",
          "2. Dissipation thermique : Tout conducteur électrique traversé par un courant dégage de la chaleur par effet Joule (P = R·I²). Si la gaine est trop serrée, la chaleur ne peut pas s'évacuer, ce qui provoque le vieillissement prématuré de l'isolant PVC des fils et augmente le risque de court-circuit."
        ]
      },
      {
        id: 'bonnes-pratiques-pose',
        title: "4. Protocole d’arrimage et respect du rayon de courbure minimal",
        content: [
          "Pour garantir que les gaines restent impeccablement en place lors du passage des équipes de ferrailleurs et de maçons, voici les règles d'art observées par les meilleurs bureaux d'études :",
          "Arrimage régulier : Fixez les gaines au ferraillage inférieur à l'aide de liens plastiques (serflex) ou de fil de fer recuit tous les 50 à 80 cm. Ne serrez pas excessivement le lien afin de ne pas ovaliser la gaine.",
          "Rayon de courbure contrôlé : Le rayon de courbure minimal 'R' doit être égal à au moins 3 fois le diamètre extérieur du conduit. Pour une gaine ICTA Ø 20 mm, le rayon doit être d'au moins 60 mm. Un pliage à angle vif (90° franc sans courbure douce) rend tout tirage ultérieur impossible.",
          "Bouchage des extrémités : Obturez systématiquement les extrémités des gaines qui débouchent dans les boîtes de dérivation ou les réservations avec du ruban adhésif technique ou des bouchons hermétiques afin d'empêcher la laitance de ciment liquide de pénétrer à l'intérieur."
        ],
        callout: {
          type: 'tip',
          title: "Recommandation d'Usine OMEGAP-DZ",
          text: "Pour les grandes longueurs supérieures à 15 mètres ou comportant plus de 3 courbes, injectez toujours un lubrifiant de tirage spécifique (gel silicone pour câble) plutôt que des solutions de fortune (savon, huile) qui attaquent chimiquement le plastique sur le long terme."
        }
      },
      {
        id: 'role-tire-fil',
        title: "5. Le rôle déterminant du tire-fil en acier galvanisé",
        content: [
          "Chez OMEGAP-DZ, 100 % de nos gaines ICTA 3422 sont livrées équipées d'un tire-fil en fil d'acier doux galvanisé haute ténacité de diamètre 0,8 mm, incorporé dès l'extrusion dans notre usine de Tizi-Ouzou.",
          "Contrairement aux tire-fils en nylon élastique ou aux fils de fer cassants que l'on trouve parfois sur le marché informel, le tire-fil OMEGAP-DZ offre une charge de rupture supérieure à 20 kgf (environ 200 N).",
          "Il permet de tirer immédiatement les câbles ou de faire passer une aiguille de tirage professionnelle en fibre de verre sans rupture intermédiaire, générant un gain de temps de plus de 40 % pour les équipes de câblage sur chantier."
        ]
      },
      {
        id: 'conclusion-b2b',
        title: "6. Synthèse pour prescripteurs & cahier des charges BTP",
        content: [
          "Pour vous prémunir contre les désordres techniques sur vos marchés publics (AADL, LPP, OPGI) ou projets privés de standing en Algérie, veillez à insérer la mention suivante dans votre Cahier des Clauses Techniques Particulières (CCTP) :",
          "« Les conduits encastrés sous dallage, chape ou dalles de compression béton armé seront impérativement de type ICTA 3422, non propagateurs de flamme, d'une résistance à l'écrasement certifiée minimale de 750 N à 23°C, munis d'un tire-fil en acier galvanisé intégré en usine, de marque certifiée conforme aux normes applicables (type OMEGAP-DZ ou équivalent homologué). »"
        ]
      }
    ],
    faqRelated: [
      {
        question: "Peut-on couler du béton directement sur une gaine ICTA 3422 OMEGAP-DZ ?",
        answer: "Oui, la gaine ICTA 3422 d'OMEGAP-DZ est spécialement conçue et certifiée pour l'enrobage direct dans le béton grâce à sa rigidité annelée de 750 N et sa résilience élastique transversale."
      },
      {
        question: "Quelle est la différence entre une gaine ICTA 3422 et un tube IRL 3321 ?",
        answer: "La gaine ICTA est cintrable et annelée, idéale pour les cheminements sinueux et encastrés dans les dalles ou cloisons. Le tube IRL est un conduit plastique rigide lisse réservé aux installations en saillie apparente (parkings, caves, locaux techniques)."
      },
      {
        question: "Comment vérifier la conformité d'une gaine livrée sur chantier ?",
        answer: "Le marquage au jet d'encre indélébile doit obligatoirement figurer tous les mètres sur le conduit, indiquant : le nom du fabricant (OMEGAP-DZ), le diamètre (ex. Ø20), la mention ICTA 3422, et la référence normative."
      }
    ],
    status: 'published'
  },
  // Upcoming articles for content calendar / topic cluster authority
  {
    id: 'art-02',
    slug: 'comment-eviter-ecrasement-gaine-chantier-btp',
    title: "Comment Éviter l'Écrasement des Gaines Électriques sur Chantier BTP : Le Rôle Clé des 750 Newtons",
    seoTitle: "Éviter l'Écrasement des Gaines Électriques : Résistance 750N | OMEGAP-DZ",
    metaDescription: "Analyse des causes d'écrasement de conduits électriques sur les chantiers en Algérie et solutions techniques pour préserver les réseaux sous béton.",
    excerpt: "Passage d'engins, vibration du béton et contraintes thermiques : comment la résistance mécanique à 750N protège vos investissements.",
    category: 'Guide de Chantier',
    tags: ['Chantier BTP', 'Résistance 750N', 'Pathologie Béton', 'Sécurité'],
    datePublished: '2026-10-22',
    dateModified: '2026-10-22',
    readTime: '5 min de lecture',
    author: {
      name: "Département Technique & R&D OMEGAP-DZ",
      role: "Ingénieurs Plasturgie & Électricité BTP",
      department: "Unité Industrielle Aït Toudert, Ouacif (Tizi-Ouzou)",
      badge: "Ingénierie Certifiée"
    },
    featuredImage: IMAGES.qualityLab,
    featuredImageUrl: IMAGES.publicUrls.qualityLab,
    featuredImageAlt: "Laboratoire de test mécanique sur gaine électrique OMEGAP-DZ",
    tableOfContents: [],
    keyTakeaways: [],
    normativeReferences: [],
    sections: [],
    faqRelated: [],
    status: 'upcoming'
  },
  {
    id: 'art-03',
    slug: 'gaine-fendue-vs-gaine-fermee-renovation-telecom',
    title: "Gaine Fendue vs Gaine Annelée Standard : Quand Choisir Chaque Solution en Rénovation et Réseaux FTTH ?",
    seoTitle: "Gaine Fendue vs Gaine Fermée : Guide Comparatif Rénovation & Télécom | OMEGAP-DZ",
    metaDescription: "Comparatif complet entre gaine annelée fermée ICTA et conduit fendu longitudinal : avantages en rénovation, protection sans déconnexion et applications fibre optique.",
    excerpt: "Gagnez des heures sur vos chantiers de rénovation et baies de brassage grâce au conduit annelé fendu sans débrancher les connecteurs existants.",
    category: 'Comparatifs & Choix',
    tags: ['Gaine Fendue', 'Rénovation', 'Fibre FTTH', 'Câblage Informatique'],
    datePublished: '2026-10-28',
    dateModified: '2026-10-28',
    readTime: '6 min de lecture',
    author: {
      name: "Département Technique & R&D OMEGAP-DZ",
      role: "Ingénieurs Plasturgie & Électricité BTP",
      department: "Unité Industrielle Aït Toudert, Ouacif (Tizi-Ouzou)",
      badge: "Ingénierie Certifiée"
    },
    featuredImage: IMAGES.conduitFendu,
    featuredImageUrl: IMAGES.publicUrls.conduitFendu,
    featuredImageAlt: "Gaine annelée fendue longitudinalement pour câblage télécom",
    tableOfContents: [],
    keyTakeaways: [],
    normativeReferences: [],
    sections: [],
    faqRelated: [],
    status: 'upcoming'
  },
  {
    id: 'art-04',
    slug: 'calibre-gaine-diametre-16-20-25-32-choix-cables',
    title: "Diamètre de Gaine Électrique (Ø16, Ø20, Ø25, Ø32) : Quelle Taille Pour Quels Câbles ?",
    seoTitle: "Quel Diamètre de Gaine Choisir (16, 20, 25, 32 mm) pour Câbles Électriques | OMEGAP-DZ",
    metaDescription: "Tableau de correspondance précis pour choisir entre gaine Ø16, Ø20, Ø25 ou Ø32 mm selon le nombre et la section des fils (1.5mm², 2.5mm², 6mm², RJ45).",
    excerpt: "Ne vous trompez plus de diamètre sur chantier : guide de dimensionnement rapide selon la nature du circuit (prises, éclairage, plaque de cuisson, colonnes).",
    category: 'Guide de Chantier',
    tags: ['Diamètre Gaine', 'Section Câble', 'NF C 15-100', 'Calcul Électrique'],
    datePublished: '2026-11-04',
    dateModified: '2026-11-04',
    readTime: '5 min de lecture',
    author: {
      name: "Département Technique & R&D OMEGAP-DZ",
      role: "Ingénieurs Plasturgie & Électricité BTP",
      department: "Unité Industrielle Aït Toudert, Ouacif (Tizi-Ouzou)",
      badge: "Ingénierie Certifiée"
    },
    featuredImage: IMAGES.gaineIcta,
    featuredImageUrl: IMAGES.publicUrls.gaineIcta,
    featuredImageAlt: "Rouleaux de gaines annelées ICTA différents diamètres OMEGAP-DZ",
    tableOfContents: [],
    keyTakeaways: [],
    normativeReferences: [],
    sections: [],
    faqRelated: [],
    status: 'upcoming'
  },
  {
    id: 'art-05',
    slug: 'polypropylene-auto-extinguible-norme-anti-feu-algerie',
    title: "Polypropylène Auto-extinguible : Pourquoi est-il Obligatoire dans les Marchés AADL et LPP ?",
    seoTitle: "Polypropylène Auto-extinguible & Sécurité Incendie BTP Algérie | OMEGAP-DZ",
    metaDescription: "Comprendre les exigences de non-propagation de la flamme pour les gaines électriques dans le logement collectif et les ERP en Algérie.",
    excerpt: "Sécurité passive contre l'incendie : comment nos formulations polymères stoppent la combustion en moins de 30 secondes sans émanation toxique corrosive.",
    category: 'Innovation Plasturgie',
    tags: ['Auto-extinguible', 'Sécurité Incendie', 'Polypropylène', 'AADL & LPP'],
    datePublished: '2026-11-12',
    dateModified: '2026-11-12',
    readTime: '6 min de lecture',
    author: {
      name: "Département Technique & R&D OMEGAP-DZ",
      role: "Ingénieurs Plasturgie & Électricité BTP",
      department: "Unité Industrielle Aït Toudert, Ouacif (Tizi-Ouzou)",
      badge: "Ingénierie Certifiée"
    },
    featuredImage: IMAGES.boitesAccessoires,
    featuredImageUrl: IMAGES.publicUrls.boitesAccessoires,
    featuredImageAlt: "Composants plastiques ignifuges et boîtiers étanches OMEGAP-DZ",
    tableOfContents: [],
    keyTakeaways: [],
    normativeReferences: [],
    sections: [],
    faqRelated: [],
    status: 'upcoming'
  }
];
