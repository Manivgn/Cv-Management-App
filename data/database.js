let database = [
    {
    id : 1,
    profile : {
		photo: "resources/images/Valguena_Mani_Carmel.jpg",
		firstName: "Mani Carmel",
		lastName: "VALGUENA",
		birthday: {
            day: 17,
            month: 7,
            year: 2001
        },
		phone: "+212 (0)6 84 20 74 21",
		email: "manicarmelvalguena@gmail.com",
        address: "Fès, MAROC",
        professionalSummary: `Aspirant ingénieur logiciel poursuivant un master, avec une base solide en informatique et une expérience 
                pratique dans le développement de logiciels.Guidé par un amour pour la découverte et un engagement à 
                l'excellence dans mon travail, je suis constamment en quête de nouvelles opportunités de croissance 
                et d'apprentissage.
        `,
        links: ["linkedin.com/in/mani-carmel-valguena", "", ""]
    },
	education: [
		{
			diploma: "Master spécialisé Qualité du Logiciel",
			organisation: "FSDM - Université Sidi Mohammed Ben Abdellah - Fès",
			year: "En cours"
        },
        {
			diploma: "Licence Sciences et Techniques Génie Logiciel",
			organisation: "FST - Université Moulay Ismail - Errachidia",
			year: 2023
        },
        {
			diploma: "Baccalauréat francais, série scientifique",
			organisation: "Lycée Francais de Lomé - Lomé",
			year: 2019
        }
    ],
    technologySkills: [
        {
            skill: "Analyse et Conception",
			details: ["UML", "Merise", "Design Patterns"
            ]
        },
        {
            skill: "Technologie Java",
			details: ["POO", "Annotations & Reflections", "Généricité", "Threads",
                    "JDBC"
            ]
        },
		{
            skill: "Base de données",
			details: ["MySQL", "Oracle Database", "MongoDB"
            ]
        },
        {
            skill: "Jakarta Entreprise Edition ",
			details: ["Architecture 3 tiers", "Modèle MVC2", "Servlets et JSP",
				"modèle DAO", "Apache TOMCAT"
            ]
        },
        {
            skill: "Ingénierie du Web",
			details: ["HTML", "CSS", "JavaScript", "Node.js", "React", "Angular", "ExpressJs" ]
        },
        {
            skill: "Technologie XML",
			details: ["XML","DTD", "XSD (XML Schema)",
                    "XSLT", "XPath", "XQuery","Parseurs XML (DOM, SAX)"]
        },
        {
            skill: "Services Web",
			details: ["REST", "GraphQL"]
        },
        {
            skill: "Ingénierie DevOps",
			details: ["Git", "GitHub", "GitLab", "Trello", "JUnit", "Ant", "Maven", "Mockito"]
        },
		
    ],
    experiences: [
        {
            type: "Projet",
			organisation: "FSDM",
			title: "UML Diagrams Generator",
			technologies: ["Java", "Swing"],
			year: 2024,
			duration: "1 mois"
        },
		{
			type: "Projet",
			organisation: "FSDM",
			title: "Développement d'une Api Rest sous Node.Js et d'une interface Repository sous Angular",
			technologies: ["HTML", "CSS", "JavaScript", "Angular", "Node.JS", "ExpressJs"],
			year: 2024,
			duration: "1 mois"
        },
        {
			type: "Projet",
			organisation: "FSDM",
			title: "Réalisation d'une application CRUD avec comme solution de persistance de données un fichier XML",
			technologies: ["Java", "Swing", "base de données XML"],
			year: 2024,
			duration: "1 mois"
        },
        
    ],
    softSkills: ["Communication", "Intelligence Emotionnelle", "Ecoute active", 
                    "Capacité de Résolution de problèmes", "Adaptabilité", 
                    "Rigueur"
    ],
    languages: [
		{
            language: "Français",
            level: "C2", // voir le "Common European Framework of Reference for Languages" (CEFR)
            certification: "",
            experience: ""
        },
		{
            language: "Anglais",
            level: "B1",
            certification: "",
            experience: "" 
        },
        {
            language: "Espagnol",
            level: "B1",
            certification: "",
            experience: "" 
        }
	],
	interests: ["NTIC", "Tennis de Table", "Football", "Voyage"]
},
{   
    id : 2,
    profile: {
      photo: "resources/images/Amine_Hmidani_Filali.png",
      firstName: "Amine",
      lastName: "Hmidani Filali",
      birthday: {
        day: 26,
        month: 4,
        year: 2001,
      },
      phone: "0651638496",
      email: "hmidanifilaliamine@gmail.com",
      address: "Meknès, Maroc",
      professionalSummary: `Passionné par l'intelligence artificielle, la science des données et le développement web,
       je suis titulaire d'une licence professionnelle en Intelligence Artificielle et Sciences des Données ainsi que d'un DUT en Génie Logiciel. 
       Grâce à des formations en ligne et académiques, j'ai acquis des compétences en codage dans divers langages informatiques et en conception de systèmes 
       d'information. J'ai une expérience solide dans l'analyse de données et le développement de solutions d'IA, ainsi qu'une capacité à collaborer efficacement avec 
       des équipes interdisciplinaires.
          `,
      links: [
        "linkedin.com/in/amine-hmidani-filali-20083723a",
       
      ],
    },
    education: [
      {
        diploma: "Master MQL",
        organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
        year: 2025,
      },
      {
        diploma: "Licence Professionnelle - Intelligence Artificielle et sciences des données",
        organisation: "EST Meknès - Université Moulay Ismail  - Meknès",
        year: 2023,
      },
      {
        diploma: "Diplôme Universitaire de Technologie - Génie Logiciel",
        organisation: "EST Meknès - Université Moulay Ismail  - Meknès",
        year: 2022,
      },
      {
        diploma: "Baccalauréat Science Mathématique option A",
        organisation: "Lycée Marjiaa - Meknès",
        year: 2019,
      },
    ],
    technologySkills: [
      {
        skill: "Jakarta EE",
        details: [
          "Architecture 3 tiers",
          "Modèle MVC2",
          "Servlets et JSP",
          "modèle DAO",
          "JPA",
          "Hibernate",
		  "Spring - Spring boot"
        ],
      },
      {
        skill: "Ingénierie du Web",
        details: ["HTML", "CSS", "JavaScript", "Node.js", "React", "PHP","Vuejs"],
      },
	  {
		  skill: "Analyse et conception",
          details: ["UML", "MERISE", "Design Patterns"]
        },
  
      {
        skill: "Ingénierie DevOps",
        details: ["Maven", "Jira", "Git", "GitHub", "GitLab", "JUnit"],
      },
	  {
            skill: "Web Services",
            details: ["REST"]
        },
		{
            skill: "Technologies XML",
			details: ["Standard XML", "Bases de données XML", "Parseurs XML (DOM, SAX)",
				"DTD", "XSD (XML Schema)", "XSLT", "XPath", "XQuery"]
        },
      {
        skill: "Data Science",
        details: [
          "Analyse de données - visualisation de données",
          "Machine Learning - Deep Learning",
		  "Modélisation des séries temporelles",
          "Traitement du langage naturel (NLP)",
          "AutoML",
          "Python",
          "TensorFlow",
          "Keras"   
        ],
      },
    ],
    experiences: [
      {
        type: "Stage",
        organisation: "3D Smart Factory",
        title: "Amélioration d'une platforme de recrutement avec NLP et technologies web",
        technologies: ["Django REST framework", "NextJs", "SpaCy", "tensorflow"],
        year: 2023,
        duration: "2 mois",
      },
      {
        type: "Stage",
        organisation: "CloudLink",
        title: "Création d'une application web streaming de musique pour augmenter la popularité des artistes.",
        technologies: ["HTML", "CSS", "JavaScript", "Php","laravel","VueJS"],
        year: 2022,
        duration: "2 mois",
      },
      {
        type: "Stage",
        organisation: "INFO-MARKET",
        title: "Développement d'une application web de gestion des ordres de réparation, enregistrant les informations et générant des rapports détaillés avec reçu pour les clients.",
        technologies: ["HTML", "CSS", "JavaScript", "Php","ajax","Jquery"],
        year: 2021,
        duration: "1 mois",
      },
    ],
    softSkills: ["Esprit d'équipe", "Créativité", "Analyse", "Rigueur"],
    languages: [
      {
        language: "Français",
        level: "B2", // voir le "Common European Framework of Reference for Languages" (CEFR)
        certification: "",
        experience: "",
      },
      {
        language: "Anglais",
        level: "B2",
        certification: "",
        experience: "",
      },
    ],
    interests: ["BasketBall", "Voyage", "Jeux Vidéo", "Jeux d'échecs"],
  },
  {
    id : 3,
    profile: {
        photo: "resources/images/manar.jpg",
        firstName: "Manar",
        lastName: "Zaoui",
        birthday: {
            day: 4,
            month: 7,
            year: 2001
        },
        phone: "0707776474",
        email: "manarzaoui99@gmail.com",
        address: "Oujda, Maroc",
        professional_summary: "Ingénieure logiciel hautement motivée et compétente avec plus de 2 ans d'expérience dans le développement web full-stack. Dotée d'une solide formation en informatique et d'une passion pour la création de solutions innovantes, j'ai réussi à livrer de nombreux projets, de la conception au déploiement. Je possède une expertise dans les technologies frontend telles que HTML, CSS et JavaScript, associée à une maîtrise des frameworks backend tels que Node.js.",
        links: ["https://www.linkedin.com/in/manar-zaoui"]
    },
    education: [
        {
            diploma: "MASTER SPÉCIALISÉ PUBLIC",
            organisation: "FSDM - Université Sidi Mohammed Ben Abdellah - Fès",
            year: "2022-2023",
            option: "MQL (Qualité Logiciel)"
        },
        {
            diploma: "LICENCE PROFESSIONNELLE EN SYSTÈMES D'INFORMATION ET GÉNIE LOGICIEL (SIGL)",
            organisation: "FSDM - Université Sidi Mohammed Ben Abdellah - Fès",
            year: 2023,
            option: "SIGL"
        },
        {
            diploma: "BREVET DE TECHNICIEN SUPÉRIEUR (BTS)",
            organisation: "Lycée Technique Maghreb Al Arabie - Oujda",
            year: 2022,
            option: "DSI"
        },
        {
            diploma: "BACCALAURÉAT SCIENCES EXPÉRIMENTALES",
            organisation: "Lycée Oaud Adahab - Oujda",
            year: 2019,
            option: "SVT"
        }
    ],
    technologySkills: [
        {
            skill: "Ingénierie Web :",
            details: ["HTML", "CSS", "Node.js", "React.js", "PHP"]
        },
        {
            skill: "Technologies Mobile :",
            details: ["Android", "Dart", "React Native"]
        },
        {
            skill: "Jakarta Enterprise Edition (JEE) :",
            details: ["Architecture 3 tiers", "Modèle MVC2", "Servlets et JSP", "Modèle DAO", "Framework Spring / Spring Boot", "JPA", "Hibernate", "Administration Tomcat"]
        },
        {
            skill: "DevOps :",
            details: ["Git", "Maven", "Ant", "GitHub", "Jira"]
        },
        {
            skill: "SGBD :",
            details: ["Oracle", "MySQL", "SQL Server"]
        },
        {
            skill: "Gestion de projet :",
            details: ["Pert", "Gantt"]
        },
        {
            skill: "Templates :",
            details: ["Metronic 8", "Berry"]
        },
        {
            skill: "Frameworks :",
            details: ["Laravel 9", "Symfony 6.2.1 (API Platform)", "Flask", "Next.js"]
        }
    ],
    experiences_projects: [
        {
            type: "Projet",
            organisation: "FCPO (agence de développement informatique)",
            title: "Développement de la partie administration des gestions produits cosmétiques",
            technologies: ["React TypeScript", "Metronic 8", "Symfony 6.2.1 API Platform"],
            year: 2023,
            duration: "1 mois",
            description: "Gestion des promotions, des produits, des marques, des back-orders."
        },
        {
            type: "Projet",
            organisation: "FCPO (agence de développement informatique)",
            title: "Travailler sur une POS (Point de vente)",
            technologies: ["React.js", "CSS", "Laravel 8", "Metronic", "Electron"],
            year: 2023,
            duration: "1 mois",
            description: "Administration de POS (gestion des produits, des marques, des achats, des ventes, analyses de chiffre d'affaires, les bénéfices)."
        },
        {
            type: "Projet",
            organisation: "FCPO (agence de développement informatique)",
            title: "Développement d'une application de bureau pour la gestion de stock des bouteilles de gaz",
            technologies: ["React.js", "Laravel 8", "API REST", "Electron"],
            year: 2023,
            duration: "1 mois",
            description: "Application de gestion de stock destinée aux étudiants de la faculté de médecine. La plateforme contient des cours et des examens en ligne."
        },
        {
            type: "Projet",
            organisation: "Freelance",
            title: "Création des APIs REST pour une plateforme d'éducation en ligne",
            technologies: ["React.js", "Laravel 8", "API REST"],
            year: 2022,
            duration: "1 mois",
            description: "Projet destiné aux étudiants de la faculté de médecine. La plateforme contient des cours et des examens en ligne."
        },
        {
            type: "Stage PFE",
            organisation: "INTELACP (société multinationale)",
            title: "Travailler sur une plateforme de Crowdfunding",
            technologies: ["React TypeScript", "Laravel 8", "API REST"],
            year: 2022,
            duration: "2 mois",
            description: "Stage de fin d'études pour obtenir ma licence en systèmes d'information et génie logiciel. J'ai développé la partie backend en créant des APIs REST."
        },
        {
            type: "Stage PFE",
            organisation: "SupMTI (École Supérieure de Management d'Informatique & de Télécommunication Privée)",
            title: "Développement d'une application web pour la rédaction des relevés de notes",
            technologies: ["HTML", "CSS", "PHP"],
            year: 2021,
            duration: "1 mois",
            description: "Stage de fin d'études pour obtenir mon Brevet de Technicien Supérieur."
        }
    ],
    softskills: ["Travail en équipe", "Empathie", "Gestion du stress"],
    languages: [
        {
            lang: "Arabe",
            level: "Courant"
        },
        {
            lang: "Français",
            level: "Communication"
        },
        {
            lang: "Anglais",
            level: "Les bases"
        }
    ],
    interests: ["Cuisine", "Voyage"]
},
{
    id : 4,
    profile : {
		photo: "resources/images/Tazi_Mehdi.jpg",
		firstName: "ElMehdi",
		lastName: "Tazi",
		birthday: {
            day: 6,
            month: 9,
            year: 2002
        },
		phone: "0665212575",
		email: "elmehdi.tazi1@usmba.ac.ma",
        address: "Fès ,Maroc",
        professionalSummary: `Ingénieur en informatique avec une bonne expérience 
            sur les architectures logicielles et les nouvelles technologies informatique, 
            en l'occurence Jakarta EE, Spring Boot, React et Angular. 
            Expérimenté dans la gestion de projets agiles, planification, exécution et coordination des tâches 
            avec des équipes multifonctionnelles. Disposant des compétences requises en communication et 
            en résolution de problèmes avec un esprit ouvert en collaboration efficace avec les parties prenantes 
            et les membres de l'équipe.
        `,
        links: ["https://www.linkedin.com/in/el-mehdi-tazi-653150219", "", ""]
    },
	education: [
		{
			diploma: "Master MQL",
			organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
			year: '2023'
        },
        {
			diploma: "Licence SMI",
			organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
			year: '2021-2023'
        },
        {
            diploma: "DUT Génie informatique",
			organisation: "EST - Université Sidi Mohammed ben Abdellah - Fès",
			year: '2019-2021'
        },
        {
            diploma: "BAC SMB",
			organisation: "Lycée Moulay Slimane - Fès",
			year: '2019'
        }
        
    ],
    technologySkills: [
		{
            skill: "Jakarta Entreprise Edition (JEE)",
			details: ["Architecture 3 tiers", "Modèle MVC2", "Servlets et JSP",
				"modèle DAO", "Framework Spring / Spring Boot", "JPA", "Hibernate",
                "Administration Tomcat"
            ]
        },
        {
            skill: "Ingénierie du Web",
			details: ["HTML", "CSS", "JavaScript", "Node.js", "React", "Angular" ]
        },
		
        {
            skill: "Ingénierie DevOps",
			details: ["Maven", "Git", "GitHub", "GitLab", "Jira", "Jenkins", "JUnit", "Selenuim"]
        },
		{
            skill: "Technologie XML",
			details: ["Standard XML", "Bases de données XML", "Parseurs XML (DOM, SAX)",
				"DTD", "XSD (XML Schema)", "XSLT", "XPath", "XQuery"]
        }
    ],
    experiences: [
		{
            type: "Stage",
			organisation: "ONEE - Fès",
			title: "Développement d'une application pour la gestion du matériel individuel et collectif de sécurité de la Direction Régionale Distribution de Fès.",
			technologies: ["JAVA"],
			year: 2021,
			duration: "2 mois"
        },
		{
			type: "Projet",
			organisation: "FSDM",
			title: "Développement d'une application Android E-Commerce",
			technologies: ["Flutter", "NodeJs"],
			year: 2023,
			duration: "2 mois"
        }
    ],
    softSkills: ["Communication", "Esprit d'équipe", "Intelligence Emotionnelle", "Empatie et Ecoute", 
                    "Créativité", "Capacité de Résolution de problèmes", "Adaptabilité", "Gestion du Temps", 
                    "Rigueur", "Organisation", "Gestion du Stress", "Présence"
    ],
    languages: [
		{
            language: "Français",
            level: "B2", 
            certification: "",
            experience: ""
        },
		{
            language: "Anglais",
            level: "B1",
            certification: "",
            experience: "" 
        }
	],
	interests: ["FootBall", "Gym", "Gaming"]
},
{
    id : 5,
    profile: {
        photo: "",
        firstName: "Sohayla",
        lastName: "GHANDOR",
        birthday: {
            day: 24,
            month: 12,
            year: 2002
        },
        phone: "0655913727",
        email: "ghandorsouhaila@gmail.com",
        address: "320 A LOTS BAB ANDALOUS TGHAT FES",
        professionalSummary: `Développeuse de logiciels doté d'une vaste expérience dans les architectures logicielles et les technologies émergentes telles que Jakarta EE, React et Angular. Habitué à diriger des projets agiles, je suis compétent dans la planification, l'exécution et la coordination des tâches au sein d'équipes pluridisciplinaires. Mes capacités de communication et de résolution de problèmes, combinées à ma collaboration ouverte avec les parties prenantes et les membres de l'équipe, sont des atouts majeurs dans la réussite de mes missions.`,
        links: [
            "https://www.linkedin.com/in/souhayla-ghandor-09a521264/",
            "https://github.com/JasmineGHR"
        ]
    },
    education: [
        {
            diploma: "Master Qualité du Logiciel",
            organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
            year: "2023-En cours",
            details: {
                field: ""
            }
        },
        {
            diploma: "Licence en Génie Informatique",
            organisation: "FST - Université Sidi Mohammed ben Abdellah - Fès",
            year: "2020-2023",
            details: {
                field: ""
            }
        },
        {
            diploma: "Baccalauréat",
            organisation: "Lycée Ibn Al Haitam de Fès",
            year: "2019-2020",
            details: {
                field: "Baccalauréat Science Mathématique B",
                mention: "bien"
            }
        }
       
        
    ],
    technologySkills: [
        {
            skill: "Jakarta Entreprise Edition (JEE)",
            details: [
                "Modèle MVC2", "Servlets et JSP", "Modèle DAO", "JPA", "Administration Tomcat"
            ]
        },
        {
            skill: "Ingénierie du Web",
            details: ["HTML", "CSS", "JavaScript", "Node.js", "React", "Angular"]
        },
        {
            skill: "Ingénierie DevOps",
            details: ["Maven", "Git", "GitHub", "GitLab", "JUnit"]
        },
        {
            skill: "Technologie XML",
            details: [
                "Standard XML", "Bases de données XML", "Parseurs XML (DOM, SAX)", "DTD", "XSD (XML Schema)", "XSLT", "XPath", "XQuery"
            ]
        },
        {
            skill: "Gestion des Bases de Données",
            details: ["MySQL", "Oracle"]
        },
        {
            skill: "Gestion de projet",
            details: ["Compétences solides en gestion de projet"]
        }
    ],
    experiences: [
        {
            type: "Stage",
            organisation: "J2HB",
            title: "Stage de PFE de la Licence",
            technologies: ["Laravel", "Docker", "React"],
            year: 2023,
            duration: "2 mois",
            description: "La réalisation d'une application web de gestion d'auto école."
        },
        {
            type: "Projet",
            organisation: "FSDM",
            title: "Application de gestion des CVs",
            technologies: ["JavaScript", "CSS", "HTML"],
            year: 2023,
            duration: "1 mois",
            description: "Réalisation d'une application de gestion des CVs."
        },
        {
            type: "Projet",
            organisation: "Université",
            title: "Générateur des diagrammes UML",
            technologies: ["Java"],
            year: 2023,
            duration: "1 mois",
            description: "Réalisation d'une application permettant de construire le diagramme de packages et les diagrammes de classe UML à partir d'un projet Java."
        }
    ],
    softSkills: [
        "Excellentes compétences en communication et en travail d'équipe, avec une forte capacité à résoudre les problèmes de manière efficace. Gestion du temps rigoureuse et grande adaptabilité aux environnements changeants."

    ],
    languages: [
        {
            language: "Arabe",
            level: "Native",
            
        },
        {  
            language: "Français",
            level: "Avancée",    
        },
        {
            language: "Anglais",
            level: "Avancée",    
        }
    ],
    interests: []
},
{
    id : 6,
    profile : {
		photo: "resources/images/Oubella_FatimaEzzahrae.jpg",
		firstName: "Fatima Ezzahrae",
		lastName: "Oubella",
		birthday: {
            day: 10,
            month: 9,
            year: 2001
        },
		phone: "0689641357",
		email: "fatimaezzahraeoubella@gmail.com",
        address: "Meknès, Maroc",
        professionalSummary: `Étudiante en Master Qualité du Logiciel (MQL) avec une expertise approfondie en architectures logicielles et nouvelles technologies informatiques telles que Jakarta EE, Spring Boot et Ingénierie DevOps. Passionnée par l'innovation et visant une expertise pointue en ingénierie logicielle, je suis déterminée à contribuer au succès des entreprises dans un environnement dynamique et compétitif.
        `,
        links: ["FATIMAEZZAHRAE OUBELLA"]
    },
	education: [
		{
			diploma: "Master MQL",
			organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
			year: "2023-En cours"
        },
        {
			diploma: "Licence Professionnelle DSIC",
			organisation: "ESTM - Ecole Supérieure de Technologie - Meknès",
			year: "2022-2023"
        },
        {
			diploma: "DUT Génie Informatique",
			organisation: "ESTM - Ecole Supérieure de Technologie - Meknès",
			year: "2020-2022"
        },
        {
			diploma: "Baccaluréat SMA",
			organisation: "Lycée - Omar Ibn Elkhttab - Meknès",
			year: "2018-2019"
        }
    ],
    technologySkills: [
		{
            skill: "Jakarta Entreprise Edition (JEE)",
			details: ["Architecture 3 tiers", "Modèle MVC2", "Servlets et JSP",
				"modèle DAO", "Framework Spring / Spring Boot", "JPA", "Hibernate",
                "Administration Tomcat"
            ]
        },
        {
            skill: "Ingénierie du Web",
			details: ["HTML", "CSS", "JavaScript", "Node.js", "React", "Angular" ]
        },
		
        {
            skill: "Ingénierie DevOps",
			details: ["Maven", "Git", "GitHub", "GitLab", "Jira", "Jenkins", "JUnit", "Selenuim"]
        },
		{
            skill: "Technologie XML",
			details: ["Standard XML", "Bases de données XML", "Parseurs XML (DOM, SAX)",
				"DTD", "XSD (XML Schema)", "XSLT", "XPath", "XQuery"]
        }
    ],
    experiences: [
		{
            type: "Stage",
			organisation: "WeHelp - Meknès",
			title: "Réalisation d'une plateforme de Bien-Être",
			technologies: ["React.js", "Laravel 9", "Axios"],
			year: 2023,
			duration: "2 mois",
            description: "Analyse des besoins utilisateurs et création d'un cahier des charges technique, conception d'interfaces conviviales et immersives dans le domaine du bien-être, et intégration des interfaces avec l'API pour une communication fluide entre le frontend et le backend."
        },
        {
            type: "Stage",
			organisation: "EPIM - Meknès",
			title: "Réalisation d'un module de gestion des états de paiements des étudiants",
			technologies: ["Laravel 8", "Html", "css"],
			year: 2022,
			duration: "2 mois",
            description: "Enregistrement des paiements, génération de factures, gestion des impayés, consultation des historiques de paiement, et élaboration d'une structure de base de données pour stocker les informations liées aux paiements des étudiants."
        },
        {
            type: "Stage",
			organisation: "BENCAM - Meknès",
			title: "création d'un site web statique pour présenter l'entreprise",
			technologies: ["Html", "css"],
			year: 2021,
			duration: "1 mois",
            description: "Observation et création d'un site web statique pour présenter   l'entreprise en HTML et CSS."

        },
		{
			type: "Projet",
			organisation: "ESTM",
			title: "Réalisation d'une application de Gestion Electroniques des Courriers ",
			technologies: ["PHP", "Html", "css", "JavaScript"],
			year: 2022,
			duration: "4 mois",
            description: "Conception et développement, en collaboration avec un binôme et sous l'encadrement de l'école, d'une application de gestion des courriers électroniques pour améliorer les communications internes et externes d'une entreprise."
        }
    ],
    softSkills: ["Communication", "Esprit d'équipe", "Intelligence Emotionnelle", "Empatie et Ecoute", 
                    "Créativité", "Capacité de Résolution de problèmes", "Adaptabilité", "Gestion du Temps", 
                    "Rigueur", "Organisation", "Gestion du Stress", "Présence","Autonomie"
    ],
    languages: [
		{
            language: "Français",
            level: "B2", // voir le "Common European Framework of Reference for Languages" (CEFR)
            certification: "DELF",
            experience: ""
        },
		{
            language: "Anglais",
            level: "B2",
            certification: "TOEFL",
            experience: "" 
        }
	],
	interests: ["Voyage", "Natation", "Photographie", "Lecture"]
},
{
    id : 7,
    profile: {
        photo: "resources/images/Miftah_Asmaa.png",
        firstName: "Asmaa",
        lastName: "Miftah",
        birthday: {
            day: 24,
            month: 5,
            year: 2002
        },
        phone: "0693963694",
        email: "miftahasmaa2020@gmail.com",
        address: "Meknès, Maroc",
        professionalSummary: `Étudiante en Master MQL (Master Qualité du Logiciel), avec de solides compétences en architectures logicielles et en nouvelles technologies informatiques, notamment Jakarta EE, Spring Boot et Ingénierie DevOps.`,
        links: ["https://www.linkedin.com/in/asmaa-miftah-589637210/"]
    },
    education: [
        {
            diploma: "Master Qualité du Logiciel (MQL) - M1",
            organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
            year: "2023-En cours"
        },
        {
            diploma: "Licence professionnelle en Ingénierie des Applications Mobile (IAM)",
            organisation: "EST - Université Mohammed V - Salé",
            year: "2022-2023"
        },
        {
            diploma: "Diplome universitaire en Génie Logiciel",
            organisation: "EST - Université Moulay Ismaïl - Meknès",
            year: "2020-2022"
        },
        {
            diploma: "Baccalauréat, sciences physiques option française",
            organisation: "Ecole moderne privée El Fatih - Meknès",
            year: "2019-2020"
        }
    ],
    technologySkills: [
        {
            skill: "Jakarta Entreprise Edition (JEE)",
            details: ["Architecture 3 tiers", "Modèle MVC2", "Servlets et JSP", "Modèle DAO", "Framework Spring / Spring Boot", "JPA", "Hibernate", "Administration Tomcat"]
        },
        {
            skill: "Ingénierie du Web",
            details: ["HTML", "CSS", "JavaScript", "Node.js", "React", "Angular"]
        },
        {
            skill: "Ingénierie DevOps",
            details: ["Maven", "Git", "GitHub", "GitLab", "Jira", "Jenkins", "JUnit", "Selenuim"]
        },
        {
            skill: "Technologie XML",
            details: ["Standard XML", "Bases de données XML", "Parseurs XML (DOM, SAX)", "DTD", "XSD (XML Schema)", "XSLT", "XPath", "XQuery"]
        }
    ],
    experiences: [
        {
            type: "Stage",
            organisation: "Architeo - Rabat",
            title: "SFE: Conception et développement d’une solution de gestion d’un co-working space",
            technologies: ["Spring Boot"],
            year: 2023,
            duration: "2 mois"
        },
        {
            type: "Stage",
            organisation: "Architeo - Rabat",
            title: "SFE: Mise en place d’une solution de gestion de facturation",
            technologies: ["JEE"],
            year: 2022,
            duration: "2 mois"
        },
        {
            type: "Stage",
            organisation: "Architeo - Rabat",
            title: "Stage d'initiation: Réalisation d'un site web statique en HTML et CSS pour présenter l'entreprise",
            technologies: ["HTML", "CSS", "JavaScript"],
            year: 2021,
            duration: "1 mois"
        },
        {
            type: "Projet",
            organisation: "ESTS - Salé",
            title: "Mise en place d’une solution mobile d’aide à domicile",
            technologies: ["Flutter"],
            year: 2023,
            duration: "4 mois"
        },
        {
            type: "Projet",
            organisation: "ESTM - Meknès",
            title: "Réalisation d'une application de Gestion Electronique de Courriers(GEC)",
            technologies: ["PHP", "HTML","CSS","JavaScript"],
            year: 2023,
            duration: "4 mois"
        }
    ],
    softSkills: ["Communication", "Esprit d'équipe", "Empathie et Écoute", "Créativité", "Adaptabilité", "Gestion du Temps", "Organisation","Présence"],
    languages: [
        {
            language: "Français",
            level: "B2",
            certification: "DELF",
            experience: ""
        },
        {
            language: "Anglais",
            level: "B2",
            certification: "",
            experience: ""
        }
    ],
    interests: ["Photographie", "Voyage"]
},
{
    id : 8,
    profile : {
        photo: "resources/images/Masrour_Ghita.png",
        firstName: "Ghita",
        lastName: "Masrour",
        birthday: "10 juillet 2002" ,
        phone: "0674208798",
        email: "ghitamasrour12345@gmail.com",
        address: "Rce Karam imm F apt 4 , Fès",
    },
    education: [
        {
            diploma: "Master MQL (en cours)",
            organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
            year: 2024
        },
        {
            diploma: "Licence professionnelle en Méthode Informatique Appliquée à la Gestion des Entreprises (MIAGE)",
            organisation: "FSJESM - Université Hassan II - Casablanca",
            year: 2023
        },
        {
            diploma: "Diplôme Universitaire de Technologie en Informatique Décisionnelle",
            organisation: "Ecole Supérieure de Technologie, Fès",
            year: 2022
        },
    ],
    technologySkills: [
        {
            skill: "Jakarta Entreprise Edition (JEE)",
            details: ["Architecture 3 tiers", "Modèle MVC2", "Servlets et JSP",
                "modèle DAO", "Administration Tomcat"
            ]
        },
        {
            skill: "Ingénierie du Web",
            details: ["HTML", "CSS", "JavaScript", "Node.js",  ]
        },
        
        {
            skill: "Ingénierie DevOps",
            details: ["Maven", "Git", "GitHub", "GitLab", "Jira",  "JUnit"]
        },
        {
            skill: "Technologie XML",
            details: ["Standard XML", "Bases de données XML", "Parseurs XML (DOM, SAX)",
                "DTD", "XSD (XML Schema)", "XSLT", "XPath", "XQuery"]
        },
        {
            skill: "Plateformes et Framework .NET",
            details: ["Solutions .NET (C#) ", " MVCi (2 à 5)" ," ASPX ",
            "CSHTML (Razor)", " Web Parts"]
        }
    ],
    experiences: [
        {
            type: "Stage",
            organisation: "Stage au Centre Hospitalier Universitaire de Fès (CHU)",
            year: "01/06/2023 - 30/06/2023",
        },
        {
            type: "Stage",
            organisation: "Stage à la commune de Fès",
            year: "11/04/2022 - 11/06/2022",
        }
    ],
    projects: [
        {
            type: "Projet",
            title: "Réalisation d’une application web de e-learning avec JEE",
            technologies: ["Architecture 3 tiers", "Modèle MVC2", "Servlets et JSP", "modèle DAO"],
            year: 2022,
            duration: "2 mois"
        },
        {
            type: "Projet",
            title: "Réalisation d’une application web de gestion de matériels"
        },
        {
            type: "Projet",
            title: "Réalisation d’une application web de gestion des plan d’actions"
        }
    ],
    
    softSkills: ["Communication", "Esprit d'équipe", "Intelligence Emotionnelle"],


    
    languages: [
        {
            language: "Français",
            level: "courant", 
        },
        {
            language: "Anglais",
            level: "courant",
        },
        {
            language: "Arabe",
            level: "native",
        }
    ]
},
{
    id : 9,
    profile: {
    photo: "resources/images/Manal_Zazouli.png",
    firstName: "Manal",
    lastName: "ZAZOULI",
    birthday: {
        day: 13,
        month: 8,
        year: 2001
    },
    personalSummary: " Je suis une développeuse Full-Stack passionnée de 23 ans, étudiante en master Qualité du Logiciel  Avec une licence en éducation spécialisée en informatique et un baccalauréat en sciences physiques, j'ai acquis une solide formation en développement front-end et back-end, ainsi qu'en gestion de projets.Mes compétences couvrent Jakarta EE, le développement web, les technologies XML et l'ingénierie DevOps. Je recherche un stage pour travailler sur des projets innovants et me préparer à devenir ingénieure en qualité du logiciel.",
      professionalSummary: "Je suis une développeuse Full-Stack passionnée de 23 ans, étudiante en master Qualité du Logiciel  Avec une licence en éducation spécialisée en informatique et un baccalauréat en sciences physiques, j'ai acquis une solide formation en développement front-end et back-end, ainsi qu'en gestion de projets.Mes compétences couvrent Jakarta EE, le développement web, les technologies XML et l'ingénierie DevOps. Je recherche un stage pour travailler sur des projets innovants et me préparer à devenir ingénieure en qualité du logiciel",
    phone: "+212 624 73 98 82",
    email: "manalzazouli10@gmail.com",
    address: "Khénifra/Fés - Maroc",
    links: [
       "https://www.linkedin.com/in/manal-zazouli-477233234/",
       "https://github.com/ManalZZL"
    ]
},
education: [
    {
        diploma: "Master Qualité du logiciel",
        organisation: "Faculté des sciences Dher El Mehraz Fes",
        year: "En cours"
    },
    {
        diploma: "Licence d'éducation en Informatique",
        organisation: "École normale supèrieure Mèknes",
        year: "2021-2023"
    },
    {
        diploma: "Baccalauréat sciences physiques",
        organisation: "Lycée qualifiant Tarik - Khénifra",
        year: "2019"
    }
],
technologySkills: [
    
    {
        skill: "Jakarta Enterprise edition",
        details: ["Architecture 3 tiers", "Modèle MVC2", "Servlets et JSP",
            "modèle DAO", "JPA",  "Administration Tomcat"]
    },
    {
        skill: "Ingénierie du Web",
        details: ["HTML", "CSS", "JavaScript", "Node.js","Angular" ]
    },
    {
        skill: "Ingénierie DevOps",
        details: ["Maven", "Ant", "Git", "GitHub", "GitLab", "Jira", "JUnit"]
    },
    {
        skill: "Technologie XML",
        details: ["Standard XML", "Bases de données XML", "Parseurs XML (DOM, SAX)",
            "DTD", "XSD (XML Schema)", "XSLT", "XPath", "XQuery"]
    },
    {
        skill: "Gestion de projet ",
        details: ["Pert", "Gantt","UML"]
    },
],
experiences: [
    {
        type: "Stage",
        organisation: "Lycée EL Manfalouti- Mèknes - Ecole Normale supèrieure",
        title: "Enseignante de l'informatique en secondaire",
        technologies: "",
        year: "Dec 2022 - Jan 2023",
        duration: "1 mois",
        description: "Lors de mon parcours à l'ENS, j'ai réalisé un stage au sein du lycée El Manfalouty à Meknès, où j'ai partagé mes connaissances avec les étudiants de première année, en mettant l'accent sur l'algorithmique, les bases de la programmation et leur importance. Ce stage m'a permis d'acquérir diverses compétences, notamment en matière de communication interpersonnelle et de travail avec des profils et des personnalités variés"
    },
    {
        type: "Stage",
        organisation: "Lycée Qualifiant Toulal- Mèknes - Ecole Normale supèrieure",
        title: "Plateforme d'apprentissage / Application de bureau de Gestion de bibliothèque",
        technologies:[ "Moodle", "JAVA (JDBC, Swing)","Mysql ."],
        year: "Mar 2023 - Jun 2023",
        duration: "3 mois",
        description: "Lors de mon stage, au sein du lycée, j'ai été impliqué dans des activités administratives au cours desquelles j'ai identifié certains problèmes. Pour y remédier, j'ai proposé deux solutions que j'ai réalisées : la mise en place d'une plateforme d'apprentissage en ligne en utilisant Moodle, ainsi que le développement d'une application de gestion de bibliothèque du lycée en utilisant Java."
    }
],
softSkills: [
    "Gestion de stress",
    "Communication et Empathie",
    "Travail en équipe",
    "Rigueur et Organisation","Intelligence Emotionnelle",
],
languages: [
    {
        language:"Arabe",
        level: "Courante",
        certification: "",
        experience: ""
    },
  {
    language: "Français",
    level: "C1",
    certification: "",
    experience: ""
  },
  {
    language: "Anglais",
    level: "B2",
    certification: "",
    experience: "" 
}
],
interests: [
    "Musculation",
    "Powerlifting",
    "La lecture et l'écriture"
]
},
{
    id : 10,
    profile: {
        photo: "resources/images/Laktam_Abdellah.png",
        firstName: "Abdellah",
        lastName: "Laktam",
        birthday: {
            day: 23,
            month: 9,
            year: 2000
        },
        phone: "0663573878",
        email: "laktamlaktamabdellah@gmail.com",
        address: "Rabat",
        professionalSummary: `  Étudiant passionné et motivé, actuellement en Master Qualite du Logiciel (MQL) à la faculté des sciences Dhar El Mahraz , avec 
        une solide compréhension des architectures logicielles et les nouvelles technologies informatique, 
        en l'occurence Jakarta EE, Spring Boot, React et Angular. Disposant des compétences requises en communication et 
        en résolution de problèmes avec un esprit ouvert en collaboration efficace avec les parties prenantes 
        et les membres de l'équipe.`
        ,
        links: ["github.com/laktam"],
    },
    education: [
        {
            diploma: "Master MQL",
            organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
            year: 2025
        },
        {
            diploma: "Licence Professionnelle GLAASRI",
            organisation: "École SUPÉRIEURE DE TECHNOLOGIE CASA",
            year: 2023
        },
        {
            diploma: "Diplôme de technicien spécialisé en réseau informatique",
            organisation: "ISTA Hay Nahda ",
            year: 2022
        },
        {
            diploma: "Baccalauréat physique chimie",
            organisation: "Lycée Moulay Abdellah",
            year: 2018
        },


    ],
    technologySkills: [
        {
            skill: "Jakarta Entreprise Edition (JEE)",
            details: ["Architecture 3 tiers", "Modèle MVC2", "Servlets et JSP",
                "modèle DAO", "Framework Spring / Spring Boot", "JPA", "Hibernate",
                "Administration Tomcat"
            ]
        },
        {
            skill: "Ingénierie du Web",
            details: ["HTML", "CSS", "JavaScript", "Node.js", "React", "Angular"]
        },

        {
            skill: "Ingénierie DevOps",
            details: ["Maven", "Git", "GitHub", "GitLab", "Jira", "Jenkins", "JUnit", "Selenuim"]
        },
        {
            skill: "Technologie XML",
            details: ["Standard XML", "Bases de données XML", "Parseurs XML (DOM, SAX)",
                "DTD", "XSD (XML Schema)", "XSLT", "XPath", "XQuery"]
        }
    ],
    experiences: [
        {
            type: "Stage",
            organisation: "4Digital - Tanger",
            title: "PFE: développement d'une webapp d'ecomerce",
            technologies: ["React", "NestJS", "Node.js", "TypeScript", "Material UI", "Docker", "MySQL", "Swagger"],
            year: 2023,
            duration: "1 mois"
        },
        {
            type: "Projet",
            organisation: "ESTC",
            title: "Extension de prise de note sur les tabs de navigateur",
            technologies: ["HTML", "CSS", "JavaScript"],
            year: 2022,
            duration: "1 mois"
        },
        {
            type: "Projet",
            organisation: "ESTC",
            title: " Online tic-tac-toe",
            technologies: ["React", "ExpressJS", "HTML", "CSS"],
            year: 2022,
            duration: "1 mois"
        },
        {
            type: "Projet",
            organisation: "ESTC",
            title: " Site web de l'ESTC",
            technologies: ["Django", "HTML", "CSS"],
            year: 2022,
            duration: "1 mois"
        },
        {
            type: "Projet",
            organisation: "ESTC",
            title: "Application android qui utilise 3 algorithme (knn, Reseau Bayesien,Arbre de decision)",
            technologies: ["Java"],
            year: 2022,
            duration: "1 mois"
        },
        {
            type: "Projet",
            organisation: "ESTC",
            title: "Application desktop de gestion des contacts (GUI)",
            technologies: ["Java Swing", "JDBC"],
            year: 2022,
            duration: "1 mois"
        }
    ],
    softSkills: ["Communication", "Esprit d'équipe", "Empatie et Ecoute",
        "Capacité de Résolution de problèmes", "Adaptabilité", "Gestion du Temps",
        "Gestion du Stress", "Présence"
    ],
    languages: [
        {
            language: "Français",
            level: "", // voir le "Common European Framework of Reference for Languages" (CEFR)
            certification: "",
            experience: ""
        },
        {
            language: "Anglais",
            level: "",
            certification: "",
            experience: ""
        },
        {
            language: "Arabe",
            level: "",
            certification: "",
            experience: ""
        }
    ],
    interests: ["Football"]
},
{
    id : 11,
    profile : {
        photo: "resources/images/Iben_ElRhazi_Mehdi.jpg",
        firstName: " El Mehdi",
        lastName: " IBEN EL RHAZI",
        birthday: {
            day: 15,  
            month: 2,
            year: 2001
        },
        phone: "06-72-34-42-08",
        email: "mehdiibenelrhazi@gmail.com",
        address: "Rue Sopronor 2 hay Azhar Fes",
        professionalSummary: "Je suis un futur lauréat du Master en Qualité Logiciel (MQL) avec une solide formation en développement de logiciels. Au cours de ma formation, j'ai acquis des compétences approfondies en ingénierie logicielle. Mon parcours académique m'a permis de maîtriser divers langages de programmation, méthodologies de développement, et outils de gestion de la qualité. Passionné par la création de solutions logicielles robustes et performantes, je suis prêt à contribuer activement à des projets innovants et à m'engager dans des environnements collaboratifs et dynamiques.",
        links: ["https://www.github.com/Elmehdi-Ibenelrhazi", "https://www.linkedin.com/in/elmehdi-ibenelrhazi-1a6b25267"]
    },
    education: [
        {
            diploma: "Master MQL",
            organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
            year: 2025
        },
        {
            diploma: "Licence en Génie Informatique",
            organisation: "Faculté des Sciences et Techniques Fès",
            year: 2023
        },
        {
            diploma: "Baccalauréat",
            organisation: "Établissement Secondaire Rayane",
            year: 2018
        }
    ],
    technologySkills: [
        {
            skill: "Jakarta Entreprise Edition (JEE)",
            details: ["Architecture 3 tiers", "Modèle MVC2", "Servlets et JSP", "modèle DAO", "Framework Spring / Spring Boot", "JPA", "Hibernate", "Administration Tomcat"]
        },
        {
            skill: "Ingénierie du Web",
            details: ["HTML", "CSS", "JavaScript", "Node.js", "React", "Angular"]
        },
        {
            skill: "Ingénierie DevOps",
            details: ["Maven", "Git", "GitHub", "GitLab", "Jira", "Jenkins", "JUnit", "Selenium"]
        },
        {
            skill: "Technologie XML",
            details: ["Standard XML", "Bases de données XML", "Parseurs XML (DOM, SAX)", "DTD", "XSD (XML Schema)", "XSLT", "XPath", "XQuery"]
        }
    ],
    experiences: [
        {
            type: "Stage",
            organisation: "CHU Hassan 2 Fes",
            title: "Stage en Cyber Sécurité",
            technologies: ["Tests de pénétration"],
            year: 2023,
            duration: "4 mois"
        },
        {
            type: "Projet",
            organisation: "Faculte des sciences et techniques",
            title: "Projet de Programmation Web",
            technologies: ["HTML", "CSS", "PHP"],
            year: "2022",
            duration: "1 mois"
        }
    ],
    softSkills: ["Communication", "Esprit d'équipe", "Intelligence Emotionnelle", "Empathie et Écoute", "Créativité", "Capacité de Résolution de problèmes", "Adaptabilité", "Gestion du Temps", "Rigueur", "Organisation", "Gestion du Stress", "Présence"],
    languages: [
        {
            language: "Français",
            level: "C1",
            certification: "DALF",
            experience: ""
        },
        {
            language: "Anglais",
            level: "B2",
            certification: "",
            experience: ""
        },
        {
            language: "Arabe",
            level: "Langue maternelle",
            certification: "",
            experience: ""
        }
    ],
    interests: ["Natation", "Musculation", "Voyage"]
},
{
    id : 12,
    profile : {
		photo: "",
		firstName: "Hassnae",
		lastName: "HASSIB",
		birthday: {
            day: 8,
            month: 10,
            year: 2022
        },
		phone: "0604-258810",
		email: "hassib.hassnae@gmail.com",
        address: "136  Moukadassa Lidou-Fès",
        professionalSummary: `Étudiante enthousiaste en première année de master en Qualité du Logiciel (MQL), spécialisé dans le développement web. Passionné par l'univers du web avec une bonne expérience 
        sur les architectures logicielles et les nouvelles technologies informatique, 
        en l'occurence Jakarta EE, Spring Boot, React et Angular. 
        Expérimenté dans la gestion de projets agiles, planification, exécution et coordination des tâches 
        avec des équipes multifonctionnelles. Disposant des compétences requises en communication et 
        en résolution de problèmes avec un esprit ouvert en collaboration efficace avec les parties prenantes 
        et les membres de l'équipe.
        `,
        links: ["https://github.com/hassib-hassnae", "https://www.linkedin.com/in/hassnae-hassib-318ba2297/"]
    },
	education: [
		{
			diploma: "1ère année master qualité du logiciel (MQL)",
			organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
			year: "2023-2024"
        },
        {
			diploma: "Licence en sciences mathématiques et informatique",
			organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
			year: "2023"
        },
        {
			diploma: "Baccalauréat International sciences mathématiques A",
			organisation: "Lycée TICHOUKT Boulmane",
			year: "2020"
        },
    ],
    technologySkills: [
		{
            skill: "Jakarta Entreprise Edition (JEE)",
			details: ["Architecture 3 tiers", "Modèle MVC2", "Servlets et JSP",
				"modèle DAO", "Framework Spring / Spring Boot", "JPA",
                "Administration Tomcat"
            ]
        },
        {
            skill: "Ingénierie du Web",
			details: ["HTML", "CSS", "JavaScript", "Node.js"]
        },
		
        {
            skill: "Ingénierie DevOps",
			details: ["Maven", "Git", "GitHub", "GitLab", "Jira", "Trello", "Jenkins", "JUnit"]
        },
		{
            skill: "Technologie XML",
			details: ["Standard XML", "Bases de données XML", "Parseurs XML (DOM, SAX)",
				"DTD", "XSD (XML Schema)", "XSLT", "XPath", "XQuery"]
        },
        {
            skill: "Platforme .NET",
			details: ["C#", "Web Forms", "ASP.NET"]
        },
        {
            skill: "Bases de données",
			details: ["MySQL", "Oracle"]
        },{
            skill: "Programmation orienté objet",
			details: ["C++", "Java", "Python"]
        }
    ],
    experiences: [
		{
            type: "projet",
			organisation: "Faculté des sciences Dhar El Mehraz, Fès",
			title: "Application mobile de traduction de ASL",
            descreption: "Conception et réalisation d'une application mobile de traduction du langage des signes américains à base de l'apprentissage profond.",
			technologies: ["Java", "Python", "XML"],
			year: 2023,
			duration: "4 mois"
        },
        {
            type: "projet",
			organisation: "Faculté des sciences Dhar El Mehraz, Fès",
			title: "Développement d'une application Swing pour la génération de diagrammes de classes d'un projet java",
            descreption: " Création d'une application Java utilisant Swing pour tracer automatiquement les diagrammes de classes d'un projet. L'application analyse le code source et génère des représentations visuelles des classes, de leurs attributs, méthodes et relations, facilitant ainsi la compréhension et la documentation des structures de code complexes.",
			technologies: ["Java", "Swing", "XML"],
			year: 2023,
			duration: "1 mois"
        },
		{
			type: "Projet",
			organisation: "Faculté des sciences Dhar El Mehraz, Fès",
			title: "Réalisation d'une application de Gestion de CVs",
			technologies: ["HTML", "CSS", "JavaScript"],
			year: 2023,
			duration: "3 semaines"
        }
    ],
    softSkills: ["Communication et travail en équipe",
                 "Résolution de problèmes",
                "Adaptabilité",
                "Gestion du temps et du stress",
                "Présence et organisation"
    ],
    languages: [
		{
            language: "Français",
            level: "courant"
        },
		{
            language: "Anglais",
            level: "moyen"
        },
        {
            language: "Arabe",
            level: "natif"
        }
	],
	interests: ["Lecture", "Poésie"]
},
{
    id : 14,
    profile: {
      photo: "resources/images/Hamza_Seddouki.jpeg",
      firstName: "Hamza",
      lastName: "SEDDOUKI",
      birthday: {
        day: 4,
        month: 4,
        year: 1999,
      },
      phone: "+212 784-700651",
      email: "Sedhamza18@gmail.com",
      address: "Fès, Maroc",
      professionalSummary: `
          Je suis un étudiant de Master qualite de logiciel titulaire d'une licence fondamentale 
          en sciences mathématiques et informatique de la Faculté des Sciences Dhar El Mahraz. 
          Mon parcours académique a été une opportunité précieuse qui m'a permis d'acquérir des compétences
          techniques et analytiques solides dans le domaine informatique. je suis déterminé à renforcer 
          davantage mes compétences pour contribuer de manière significative au domaine.
                              `,
      links: ["Hamza Seddouki"],
    },
    education: [
      {
        diploma: "Master Qualité du Logiciel (MQL)",
        organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
        year: "sept. 2023 - Juin 2025",
      },
      {
        diploma: "Licence Fondamentale Sciences Mathématiques EtInformatiques",
        organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
        year: "sept. 2021 - juil. 2023",
      },
      {
        diploma: "DUT Génie Informatique Option Génie Logiciel",
        organisation: "École Supérieure De Technologie - Fès",
        year: "sept. 2017 - juin 2019",
      },
      {
        diploma: "Baccalauréat, Sciences Physique Et Chimique",
        organisation: "Lycée Ibn Rochd - Fès",
        year: "sept. 2014 - juin 2017",
      },
    ],
    technologySkills: [
      {
        skill: "Jakarta Entreprise Edition (JEE)",
        details: [
          "Architecture 3 tiers",
          "Modèle MVC2",
          "Servlets et JSP",
          "modèle DAO",
          "Framework Spring / Spring Boot",
          "JPA",
          "Hibernate",
          "Administration Tomcat",
        ],
      },
      {
        skill: "Ingénierie du Web",
        details: [
          "HTML",
          "CSS",
          "JavaScript",
          "Node.js",
          "React",
          "Express.js",
          "PHP",
        ],
      },
      {
        skill: "Ingénierie du Mobile",
        details: ["Flutter"],
      },
  
      {
        skill: "Ingénierie DevOps",
        details: ["Maven", "Git", "GitHub", "GitLab", "Jira", "JUnit"],
      },
      {
        skill: "Bases de données",
        details: ["MySQL", "Oracle Database", "SQL Server", "FareBase"],
      },
      {
        skill: "Analyse et conception",
        details: ["UML", "MERISE", "Design Patterns"],
      },
      {
        skill: "Technologies XML",
        details: [
          "Standard XML",
          "Bases de données XML",
          "Parseurs XML (DOM, SAX)",
          "DTD",
          "XSD (XML Schema)",
          "XSLT",
          "XPath",
          "XQuery",
        ],
      },
    ],
    experiences: [
      {
        type: "Formateur",
        organisation: "Im Creative - Fès",
        title:
          "Un formateur pour certains étudiants dans certains langages de programmation afin de passer des examens scolaires et d'appliquer leurs connaissances.",
        technologies: [],
        year: "avr 2021 - mai 2021",
        duration: "2 mois",
      },
      {
        type: "Développeur",
        organisation: "Im Creative - Fès",
        title:
          "Travailler avec les clients pour comprendre leur besoins et fournir un excellent service. Création d'applications mobiles et web.",
        technologies: ["PHPRad(Laravel)", "Flutter"],
        year: "oct. 2020 - dec. 2021",
        duration: "14 mois",
      },
      {
        type: "Stage",
        organisation: "École Supérieure de Technologie - fes",
        title:
          "j'ai travaillé sur un projet permettant de générer des supports de cours au format PDF ou SCORM à partir d'un fichier JSON.",
        technologies: ["NodeJs"],
        year: "Avr. 2020 - Juin. 2021",
        duration: "2 mois",
      },
    ],
    softSkills: [
      "Créativité",
      "Curiosité",
      "Flexibilité",
      "Communication",
      "Adaptabilité",
      "Esprit d'équipe",
      "Empatie et Ecoute",
    ],
    languages: [
      {
        language: "Français",
        level: "B2",
        certification: "TCF",
        experience: "",
      },
      {
        language: "Anglais",
        level: "B1",
        certification: "",
        experience: "",
      },
      {
        language: "Arabe",
        level: "Langue maternelle",
        certification: "",
        experience: "",
      },
    ],
    interests: ["Football", "Tennis", "Jeux vidéo", "Jeux d'échecs", "Voyages"],
  },
  {
    id : 15,
    profile : {
		photo: "resources/images/Abdelhamid_Fadel.png",
		firstName: "Abdelhamid",
		lastName: "Fadel",
		birthday: {
            day: 29,
            month: 11,
            year: 2000
        },
		phone: "+212767347766",
		email: "fadelabdelhamid1@gmail.com",
        address: "El Jadida, Maroc",
        professionalSummary: `
                            Étudiant passionné en ingénierie logicielle
                            à la recherche d’opportunités pour acquérir
                            de nouvelles compétences et appliquer mes
                            connaissances en programmation.
                            Je possède de solides compétences techniques
                            dans les langages de programmation tels que
                            Java, JavaScript et C. Maîtrise des technologies
                            Web telles que Java Enterprise Edition(JEE) et
                            Node.js. Je recherche un environnement de travail
                            stimulant où je peux apprendre, évoluer et
                            contribuer à des projets de développement de
                            logiciels passionnants.
                            `,
        links: ["https://www.linkedin.com/in/fadelabdelhamid/", "https://twitter.com/a_fadel_dev/"]
    },
	education: [
		{
			diploma: "Master Qualité du Logiciel (MQL)",
			organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
			year: 2025
        },
        {
            diploma: "Licence Professionnelle - Ingénierie des Systèmes d’information et Réseaux",
            organisation: "EST Safi - Université Cadi Ayyad - Safi",
            year: 2021
        },
        {
            diploma: "Diplôme Universitaire de Technologie - Génie Informatique",
            organisation: "EST Safi - Université Cadi Ayyad - Safi",
            year: 2020
        },
        {
            diploma: "Baccalauréat",
            organisation: "Lycée Abou Chouaib Doukkali - El Jadida",
            year: 2018
        }
    ],
    technologySkills: [
		{
            skill: "Jakarta Entreprise Edition (JEE)",
			details: ["Architecture 3 tiers", "Modèle MVC2", "Servlets et JSP",
				"modèle DAO", "Framework Spring / Spring Boot", "JPA", "Hibernate",
                "Administration Tomcat"
            ]
        },
        {
            skill: "Ingénierie du Web",
			details: ["HTML", "CSS", "JavaScript", "Node.js", "React", "Express.js", "PHP"]
        },
		
        {
            skill: "Ingénierie DevOps",
			details: ["Maven", "Git", "GitHub", "GitLab", "Jira", "JUnit"]
        },
        {
            skill: "Bases de données",
            details: ["MySQL", "PostgreSQL", "MongoDB", "Oracle Database"]
        },
        {
            skill: "Analyse et conception",
            details: ["UML", "MERISE", "Design Patterns"]
        },
        {
            skill: "Web Services",
            details: ["REST", "SOAP"]
        },
		{
            skill: "Technologies XML",
			details: ["Standard XML", "Bases de données XML", "Parseurs XML (DOM, SAX)",
				"DTD", "XSD (XML Schema)", "XSLT", "XPath", "XQuery"]
        }
    ],
    experiences: [
		{
            type: "Stage",
			organisation: "Laboratoire LAPSSI ESTS - Safi",
			title: "Estimation des mesures du corps humain à partir d’images, en utilisant des techniques de Computer vision",
			technologies: ["Python", "Tensoflow", "Keras"],
			year: 2021,
			duration: "2 mois"
        },
		{
			type: "Stage",
			organisation: "Laboratoire LAPSSI ESTS - Safi",
			title: "Détection des maladies des plantes à partir des images en utilisant des techniques de Computer vision",
			technologies: ["Python", "Tensoflow", "Keras"],
			year: 2020,
			duration: "2 mois"
        },
        {
            type: "Stage",
            organisation: "OCP Jorf Lasfar",
            title: "Développement d’une application web, pour la gestion des réparations du matériel",
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            year: 2019,
            duration: "2 mois"
        }
    ],
    softSkills: [
        "Créativité", "Curiosité", "Flexibilité", "Autonomie", "Adaptabilité",
        "Sens du détail", "Bonne communication", "Gestion de l’information"
    ],
    languages: [
		{
            language: "Français",
            level: "B2",
            certification: "TCF",
            experience: ""
        },
		{
            language: "Anglais",
            level: "C1",
            certification: "",
            experience: "" 
        },
        {
            language: "Arabe",
            level: "Langue maternelle",
            certification: "",
            experience: ""
        }
	],
	interests: ["Jeux d'échecs", "Jeux vidéo", "Formula 1", "Volleyball"]
},
{
    id : 16,
    "profile": {
        "photo": "resources/images/ElGhayate_Marouane.jpeg",
        "firstName": "Marouane",
        "lastName": "ElGhayate",
        "birthday": {
            "day": 19,
            "month": 12,
            "year": 2000
        },
        "phone": "0648437955",
        "email": "elghayate28@gmail.com",
        "address": "Fès, Maroc",
        "professionalSummary": "Actuellement inscrit dans le programme de Master Qualite du Logiciel (MQL) à la faculté des sciences Dhar El Mahraz je suis à la recherche d'un stage PFE. Ayant des bonnes connaissances sur les architectures logicielles et les nouvelles technologies informatique, en l'occurence Jakarta EE, Spring Boot et React. En tant que développeur Java, ma mission consiste de la conception et l'implémentation des solutions logicielles de haute qualité qui répondent aux besoins des entreprises et des utilisateurs. J'aspire à améliorer constamment mes compétences et mes connaissances, et à collaborer efficacement avec mon équipe et les parties prenantes afin de fournir de la valeur.",
        "links": [
            "https://www.linkedin.com/in/marouane-elghayate-42b116172/",
            "https://github.com/marouaneelghayate/"
        ]
    },
    "education": [
        {
            "diploma": "Master Specialise en Qualite du Logiciel MQL",
            "organisation": "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
            "year": 2023
        },
        {
            "diploma": "Licence en sciences mathématiques et informatiques SMI",
            "organisation": "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
            "year": 2023
        },
        {
            "diploma": "DEUG en sciences mathématiques et informatiques SMI",
            "organisation": "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
            "year": 2022
        }
    ],
    "technologySkills": [
        {
            "skill": "Jakarta Entreprise Edition (JEE)",
            "details": [
                "Architecture 3 tiers",
                "Modèle MVC2",
                "Servlets et JSP",
                "modèle DAO",
                "Framework Spring / Spring Boot",
                "JPA",
                "Hibernate",
                "Administration Tomcat"
            ]
        },
        {
            "skill": "Ingénierie du Web",
            "details": [
                "HTML",
                "CSS",
                "JavaScript",
                "Node.js",
                "React"
            ]
        },
        {
            "skill": "Ingénierie DevOps",
            "details": [
                "Maven",
                "Git",
                "GitHub",
                "GitLab",
                "Jira",
                "Jenkins",
                "JUnit",
                "Selenuim",
                "JMeter",
                "Gitlab CI",
                "Docker"
            ]
        },
        {
            "skill": "Technologie XML",
            "details": [
                "Standard XML",
                "Bases de données XML",
                "Parseurs XML (DOM, SAX)",
                "DTD",
                "XSD (XML Schema)",
                "XSLT",
                "XPath",
                "XQuery"
            ]
        }
    ],
    "experiences": [
        {
            "type": "Projet",
            "organisation": "FSDM",
            "title": "générateur de diagrammes UML",
            "technologies": [
                "Java",
                "Swing",
                "DOM",
                "SAX"
            ],
            "year": 2023,
            "duration": "1 mois"
        },
        {
            "type": "Projet",
            "organisation": "FSDM",
            "title": "Réalisation d'une application de Gestion de CVs",
            "technologies": [
                "HTML",
                "CSS",
                "JavaScript",
                "Json"
            ],
            "year": 2023,
            "duration": "1 mois"
        }
    ],
    "softSkills": [
        "Communication",
        "Esprit d'équipe",
        "Intelligence Emotionnelle",
        "Empatie et Ecoute",
        "Créativité",
        "Capacité de Résolution de problèmes",
        "Adaptabilité",
        "Gestion du Temps",
        "Rigueur",
        "Organisation",
        "Gestion du Stress",
        "Présence"
    ],
    "languages": [
        {
            "language": "Français",
            "level": "bonne maîtrise",
            "certification": "DELF|DALF|TCF|TEF",
            "experience": ""
        },
        {
            "language": "Anglais",
            "level": "courant",
            "certification": "TOEFL|TOEIC|...",
            "experience": ""
        },
        {
            "language": "arabe",
            "level": "Langue Maternelle",
            "certification": "TOEFL|TOEIC|...",
            "experience": ""
        }
    ],
    "interests": [
        "jouer au échecs",
        "faire du sport",
        "Programmation"
    ]
},
{
    //El Maalmi 
    id : 17,
    profile: {
        photo: "resources/images/El Maalmi Ayoub.png",
        firstName: "Ayoub",
        lastName: "El Maalmi",
        birthday: {
            day: 6,
            month: 7,
            year: 2001
        },
        phone: "+212 616242462",
        email: "elmaalmiayoub@gmail.com",
        address: "Meknès, Maroc",
        professionalSummary: `En tant que jeune Marocain passionné par l'informatique, j'ai décidé d'en faire ma profession. J'espère ainsi acquérir une expérience solide et constructive qui me permettra de me démarquer sur le marché du travail.`,
        links: ["https://www.linkedin.com/in/ayoub-el-maalmi-8b274a1a1/", "https://github.com/ELMAALMIA"]
    },
    education: [
        {
            diploma: "Master MQL",
            organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
            year: 2025
        },
        {
            diploma: "Licence Professionnelle Développement des Systems d'information et de communication",
            organisation: "ESTM - Université Moulay Ismaïl - Méknès",
            year: 2023
        },
        {
            diploma: "Diplôme universitaire de Technologie en Génie informatique",
            organisation: "ESTM - Université Moulay Ismaïl - Méknès",
            year: 2022
        },
        {
            diploma: "Baccalauréat en sciences physiques et chimiques",
            organisation: "Lycée Zitoune, Meknes",
            year: 2019
        }
    ],
    technologySkills: [
        {
            skill: "Jakarta Enterprise Edition (JEE)",
            details: ["Architecture 3 tiers", "Modèle MVC2", "Servlets et JSP",
                "Modèle DAO", "Framework Spring / Spring Boot", "JPA", "Hibernate",
                "Administration Tomcat"]
        },
        {
            skill: "Ingénierie du Web",
            details: ["HTML", "CSS", "JavaScript", "Node.js", "React", "Angular"]
        },
        {
            skill: "Ingénierie DevOps",
            details: ["Maven", "Git", "GitHub", "GitLab", "Jira", "Jenkins", "JUnit", "Ant"]
        },
        {
            skill: "Technologie XML",
            details: ["Standard XML", "Bases de données XML", "Parseurs XML (DOM, SAX)",
                "DTD", "XSD (XML Schema)", "XSLT", "XPath", "XQuery"]
        },
        {
            skill: "Gestion des bases de données",
            details: ["MySQL", "Oracle", "MongoDB", "PostgreSQL"]
        }
    ],
    experiences: [
        {
            type: "Stage",
            organisation: "Okayenergy - MEKNES, Maroc",
            title: "Au sein de ma Licence professionnelle, j'ai développé une application de gestion de budget chez Okayenergy.J'ai conçu l'interface utilisateur avec React et Redux et développé le backend avec Spring Boot, renforçant ainsi l'architecture et la sécurité du système",
            technologies: ["React", "Redux", "Spring Boot"],
            year: 2023,
            duration: "2 mois",
          
        },
    
        {
            type: "Projet",
            organisation: "My-Pharma",
            title: "MY-PHARMA @ Java + JavaFX :\n My-pharma est une application desktop en Java et JavaFX dédiée à la gestion de pharmacie. Elle permet aux utilisateurs de gérer les médicaments, les stocks et les factures en toute simplicité. Grâce à ma-pharma, les pharmaciens sont en mesure de gérer efficacement leurs stocks, de suivre les ventes et de générer des factures en quelques clics.",
            technologies: ["Java", "JavaFX"],
            year: 2023,
            duration: "2 mois",
        },
        {
            type: "Stage",
            organisation: "2R FLÈCHE - MEKNÈS, Maroc",
            title: "Lors de mon stage chez 2R FLÈCHE, j'ai amélioré la gestion du temps et augmenté les commandes avec JavaScript, PHP, Laravel, Bootstrap, et Vue.js. Cette expérience a renforcé ma capacité à gérer des projets complexes et à maîtriser plusieurs technologies web",
            technologies: ["JavaScript", "PHP", "Laravel", "Bootstrap", "Vue.js"],
            year: 2022,
            duration: "3 mois",
        },
      
        {
            type: "Projet",
            organisation: "E-Supply-Online",
            title: "E-Supply-Online @ Laravel + JS/JQUERY \n E-supply est une plateforme pour gérer le Marché public en utilisant des langages HTML, CSS, PHP, JS/JQUERY et des Framework Bootstrap et Laravel.",
            technologies: ["Laravel", "JS", "JQUERY"],
            year: 2022,
            duration: "4 mois",
            
        },
        {
            type: "Stage",
            organisation: "DPA - MEKNÈS, Maroc",
            title: "Gestion des dossiers, notation du courrier dans les carnets d'arrivée ou de départ, et développement d'une application de gestion de congé en PHP/Laravel.",
            technologies: ["PHP", "Laravel", "HTML/CSS", "Bootstrap"],
            year: 2020,
            duration: "1 mois",
        },
       
        
    ],
    softSkills: ["Esprit d'équipe", "Intelligence Emotionnelle", "Empathie et Écoute", 
                "Créativité",  "Gestion du Temps", 
                 "Gestion du Stress", "Présence"],
    languages: [
        {
            language: "Français",
            level: "B2", 
            certification: "DELF",
            experience: "courant"
        },
        {
            language: "Anglais",
            level: "",
            certification: "",
            experience: "courant"
        },
        {
            language: "Arabe",
            level: "",
            certification: "",
            experience: "Langue maternelle"
        }
    ],
    interests: ["Échecs", "Écriture", "Football"]
},
{
    id : 18,
    profile: {
        photo: "resources/images/El_Mehdi_Amarti_Riffi.png",
        firstName: "El Mehdi ",
        lastName: "Amarti Riffi",
        birthday: {
            day: 12,
            month: 1,
            year: 2002
        },
        phone: "0772587266",
        email: "mehdiamarti33@gmail.com",
        address: "12 LOTS SALMA APPT 12 RTE AIN CHKEF FES",
        professionalSummary: `Étudiant en première année Master Qualité du Logiciel (MQL), je suis à la recherche d'un stage dans le domaine du développement logiciel pour mettre en pratique mes compétences.
        `,
        links: ["https://github.com/mehdiI2002", "https://www.linkedin.com/in/el-mehdi-amarti-riffi"]
    },
    education: [
        {
            diploma: "Master qualité du logiciel (MQL)",
            organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
            year: 2025
        },
        {
            diploma: "Licence Fondamentale en Sciences Mathématiques et Informatique",
            organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
            year: 2023
        },
        {
            diploma: "DEUG en Sciences Mathématiques et Informatique",
            organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
            year: 2022
        },
        {
            diploma: "Baccalauréat International en Sciences Mathématiques option B",
            organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
            year: 2019
        }
    ],
    technologySkills: [
        {
            skill: "Jakarta Entreprise Edition (JEE)",
            details: ["Architecture 3 tiers", "Modèle MVC2", "Servlets et JSP",
                "modèle DAO", "Framework Spring / Spring Boot", "JPA", "Hibernate",
                "Administration Tomcat"
            ]
        },
        {
            skill: "Ingénierie du Web",
            details: ["HTML", "CSS", "PHP", "JavaScript", "Node.js", "React", "Angular"]
        },

        {
            skill: "Ingénierie DevOps",
            details: ["Jira", "Maven", "Git", "GitHub", "GitLab", "Jenkins", "JUnit", "Selenuim"]
        },
        {
            skill: "Technologie XML",
            details: ["Standard XML", "Bases de données XML", "Parseurs XML (DOM, SAX)",
                "DTD", "XSD (XML Schema)", "XSLT", "XPath", "XQuery"]
        },
        {
            skill: "Conception et modélisation",
            details: ["UML", "Merise"]
        },
        {
            skill: "Bases de données",
            details: ["MySQL", "Oracle"]
        }


    ],
    experiences: [
        {
            type: "Projet",
            organisation: "FSDM",
            title: " Réalisation Application gestion des étudiants",
            technologies: ["Java", "Java swing", "DOM"],
            year: 2024,
            duration: "1 mois"
        },
        {
            type: "Projet",
            organisation: "FSDM",
            title: "Application de génération de diagrammes de classe et de packages avec Java",
            technologies: ["Java", "Java swing", "DOM"],
            year: 2024,
            duration: "1 mois"
        }
    ],
    softSkills: ["Communication", "Esprit d'équipe",
        "Créativité"

    ],
    languages: [
        {
            language: "Français",
            level: "Bonne maîtrise", 
            certification: "DELF|DALF|TCF|TEF",
            experience: ""
        },
        {
            language: "Anglais",
            level: "Niveau moyen",
            certification: "TOEFL|TOEIC|...",
            experience: ""
        }
    ],
    interests: ["Kick boxing", "échecs"]
}

]
