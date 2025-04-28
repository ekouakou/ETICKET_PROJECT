// questions.js - Fichier contenant les questions du QCM

const QCMQuestions_ = [
    {
      id: 1,
      question: "Qu'est-ce qu'un système expert en intelligence artificielle ?",
      options: [
        "Un système capable de traiter des informations non structurées",
        "Un système qui imite les capacités d'un expert humain dans un domaine spécifique, en utilisant des règles et des connaissances",
        "Un programme qui apprend par essais et erreurs",
        "Un système conçu pour analyser des données massives en temps réel"
      ],
      correctAnswer: 1,
      explanation: "Un système expert est conçu pour imiter la capacité de prise de décision d'un expert humain. Il fonctionne en utilisant une base de connaissances (ensemble de faits) et un moteur d'inférence (ensemble de règles) pour résoudre des problèmes complexes dans un domaine spécifique. Contrairement à l'apprentissage machine, il se base principalement sur des règles explicites plutôt que sur l'apprentissage à partir de données."
    },
    {
      id: 2,
      question: "En JavaScript, quelle fonction permet d'arrêter l'exécution d'un script pendant un délai spécifié ?",
      options: [
        "setTimeout()",
        "stopExecution()",
        "pauseScript()",
        "setInterval()"
      ],
      correctAnswer: 0,
      explanation: "La fonction setTimeout() en JavaScript permet de retarder l'exécution d'une fonction pendant un temps spécifié en millisecondes. Elle ne bloque pas l'exécution du reste du script, mais planifie l'exécution d'une fonction callback après le délai spécifié. Par exemple: setTimeout(() => { console.log('Cette fonction s'exécute après 2 secondes') }, 2000);"
    },
    {
      id: 3,
      question: "Que fait la commande git commit dans GIT ?",
      options: [
        "Annule toutes les modifications locales effectuées sur un fichier",
        "Envoie les modifications locales à un dépôt distant",
        "Sauvegarde les modifications locales dans l'historique de la branche actuelle",
        "Crée une nouvelle branche dans le dépôt local"
      ],
      correctAnswer: 2,
      explanation: "La commande 'git commit' enregistre les modifications qui ont été ajoutées à l'index (staging area) dans l'historique du dépôt local. Elle crée un nouveau point dans l'historique avec un message décrivant les modifications. Cette commande ne modifie pas le dépôt distant - pour cela, il faut utiliser 'git push'."
    },
    {
      id: 4,
      question: "Quelle est l'utilisation de la clause HAVING en SQL ?",
      options: [
        "Filtrer les résultats d'une requête avant l'agrégation des données",
        "Filtrer les résultats après l'agrégation des données",
        "Trier les résultats d'une requête",
        "Créer une nouvelle table à partir de la requête"
      ],
      correctAnswer: 1,
      explanation: "La clause HAVING est utilisée pour filtrer les résultats d'une requête SQL après que les fonctions d'agrégation (comme COUNT, SUM, AVG) ont été appliquées. Alors que WHERE filtre les lignes avant l'agrégation, HAVING filtre les groupes après l'agrégation. Par exemple: SELECT department, COUNT(*) FROM employees GROUP BY department HAVING COUNT(*) > 10;"
    },
    {
      id: 5,
      question: "En JavaScript, quelle est la méthode pour créer un tableau vide ?",
      options: [
        "var arr = []",
        "var arr = {}",
        "var arr = new Array()",
        "A et C"
      ],
      correctAnswer: 3,
      explanation: "En JavaScript, on peut créer un tableau vide de deux façons: en utilisant la notation littérale (var arr = []) ou avec le constructeur Array (var arr = new Array()). Les deux méthodes sont valides et créent un tableau vide. La première méthode est généralement préférée pour sa concision et sa lisibilité. La notation {} crée un objet, pas un tableau."
    },
    {
      id: 6,
      question: "En C++, quel est le mot-clé utilisé pour allouer dynamiquement de la mémoire ?",
      options: [
        "malloc",
        "new",
        "alloc",
        "malloc et new"
      ],
      correctAnswer: 1,
      explanation: "En C++, le mot-clé 'new' est utilisé pour allouer de la mémoire dynamiquement. Bien que 'malloc' soit disponible en C++, il provient du langage C et ne fait pas partie des fonctionnalités orientées objet de C++. 'new' appelle également les constructeurs des objets, ce que 'malloc' ne fait pas. Par exemple: int* p = new int; ou MyClass* obj = new MyClass();"
    },
    {
      id: 7,
      question: "Quel est l'avantage d'utiliser des services cloud par rapport à des infrastructures locales ?",
      options: [
        "L'absence de coûts",
        "L'impossibilité d'augmenter les capacités de stockage",
        "Le manque de sécurité des données",
        "La possibilité de ne pas avoir à gérer le matériel"
      ],
      correctAnswer: 3,
      explanation: "Un des principaux avantages du cloud computing est qu'il évite aux entreprises d'avoir à gérer leur propre infrastructure matérielle. Cela permet de réduire les coûts d'investissement initial, d'éliminer les tâches de maintenance du matériel, et de faciliter la mise à l'échelle. Les fournisseurs cloud s'occupent de la gestion, de la maintenance et de la mise à jour du matériel, permettant aux entreprises de se concentrer sur leur cœur de métier."
    },
    {
      id: 8,
      question: "Dans un algorithme de recherche binaire, quel est le critère principal pour diviser la recherche ?",
      options: [
        "La somme des éléments",
        "L'élément central de la liste triée",
        "Le dernier élément de la liste",
        "Le premier élément de la liste"
      ],
      correctAnswer: 1,
      explanation: "La recherche binaire fonctionne en comparant l'élément recherché avec l'élément central d'une liste triée. Si l'élément recherché est plus petit, la recherche continue dans la moitié inférieure; s'il est plus grand, la recherche continue dans la moitié supérieure. Ce processus se répète jusqu'à trouver l'élément ou déterminer qu'il n'existe pas. La complexité temporelle est O(log n), ce qui est très efficace pour les grandes listes."
    },
    {
      id: 9,
      question: "Quel type de CSS est utilisé pour appliquer des styles directement dans le fichier HTML ?",
      options: [
        "CSS interne",
        "CSS externe",
        "CSS inline",
        "CSS dynamique"
      ],
      correctAnswer: 2,
      explanation: "Le CSS inline est appliqué directement à un élément HTML en utilisant l'attribut 'style'. Par exemple: <p style='color: red; font-size: 16px;'>Texte</p>. Cette méthode a la priorité la plus élevée dans la cascade CSS, mais n'est pas recommandée pour les grands projets car elle mélange le contenu et la présentation, rendant la maintenance plus difficile."
    },
    {
      id: 10,
      question: "Quelle est la complexité en temps de l'algorithme de recherche linéaire dans une liste non triée ?",
      options: [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n²)"
      ],
      correctAnswer: 2,
      explanation: "La recherche linéaire (ou séquentielle) consiste à parcourir chaque élément de la liste un par un jusqu'à trouver celui recherché. Dans le pire des cas, l'élément est le dernier ou n'existe pas, nécessitant de parcourir tous les n éléments. Cela donne une complexité temporelle de O(n), où n est le nombre d'éléments dans la liste. Cette méthode est moins efficace que la recherche binaire (O(log n)) pour les grandes listes, mais ne nécessite pas que la liste soit triée."
    },
    {
      id: 11,
      question: "Quelle est la principale différence entre un conteneur Docker et une machine virtuelle (VM) ?",
      options: [
        "Les conteneurs Docker utilisent un système d'exploitation distinct, tandis que les machines virtuelles partagent le même noyau d'hôte.",
        "Les conteneurs Docker partagent le même noyau d'hôte, ce qui les rend plus légers et plus rapides à démarrer que les machines virtuelles.",
        "Les conteneurs Docker ne peuvent pas être exécutés sur des systèmes de fichiers distribués, contrairement aux machines virtuelles.",
        "Les conteneurs Docker ont une capacité illimitée de ressources, contrairement aux machines virtuelles."
      ],
      correctAnswer: 1,
      explanation: "Les conteneurs Docker partagent le noyau du système d'exploitation hôte, tandis que les machines virtuelles (VM) embarquent chacune leur propre système d'exploitation complet. Cette différence fondamentale rend les conteneurs beaucoup plus légers (quelques Mo contre plusieurs Go pour les VM), plus rapides à démarrer (secondes vs minutes), et permet une densité plus élevée sur un même serveur physique. Les conteneurs sont idéaux pour la microservices et le déploiement d'applications, tandis que les VM sont préférables lorsque des environnements complètement isolés sont nécessaires."
    },
    {
      id: 12,
      question: "Quel est l'objectif principal d'un fichier Dockerfile ?",
      options: [
        "Décrire l'ensemble des instructions pour créer une image Docker personnalisée.",
        "Exécuter une commande Docker sur un hôte distant.",
        "Gérer les réseaux et les volumes Docker pour les conteneurs.",
        "Lister les conteneurs Docker en cours d'exécution sur le système."
      ],
      correctAnswer: 0,
      explanation: "Un fichier Dockerfile est utilisé pour décrire de manière textuelle les étapes nécessaires à la création d'une image Docker, telles que l'installation de logiciels, la copie de fichiers, et l'exécution de commandes dans le conteneur. C'est essentiellement un script qui automatise le processus de création d'image, garantissant ainsi la cohérence et la reproductibilité de l'environnement. Les instructions comme FROM, RUN, COPY, et CMD définissent la configuration de l'image."
    },
    {
      id: 13,
      question: "Quel est le rôle des volumes dans Docker ?",
      options: [
        "Ils permettent de stocker des données de manière persistante, même après la suppression d'un conteneur.",
        "Ils augmentent la vitesse de déploiement des conteneurs Docker.",
        "Ils sont utilisés pour la communication réseau entre les conteneurs.",
        "Ils contiennent les configurations de sécurité des conteneurs."
      ],
      correctAnswer: 0,
      explanation: "Les volumes Docker sont des mécanismes de stockage persistant qui permettent aux données de survivre au cycle de vie d'un conteneur. Par défaut, les données stockées dans un conteneur sont perdues lorsque le conteneur est supprimé. Les volumes résolvent ce problème en stockant les données en dehors du système de fichiers du conteneur. Ils facilitent également le partage de données entre conteneurs et entre le conteneur et le système hôte."
    },
    {
      id: 14,
      question: "Quel est l'objectif principal de l'intégration continue (CI) dans une approche DevOps ?",
      options: [
        "Accélérer la vitesse de déploiement des applications en production.",
        "Tester et valider le code régulièrement pour détecter les erreurs rapidement.",
        "Garantir la sécurité des applications en production.",
        "Gérer la base de données et les configurations du système."
      ],
      correctAnswer: 1,
      explanation: "L'intégration continue (CI) est une pratique DevOps qui consiste à intégrer fréquemment les modifications de code dans un dépôt partagé, où des build et des tests automatisés sont exécutés. L'objectif principal est de détecter et résoudre les problèmes rapidement, en identifiant les bugs dès qu'ils sont introduits plutôt qu'à la fin d'un cycle de développement. Cette approche améliore la qualité du code, réduit le temps de détection des erreurs et facilite la collaboration entre développeurs."
    },
    {
      id: 15,
      question: "Qu'est-ce qu'une image Docker ?",
      options: [
        "Un conteneur Docker en cours d'exécution.",
        "Un fichier qui contient tout le nécessaire pour exécuter un conteneur Docker, y compris le code, les bibliothèques et les dépendances.",
        "Un fichier de configuration pour Docker.",
        "Un volume Docker utilisé pour stocker des données persistantes."
      ],
      correctAnswer: 1,
      explanation: "Une image Docker est un modèle en lecture seule qui contient un système de fichiers avec tout le nécessaire pour exécuter une application: code, runtime, bibliothèques, variables d'environnement et fichiers de configuration. Les images sont construites à partir d'un Dockerfile et peuvent être stockées dans un registre comme Docker Hub. Un conteneur est une instance en cours d'exécution d'une image. En résumé, l'image est le blueprint, et le conteneur est l'instance active créée à partir de ce blueprint."
    }
  ];

  const QCMQuestions = [
    {
      id: 1,
      question: "Qu'est-ce que UML ?",
      options: [
        "Un langage de programmation",
        "Une base de données",
        "Un langage de modélisation",
        "Un système d'exploitation"
      ],
      correctAnswer: 2,
      explanation: "UML (Unified Modeling Language) est un langage de modélisation graphique standard utilisé en génie logiciel pour visualiser, spécifier, construire et documenter les artefacts d'un système. Il fournit un ensemble de notations et de diagrammes pour représenter les différents aspects d'un système logiciel.",
      examples: "Par exemple, UML est utilisé pour créer des diagrammes qui représentent la structure d'un système (diagrammes de classes), son comportement (diagrammes de séquence), ses cas d'utilisation, etc.",
      usefulLinks: ["https://www.uml.org/", "https://www.omg.org/spec/UML/", "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-uml/"]
    },
    {
      id: 2,
      question: "Quel diagramme UML sert à représenter les classes et leurs relations ?",
      options: [
        "Diagramme de cas d'utilisation",
        "Diagramme de séquence",
        "Diagramme d'activités",
        "Diagramme de classes"
      ],
      correctAnswer: 3,
      explanation: "Le diagramme de classes est spécifiquement conçu pour représenter les classes d'un système, leurs attributs, leurs méthodes et les relations entre ces classes (comme l'héritage, l'association, l'agrégation, etc.). C'est l'un des diagrammes les plus utilisés en UML pour modéliser la structure statique d'un système.",
      examples: "Un exemple de diagramme de classes pourrait montrer une classe 'Client' liée à une classe 'Commande' avec une association de cardinalité '1..*', indiquant qu'un client peut passer plusieurs commandes.",
      usefulLinks: ["https://www.lucidchart.com/pages/fr/diagramme-de-classes-uml", "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-class-diagram-tutorial/"]
    },
    {
      id: 3,
      question: "Quel diagramme UML est utilisé pour représenter les interactions entre acteurs et le système ?",
      options: [
        "Diagramme de classes",
        "Diagramme de cas d'utilisation",
        "Diagramme d'activités",
        "Diagramme de séquence"
      ],
      correctAnswer: 1,
      explanation: "Le diagramme de cas d'utilisation montre les interactions entre les acteurs (utilisateurs ou systèmes externes) et le système. Il identifie qui utilise le système et quelles fonctionnalités le système doit fournir à ces utilisateurs, représentant ainsi les exigences fonctionnelles du système.",
      examples: "Par exemple, pour un système de commerce électronique, un diagramme de cas d'utilisation pourrait inclure un acteur 'Client' qui interagit avec les cas d'utilisation 'Se connecter', 'Parcourir les produits', 'Ajouter au panier' et 'Passer une commande'.",
      usefulLinks: ["https://www.lucidchart.com/pages/fr/diagramme-de-cas-dutilisation-uml", "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-use-case-diagram/"]
    },
    {
      id: 4,
      question: "Dans un diagramme de cas d'utilisation, qui représente l'utilisateur du système ?",
      options: [
        "Une classe",
        "Un acteur",
        "Une activité",
        "Une interface"
      ],
      correctAnswer: 1,
      explanation: "Dans un diagramme de cas d'utilisation, un acteur représente un rôle joué par un utilisateur humain, un système externe ou une entité qui interagit avec le système. Les acteurs sont généralement représentés par des stick figures (personnages bâton) et sont placés à l'extérieur des limites du système.",
      examples: "Dans un système bancaire, les acteurs pourraient être 'Client', 'Conseiller bancaire', 'Système de paiement externe', 'Administrateur', etc.",
      usefulLinks: ["https://www.uml-diagrams.org/use-case-actor.html", "https://www.tutorialspoint.com/uml/uml_use_case_diagram.htm"]
    },
    {
      id: 5,
      question: "Quel diagramme UML est principalement utilisé pour modéliser la structure statique d'un système, y compris ses classes, attributs, opérations et relations ?",
      options: [
        "Diagramme de cas d'utilisation",
        "Diagramme de séquence",
        "Diagramme de classes",
        "Diagramme d'états-transitions"
      ],
      correctAnswer: 2,
      explanation: "Le diagramme de classes est l'outil principal pour représenter la structure statique d'un système orienté objet. Il montre les classes du système, leurs attributs, leurs méthodes et les relations entre les classes, fournissant ainsi une vue structurelle du système qui est indépendante du temps.",
      examples: "Un exemple serait un diagramme de classes pour une bibliothèque, montrant des classes comme 'Livre', 'Auteur', 'Membre', 'Prêt', avec leurs attributs (titre, nom, date d'emprunt) et leurs méthodes (emprunter, retourner, etc.).",
      usefulLinks: ["https://www.uml-diagrams.org/class-diagrams.html", "https://developer.ibm.com/articles/the-class-diagram/"]
    },
    {
      id: 6,
      question: "Dans un diagramme de classes UML, que représente une association avec une étoile (*) ?",
      options: [
        "Une relation obligatoire",
        "Une cardinalité de 1",
        "Une cardinalité de 0..1",
        "Une cardinalité multiple"
      ],
      correctAnswer: 3,
      explanation: "Dans un diagramme de classes UML, l'astérisque (*) indique une cardinalité multiple, ce qui signifie 'zéro ou plusieurs' ou 'plusieurs'. Par exemple, dans une relation entre 'Client' et 'Commande', un client peut avoir plusieurs commandes, ce qui serait indiqué par une étoile du côté 'Commande'.",
      examples: "Dans un système de gestion universitaire, une classe 'Étudiant' pourrait être liée à une classe 'Cours' avec une cardinalité '*' des deux côtés, indiquant qu'un étudiant peut suivre plusieurs cours et qu'un cours peut être suivi par plusieurs étudiants.",
      usefulLinks: ["https://www.uml-diagrams.org/association.html", "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-aggregation-vs-composition/"]
    },
    {
      id: 7,
      question: "Lequel des éléments suivants n'est pas un diagramme structurel en UML ?",
      options: [
        "Diagramme de classes",
        "Diagramme de composants",
        "Diagramme d'états-transitions",
        "Diagramme d'objets"
      ],
      correctAnswer: 2,
      explanation: "Le diagramme d'états-transitions est un diagramme comportemental, pas structurel. Il montre les différents états qu'un objet peut prendre pendant son cycle de vie et les transitions entre ces états. Les diagrammes structurels (comme les diagrammes de classes, d'objets et de composants) représentent l'organisation statique du système.",
      examples: "Un exemple de diagramme d'états-transitions pourrait représenter les états d'une commande en ligne : 'créée', 'payée', 'expédiée', 'livrée', 'retournée', avec les transitions possibles entre ces états.",
      usefulLinks: ["https://www.uml-diagrams.org/state-machine-diagrams.html", "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-state-machine-diagram/"]
    },
    {
      id: 8,
      question: "Quelle est la bonne représentation pour une association d'héritage dans un diagramme de classes UML ?",
      options: [
        "Une flèche pleine avec un losange",
        "Une flèche en ligne pointillée",
        "Une flèche avec un triangle blanc",
        "Une ligne simple sans flèche"
      ],
      correctAnswer: 2,
      explanation: "L'héritage (ou généralisation) en UML est représenté par une flèche avec un triangle blanc pointant vers la classe parente. Cette notation indique qu'une classe enfant hérite des attributs et des comportements de sa classe parente, tout en pouvant ajouter ses propres caractéristiques spécifiques.",
      examples: "Dans un système de gestion de personnel, on pourrait avoir une classe 'Employé' comme classe parente, et des classes 'Manager', 'Technicien', 'Assistant' qui en héritent, chacune avec une flèche d'héritage pointant vers 'Employé'.",
      usefulLinks: ["https://www.uml-diagrams.org/generalization.html", "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-class-diagram-tutorial/"]
    },
    {
      id: 9,
      question: "Que permet de représenter un diagramme de séquence ?",
      options: [
        "La hiérarchie des classes",
        "Le déroulement des opérations dans le temps",
        "La base de données du système",
        "La structure d'un fichier"
      ],
      correctAnswer: 1,
      explanation: "Un diagramme de séquence montre comment les objets interagissent entre eux et dans quel ordre temporel. Il représente la séquence des messages échangés entre les objets pour accomplir une fonctionnalité, mettant l'accent sur l'aspect chronologique des interactions.",
      examples: "Par exemple, pour une fonction 'Passer une commande', un diagramme de séquence montrerait les interactions entre les objets 'Interface utilisateur', 'Contrôleur de commande', 'Panier', 'Base de données' et 'Système de paiement', avec des messages comme 'vérifierStock()', 'calculerTotal()', 'traiterPaiement()', etc.",
      usefulLinks: ["https://www.lucidchart.com/pages/fr/diagramme-de-sequence-uml", "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-sequence-diagram/"]
    },
    {
      id: 10,
      question: "Quel élément UML est utilisé pour représenter une méthode dans une classe ?",
      options: [
        "Un rectangle avec une ligne",
        "Une flèche",
        "Un nom suivi de parenthèses dans une classe",
        "Un losange noir"
      ],
      correctAnswer: 2,
      explanation: "Dans un diagramme de classes UML, une méthode (ou opération) est représentée par son nom suivi de parenthèses, qui peuvent contenir les paramètres de la méthode. Les méthodes sont généralement listées dans la section inférieure du rectangle représentant la classe, après les attributs.",
      examples: "Dans une classe 'Compte', on pourrait avoir des méthodes comme 'deposer(montant: double)', 'retirer(montant: double)', 'calculerInteret(): double'.",
      usefulLinks: ["https://www.uml-diagrams.org/operation.html", "https://www.tutorialspoint.com/uml/uml_class_diagram.htm"]
    },
    {
      id: 11,
      question: "Dans UML, que signifie l'acronyme « UML » ?",
      options: [
        "Universal Modeling Language",
        "Unified Management Language",
        "Unified Modeling Language",
        "Ultimate Modeling Logic"
      ],
      correctAnswer: 2,
      explanation: "UML signifie 'Unified Modeling Language', ou 'Langage de Modélisation Unifié' en français. C'est un langage graphique normalisé utilisé pour spécifier, visualiser, construire et documenter les artefacts d'un système logiciel.",
      examples: "Par exemple, UML est utilisé dans le développement logiciel pour créer des diagrammes de classes, de séquence, d'activités, etc., qui aident à comprendre et à documenter les systèmes.",
      usefulLinks: ["https://www.uml.org/", "https://www.omg.org/spec/UML/", "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-uml/"]
    },
    {
      id: 12,
      question: "Quel diagramme UML permet de représenter le comportement d'un système sous forme de flux d'activités ?",
      options: [
        "Diagramme de classes",
        "Diagramme d'activités",
        "Diagramme d'états-transitions",
        "Diagramme de cas d'utilisation"
      ],
      correctAnswer: 1,
      explanation: "Le diagramme d'activités est utilisé pour modéliser le flux de contrôle d'une activité à une autre, représentant ainsi le comportement d'un système comme une série d'étapes ou d'activités. Il est particulièrement utile pour modéliser les processus métier, les algorithmes et les workflows.",
      examples: "Un diagramme d'activités pourrait par exemple montrer les étapes d'un processus de commande en ligne : vérification du panier, saisie des informations de livraison, paiement, confirmation, etc.",
      usefulLinks: ["https://www.uml-diagrams.org/activity-diagrams.html", "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-activity-diagram/"]
    },
    {
      id: 13,
      question: "Quel symbole est utilisé pour représenter un cas d'utilisation (use case) ?",
      options: [
        "Un rectangle",
        "Un cercle",
        "Un losange",
        "Un ovale"
      ],
      correctAnswer: 3,
      explanation: "Dans UML, un cas d'utilisation est représenté par un ovale horizontal contenant le nom du cas d'utilisation. Cette notation permet de distinguer visuellement les cas d'utilisation des acteurs et autres éléments du diagramme.",
      examples: "Dans un diagramme de cas d'utilisation pour un système bancaire, des ovales pourraient représenter des fonctionnalités comme 'Retirer de l'argent', 'Consulter le solde' ou 'Transférer des fonds'.",
      usefulLinks: ["https://www.uml-diagrams.org/use-case-diagrams.html", "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-use-case-diagram/"]
    },
    {
      id: 14,
      question: "Dans un diagramme de classes, comment appelle-t-on une relation où une classe \"fait partie de\" une autre ?",
      options: [
        "Héritage",
        "Association",
        "Composition",
        "Dépendance"
      ],
      correctAnswer: 2,
      explanation: "La composition est une forme d'agrégation forte où les parties (composants) appartiennent à un tout (composite) et ne peuvent pas exister indépendamment. Si le composite est détruit, ses composants le sont également. En UML, la composition est représentée par une ligne avec un losange noir du côté de la classe composite.",
      examples: "Une relation de composition existe par exemple entre une 'Maison' et ses 'Pièces'. Si la maison est détruite, les pièces n'existent plus en tant que telles.",
      usefulLinks: ["https://www.uml-diagrams.org/composition.html", "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-aggregation-vs-composition/"]
    },
    {
      id: 15,
      question: "Quelle relation exprime une dépendance entre deux éléments UML ?",
      options: [
        "Une flèche pleine",
        "Une flèche pointillée",
        "Une ligne sans flèche",
        "Un losange"
      ],
      correctAnswer: 1,
      explanation: "Une dépendance en UML est représentée par une flèche pointillée allant de l'élément dépendant vers l'élément dont il dépend. Cette relation indique qu'un changement dans l'élément cible peut affecter l'élément source, mais pas nécessairement l'inverse.",
      examples: "Par exemple, une classe 'RapportClient' pourrait dépendre d'une classe 'Client' car elle utilise certaines de ses données pour générer le rapport, sans pour autant que la classe Client ait connaissance de la classe RapportClient.",
      usefulLinks: ["https://www.uml-diagrams.org/dependency.html", "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-class-diagram-tutorial/"]
    },
    {
      id: 16,
      question: "Le diagramme de composants UML sert à représenter ___________",
      options: [
        "L'architecture physique du système",
        "La navigation entre les pages d'un site",
        "Les entités de la base de données",
        "Le déroulement d'un algorithme"
      ],
      correctAnswer: 0,
      explanation: "Le diagramme de composants UML est utilisé pour modéliser l'architecture physique d'un système en termes de composants logiciels et leurs dépendances. Il montre comment les différents composants s'assemblent pour former le système complet, mettant en évidence les interfaces fournies et requises.",
      examples: "Un diagramme de composants pourrait montrer comment un système est constitué de composants comme 'Interface utilisateur', 'Moteur de règles métier', 'Couche d'accès aux données', et comment ces composants communiquent entre eux.",
      usefulLinks: ["https://www.uml-diagrams.org/component-diagrams.html", "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-component-diagram/"]
    },
    {
      id: 17,
      question: "Quel type de relation UML représente une « utilisation » temporaire d'un objet par une méthode ?",
      options: [
        "Association",
        "Dépendance",
        "Agrégation",
        "Composition"
      ],
      correctAnswer: 1,
      explanation: "Une dépendance en UML représente une relation d'utilisation temporaire, où une classe utilise une autre classe sans la stocker comme attribut. Par exemple, lorsqu'une classe utilise une autre comme paramètre de méthode, variable locale, ou pour appeler une méthode statique. Cette relation est plus faible qu'une association.",
      examples: "Une classe 'CalculateurImpôts' pourrait avoir une dépendance vers une classe 'TauxImposition' si elle utilise des méthodes de cette classe pour effectuer des calculs, sans nécessairement maintenir une référence permanente à un objet TauxImposition.",
      usefulLinks: ["https://www.uml-diagrams.org/dependency.html", "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-class-diagram-tutorial/"]
    },
    {
      id: 18,
      question: "Quel est le rôle d'un diagramme de séquence ?",
      options: [
        "Montrer les classes et leurs relations",
        "Montrer la chronologie des interactions entre objets",
        "Décrire les rôles des utilisateurs",
        "Définir les exigences fonctionnelles"
      ],
      correctAnswer: 1,
      explanation: "Le diagramme de séquence UML a pour rôle principal de montrer la chronologie des interactions entre objets, illustrant comment les messages sont échangés entre les objets au fil du temps pour réaliser une fonctionnalité. L'axe vertical représente le temps, et l'axe horizontal montre les différents objets participant à l'interaction.",
      examples: "Un diagramme de séquence pourrait montrer comment un utilisateur interagit avec un système lors d'une opération de 'Paiement en ligne', illustrant les messages échangés entre les objets 'InterfaceUtilisateur', 'GestionnairePaiement', 'ServiceBancaire', etc.",
      usefulLinks: ["https://www.uml-diagrams.org/sequence-diagrams.html", "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-sequence-diagram/"]
    },
    {
      id: 19,
      question: "Le diagramme d'états (ou états-transitions) permet de modéliser :",
      options: [
        "Les relations entre classes",
        "L'ordre d'exécution des méthodes",
        "Le stockage des données",
        "Les différents états possibles d'un objet"
      ],
      correctAnswer: 3,
      explanation: "Le diagramme d'états-transitions UML permet de modéliser les différents états possibles d'un objet durant son cycle de vie, ainsi que les transitions entre ces états. Il est particulièrement utile pour représenter des objets dont le comportement change significativement selon leur état interne.",
      examples: "Par exemple, pour modéliser une 'Commande', les états pourraient être 'Créée', 'Validée', 'En préparation', 'Expédiée', 'Livrée', 'Retournée', avec les transitions possibles entre ces états et les événements qui les déclenchent.",
      usefulLinks: ["https://www.uml-diagrams.org/state-machine-diagrams.html", "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-state-machine-diagram/"]
    },
    {
      id: 20,
      question: "Dans un diagramme de classes, une agrégation est représentée par _________",
      options: [
        "Un triangle blanc",
        "Une flèche pointillée",
        "Un losange blanc",
        "Un losange noir"
      ],
      correctAnswer: 2,
      explanation: "Dans un diagramme de classes UML, une agrégation est représentée par une ligne avec un losange blanc du côté de la classe qui représente le 'tout'. L'agrégation exprime une relation de type 'contient' ou 'est composé de', mais où les parties peuvent exister indépendamment du tout.",
      examples: "Une relation d'agrégation pourrait exister entre une classe 'Équipe' et une classe 'Joueur'. Une équipe est composée de joueurs, mais si l'équipe est dissoute, les joueurs continuent d'exister.",
      usefulLinks: ["https://www.uml-diagrams.org/aggregation.html", "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-aggregation-vs-composition/"]
    },
    {
      id: 21,
      question: "Le diagramme de communication UML sert à représenter :",
      options: [
        "Les flux de données entre bases",
        "Les messages échangés entre objets (avec leur structure statique)",
        "La structure des classes",
        "Les transitions d'état"
      ],
      correctAnswer: 1,
      explanation: "Le diagramme de communication (anciennement appelé diagramme de collaboration) montre les messages échangés entre objets, en mettant l'accent sur la structure statique des objets et leurs relations, plutôt que sur l'ordre chronologique. Les messages sont numérotés pour indiquer leur séquence.",
      examples: "Un diagramme de communication pourrait montrer comment un contrôleur interagit avec un modèle et une vue dans une architecture MVC, en montrant les objets, leurs liens et les messages qu'ils s'échangent.",
      usefulLinks: ["https://www.uml-diagrams.org/communication-diagrams.html", "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-communication-diagram/"]
    },
    {
      id: 22,
      question: "Lequel de ces diagrammes UML est structurel (et non comportemental) ?",
      options: [
        "Diagramme de séquence",
        "Diagramme de cas d'utilisation",
        "Diagramme d'activités",
        "Diagramme de classes"
      ],
      correctAnswer: 3,
      explanation: "Le diagramme de classes est un diagramme structurel qui montre la structure statique d'un système, y compris les classes, leurs attributs, leurs méthodes et les relations entre elles. Les diagrammes structurels représentent les éléments qui composent un système, tandis que les diagrammes comportementaux (comme les diagrammes de séquence, de cas d'utilisation et d'activités) montrent comment ces éléments interagissent et se comportent.",
      examples: "Autres exemples de diagrammes structurels incluent les diagrammes d'objets, de composants, de déploiement et de paquetages.",
      usefulLinks: ["https://www.uml-diagrams.org/uml-diagrams.html", "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-class-diagram/"]
    },
    {
      id: 23,
      question: "Dans UML, comment nomme-t-on une opération fournie par une interface ?",
      options: [
        "Une méthode virtuelle",
        "Un service",
        "Une responsabilité",
        "Une opération abstraite"
      ],
      correctAnswer: 1,
      explanation: "Dans le contexte UML, les opérations fournies par une interface sont souvent appelées 'services'. Une interface définit un contrat que les classes qui l'implémentent doivent respecter, en fournissant les services (opérations) spécifiés par l'interface. Ces opérations sont par nature abstraites, car l'interface ne fournit que la signature sans implémentation.",
      examples: "Par exemple, une interface 'Payable' pourrait définir un service 'calculerMontant()' que toutes les classes implémentant cette interface devront fournir.",
      usefulLinks: ["https://www.uml-diagrams.org/interface.html", "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-class-diagram-tutorial/"]
    },
    {
      id: 24,
      question: "Quelle est la bonne représentation d'une interface dans un diagramme de classes ?",
      options: [
        "Un rectangle avec le mot-clé <<interface>>",
        "Un cercle avec un nom dedans",
        "Une classe abstraite en italique",
        "Une flèche pointant vers une classe concrète"
      ],
      correctAnswer: 0,
      explanation: "En UML, une interface peut être représentée de deux façons : soit par un rectangle similaire à une classe mais avec le stéréotype <<interface>> au-dessus du nom, soit par un cercle (appelé notation 'lollipop'). La représentation en rectangle est plus courante lorsqu'on veut montrer les opérations de l'interface.",
      examples: "Par exemple, une interface 'Comparable' pourrait être représentée par un rectangle avec <<interface>> suivi du nom 'Comparable' et de l'opération 'compareTo(Object o): int'.",
      usefulLinks: ["https://www.uml-diagrams.org/interface.html", "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-interface-notation/"]
    },
    {
      id: 25,
      question: "Une classe abstraite est généralement représentée comment ?",
      options: [
        "Son nom est en gras",
        "Son nom est souligné",
        "Son nom est en italique",
        "Elle a une flèche noire"
      ],
      correctAnswer: 2,
      explanation: "Dans un diagramme de classes UML, une classe abstraite est généralement représentée avec son nom en italique. Cela permet de la distinguer visuellement des classes concrètes. Les méthodes abstraites dans la classe peuvent également être notées en italique.",
      examples: "Par exemple, une classe abstraite 'Forme' pourrait être représentée avec son nom en italique, et contenir des méthodes abstraites comme 'calculerAire()' et 'calculerPérimètre()', également en italique.",
      usefulLinks: ["https://www.uml-diagrams.org/class.html", "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-class-diagram-tutorial/"]
    },
    {
      id: 26,
      question: "Dans un diagramme de classes, que signifie une flèche avec un losange noir ?",
      options: [
        "Une dépendance",
        "Une composition",
        "Une agrégation",
        "Une association simple"
      ],
      correctAnswer: 1,
      explanation: "Dans un diagramme de classes UML, une flèche avec un losange noir représente une relation de composition, qui est une forme forte d'agrégation. La composition indique que les parties (composants) appartiennent exclusivement au tout (composite) et ont généralement la même durée de vie. Si le composite est détruit, ses composants le sont également.",
      examples: "Par exemple, une relation de composition existe entre une 'Voiture' et son 'Moteur'. Le moteur fait partie intégrante de la voiture et n'existe pas indépendamment d'elle (dans ce contexte).",
      usefulLinks: ["https://www.uml-diagrams.org/composition.html", "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-aggregation-vs-composition/"]
    },
    {
      id: 27,
      question: "Dans UML, le diagramme de séquence montre surtout :",
      options: [
        "Les relations de dépendance",
        "Les transitions d'un objet",
        "L'ordre temporel des interactions",
        "La structure logique des classes"
      ],
      correctAnswer: 2,
      explanation: "Le diagramme de séquence UML montre principalement l'ordre temporel des interactions entre les objets. L'axe vertical représente le temps qui s'écoule de haut en bas, et l'axe horizontal représente les différents objets ou participants. Les messages échangés entre les objets sont représentés par des flèches horizontales.",
      examples: "Un diagramme de séquence pour un 'Retrait bancaire' montrerait la séquence chronologique des messages entre les objets 'Client', 'Guichet', 'Compte' et 'Journal des transactions'.",
      usefulLinks: ["https://www.uml-diagrams.org/sequence-diagrams.html", "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-sequence-diagram/"]
    },
    {
      id: 28,
      question: "Le diagramme de cas d'utilisation est utile pour __________",
      options: [
        "Détailler la base de données",
        "Définir les rôles utilisateurs et leurs interactions avec le système",
        "Dessiner la structure logique d'une API",
        "Spécifier les composants logiciels"
      ],
      correctAnswer: 1,
      explanation: "Le diagramme de cas d'utilisation est particulièrement utile pour définir les rôles utilisateurs (acteurs) et leurs interactions avec le système. Il permet de capturer les exigences fonctionnelles d'un système du point de vue de l'utilisateur, en identifiant qui utilise le système et ce que le système doit faire pour ces utilisateurs.",
      examples: "Un diagramme de cas d'utilisation pour un système de bibliothèque pourrait montrer des acteurs comme 'Membre', 'Bibliothécaire', 'Administrateur' et leurs interactions avec des cas d'utilisation comme 'Emprunter un livre', 'Rendre un livre', 'Gérer les membres', etc.",
      usefulLinks: ["https://www.uml-diagrams.org/use-case-diagrams.html", "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-use-case-diagram/"]
    },
    {
      id: 29,
      question: "Lequel de ces diagrammes UML permet de montrer l'état interne d'un objet au cours du temps ?",
      options: [
        "Diagramme d'activités",
        "Diagramme de classes",
        "Diagramme d'états",
        "Diagramme de communication"
      ],
      correctAnswer: 2,
      explanation: "Le diagramme d'états (ou diagramme d'états-transitions) est spécifiquement conçu pour montrer l'état interne d'un objet au cours du temps. Il représente les différents états qu'un objet peut prendre pendant son cycle de vie, les transitions entre ces états, et les événements qui déclenchent ces transitions.",
      examples: "Un diagramme d'états pour un objet 'Document' pourrait montrer les états 'Brouillon', 'En révision', 'Approuvé', 'Publié', 'Archivé' et les transitions possibles entre ces états.",
      usefulLinks: ["https://www.uml-diagrams.org/state-machine-diagrams.html", "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-state-machine-diagram/"]
    },
    {
      id: 30,
      question: "Quelle relation UML indique qu'une classe « utilise » une autre classe, par exemple comme paramètre ou dans une méthode ?",
      options: [
        "Association",
        "Dépendance",
        "Héritage",
        "Composition"
      ],
      correctAnswer: 1,
      explanation: "Une relation de dépendance en UML indique qu'une classe 'utilise' une autre classe de manière temporaire, sans maintenir une référence permanente à cette classe. Cela se produit par exemple lorsqu'une classe utilise une autre classe comme paramètre de méthode, comme variable locale, ou lorsqu'elle appelle une méthode statique de cette classe.",
      examples: "Par exemple, une classe 'RapportVentes' pourrait dépendre d'une classe 'FormatteurPDF' si elle utilise cette dernière pour formater ses données en PDF, sans nécessairement maintenir une référence à un objet FormatteurPDF comme attribut.",
      usefulLinks: ["https://www.uml-diagrams.org/dependency.html", "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-class-diagram-tutorial/"]
    }
  ];
  
//   export default {UMLQuestions};
  
  export default QCMQuestions;