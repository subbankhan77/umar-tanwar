export type Media =
  | { type: "wide"; src: string; alt: string }
  | { type: "phones"; shots: { src: string; alt: string }[] };

export const categories = ["Mobile", "Full stack & backend", "Web & desktop", "AI & machine learning", "Computer science"] as const;
export type Category = (typeof categories)[number];

export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  category: Category;
  kind: string;
  summary: string;
  problem: string;
  role: string;
  flow: string[];
  architecture: string;
  outcome: string;
  stack: string[];
  media?: Media;
  repo?: string;
  live?: ProjectLink;
  appStore?: ProjectLink;
  related?: ProjectLink[];
  note?: string;
};

const gh = (repo: string) => `https://github.com/UmarTanwar3527/${repo}`;

export const projects: Project[] = [
  {
    slug: "archon-golf",
    title: "Archon Golf",
    category: "Mobile",
    kind: "Live on Google Play",
    summary:
      "A home for golf clubs and tournaments, with live scorecards and leaderboards, Pace of Play, club chat, tournament registration and a USGA rules assistant.",
    problem:
      "Club tournaments often run across group texts, spreadsheets and scattered scorecards. Members, managers, tournament managers and players need everything in one place while play is happening.",
    role:
      "Flutter Developer, working on the app end to end. I build tournament workflows, integrate and debug REST APIs, implement golf-specific scoring logic, diagnose production issues, and collaborate on backend and API changes.",
    flow: ["Flutter app", "REST + WebSockets", "Backend services", "Tournament data"],
    architecture:
      "The Flutter client uses REST APIs for tournament data, score entry, handicaps, leaderboards and player management, and WebSockets for real-time features. Chromecast and AirPlay support extends the app to other screens.",
    outcome:
      "Live on Google Play for private clubs and real tournaments, and still evolving as tournament and club-management requirements change.",
    stack: ["Flutter", "Dart", "REST APIs", "WebSockets", "Chromecast", "AirPlay"],
    media: {
      type: "phones",
      shots: [
        { src: "/projects/archon/leaderboard.jpg", alt: "Archon Golf tournament leaderboard with player rankings" },
        { src: "/projects/archon/scorecard.jpg", alt: "Archon Golf live scorecard showing scores by hole" },
        { src: "/projects/archon/pace.jpg", alt: "Archon Golf Pace of Play map of groups on the course" },
        { src: "/projects/archon/register.jpg", alt: "Archon Golf list of club tournaments open for registration" },
      ],
    },
    live: { label: "View on Google Play", href: "https://play.google.com/store/apps/details?id=com.altus.golf" },
    note: "The source code is private.",
  },
  {
    slug: "rove",
    title: "Rove",
    category: "Mobile",
    kind: "Live on Google Play",
    summary:
      "A shared mobility app for finding nearby e-scooters and e-bikes on a map, scanning a QR code to unlock one, and paying by the minute.",
    problem:
      "Short city trips shouldn't require owning a vehicle or finding parking. Riders need to find a nearby e-scooter or e-bike, unlock it and start moving within seconds.",
    role: "Flutter Developer, working on the app end to end across the rider experience, from finding a vehicle on the map to unlocking it and riding.",
    flow: ["Flutter app", "Live vehicle map", "QR unlock", "Smart lock"],
    architecture:
      "Riders see nearby vehicles on a live map, check the unlock fee, rate and battery level, then scan a QR code to start. The app also includes real-time tracking, in-app support, riding guides and a choice of English or Arabic.",
    outcome: "Published on Google Play by Rove E-Scooter and available to riders today.",
    stack: ["Flutter", "Dart", "GPS", "Real-time tracking", "QR scanning", "Smart locks", "English + Arabic"],
    media: {
      type: "phones",
      shots: [
        { src: "/projects/rove/map.jpg", alt: "Rove map showing nearby parking points and a Scan to Ride button" },
        { src: "/projects/rove/ride.jpg", alt: "Rove vehicle details with unlock fee, rate and battery level" },
        { src: "/projects/rove/scan.jpg", alt: "Rove QR code scanner used to unlock a vehicle" },
        { src: "/projects/rove/welcome.jpg", alt: "Rove welcome screen with English and Arabic language options" },
      ],
    },
    live: { label: "View on Google Play", href: "https://play.google.com/store/apps/details?id=com.rove.escooter" },
    note: "The source code is private.",
  },
  {
    slug: "xtrafyl-customer",
    title: "Xtrafyl",
    category: "Mobile",
    kind: "Live on Google Play + App Store",
    summary:
      "An on-demand car care app for booking towing, fuel delivery, EV charging, jump starts, tire repair and car washes from nearby providers.",
    problem:
      "A dead battery or empty tank can happen anywhere. Vehicle owners need to request help in a few taps and know that nearby providers have received it.",
    role: "I developed this customer app.",
    flow: ["Choose service", "Vehicle + location", "Nearby providers", "Live tracking"],
    architecture:
      "Customers pick a service, add their vehicle and location, and send a request to multiple verified providers in the area. Bookings then show their status, driver details and progress on a map.",
    outcome: "Published by Xtrafyl LLC on both Google Play and the App Store.",
    stack: ["Android", "iOS", "Maps", "Real-time status", "Service booking"],
    media: {
      type: "phones",
      shots: [
        { src: "/projects/xtrafyl/home.jpg", alt: "Xtrafyl home screen with offers, saved vehicles and popular categories" },
        { src: "/projects/xtrafyl/services.jpg", alt: "Xtrafyl services including car wash, EV charging and towing" },
        { src: "/projects/xtrafyl/tracking.jpg", alt: "Xtrafyl booking details with a map and assigned driver" },
        { src: "/projects/xtrafyl/bookings.jpg", alt: "Xtrafyl list of current bookings with their status" },
      ],
    },
    live: { label: "View on Google Play", href: "https://play.google.com/store/apps/details?id=com.xtrafylcustomer" },
    appStore: { label: "View on App Store", href: "https://apps.apple.com/us/app/xtrafyl/id6757584838" },
    note: "The source code is private.",
  },
  {
    slug: "xtrafyl-driver",
    title: "Xtrafyl Driver",
    category: "Mobile",
    kind: "Live on Google Play + App Store",
    summary:
      "The work app for drivers on the Xtrafyl platform, covering assigned jobs, navigation to the customer and step-by-step job updates.",
    problem:
      "Drivers need a focused tool for the job in front of them: what was assigned, where to go, and how to keep the customer and provider updated.",
    role: "I developed this driver app.",
    flow: ["Assigned job", "Navigate", "Job session", "Status updates"],
    architecture:
      "Providers add drivers to their company account, and drivers sign in with their registered email. The app lists assigned jobs, navigates to the customer, runs a start and stop job session, and updates status at each step.",
    outcome: "Published by Xtrafyl LLC on both Google Play and the App Store, as the driver side of the Xtrafyl platform.",
    stack: ["Android", "iOS", "Maps & Navigation", "Job workflows", "Real-time status"],
    media: {
      type: "phones",
      shots: [
        { src: "/projects/xtrafyl-driver/requests.jpg", alt: "Xtrafyl Driver job requests with Start Job and Accept Job buttons" },
        { src: "/projects/xtrafyl-driver/details.jpg", alt: "Xtrafyl Driver job details with progress steps and customer details" },
        { src: "/projects/xtrafyl-driver/navigate.jpg", alt: "Xtrafyl Driver map navigating to the customer" },
        { src: "/projects/xtrafyl-driver/home.jpg", alt: "Xtrafyl Driver home screen showing provider and status" },
      ],
    },
    live: { label: "View on Google Play", href: "https://play.google.com/store/apps/details?id=com.xtrafyldriver" },
    appStore: { label: "View on App Store", href: "https://apps.apple.com/us/app/xtrafyl-driver/id6757585425" },
    note: "The source code is private.",
  },
  {
    slug: "realtime-chat",
    title: "Realtime Chat",
    category: "Full stack & backend",
    kind: "Mobile + backend",
    summary:
      "Chat rooms with email and password sign-in, instant messages across devices, and message history stored in Postgres.",
    problem:
      "Chat only feels right when messages show up instantly on every device, without a refresh, and are still there the next time someone opens the app.",
    role: "Solo project. I built the Flutter app, the state management and the Supabase integration.",
    flow: ["Flutter app", "Cubits", "Supabase Realtime", "Postgres"],
    architecture:
      "Separate cubits manage profiles, rooms and chat. Each chat screen subscribes to a Supabase stream filtered by room. New messages appear immediately on the sender's screen while the insert runs, and rooms are created through a Postgres function.",
    outcome: "A working app with registration, room creation and live messaging. Screenshots and source code are on GitHub.",
    stack: ["Flutter", "Supabase Auth", "Supabase Realtime", "Postgres", "Bloc"],
    media: {
      type: "phones",
      shots: [
        { src: "/projects/chat/1.jpg", alt: "Rooms screen showing a conversation list" },
        { src: "/projects/chat/3.jpg", alt: "Registration screen with email, password and username fields" },
      ],
    },
    repo: gh("realtime_chat_flutterapp"),
  },
  {
    slug: "sorting-visualizer",
    title: "Sorting Visualizer",
    category: "Web & desktop",
    kind: "Web app",
    summary: "An interactive tool that animates Bubble, Selection, Insertion, Merge and Quick Sort step by step.",
    problem: "Sorting algorithms are hard to understand from code alone, because you can't see how the data moves.",
    role: "Solo project. I designed and built the app, implemented the algorithms and deployed it.",
    flow: ["Algorithm", "Step updates", "Flutter state", "Animated bars"],
    architecture:
      "The sorting algorithms live in their own module, separate from the UI. As each one runs, it updates the array, and the Flutter screen redraws the bars so every step is visible.",
    outcome: "Live on Netlify, where anyone can pick an algorithm, generate a new array and watch it sort.",
    stack: ["Flutter Web", "Dart", "Algorithms", "Netlify"],
    media: { type: "wide", src: "/projects/sorting.jpg", alt: "Sorting Visualizer showing an unsorted array as purple bars" },
    repo: gh("sorting_visualizer"),
    live: { label: "Live demo", href: "https://umarsortingvisualizer.netlify.app/" },
  },
  {
    slug: "pipeline-api",
    title: "Pipeline API",
    category: "Full stack & backend",
    kind: "Backend",
    summary: "A service that takes a graph of pipeline nodes and edges, then checks that it can run without cycles.",
    problem: "A pipeline of connected steps can only run in order if no step depends on itself, directly or indirectly.",
    role: "I built the backend service: the API, the request models and the validation algorithm.",
    flow: ["JSON graph", "FastAPI", "Pydantic", "Kahn's algorithm"],
    architecture:
      "A POST endpoint validates incoming nodes and edges with Pydantic, builds an adjacency list and in-degree counts, then runs Kahn's algorithm. If every node gets visited, the graph is a valid DAG.",
    outcome: "The API returns the node count, the edge count and whether the pipeline is a valid DAG.",
    stack: ["Python", "FastAPI", "Pydantic", "Uvicorn"],
    repo: gh("freelance-VectorShift"),
  },
  {
    slug: "chatgpt-to-docs",
    title: "ChatGPT to Docs",
    category: "Full stack & backend",
    kind: "Automation",
    summary: "An automation that sends a CSV of questions to the OpenAI API and saves every answer into a formatted Word document.",
    problem: "Asking a long list of questions by hand, then copying each answer into a document, is slow and repetitive.",
    role: "Solo project. I wrote the automation script, the OpenAI integration and the document output.",
    flow: ["questions.csv", "OpenAI API", "Python script", "Word document"],
    architecture:
      "A Python class loads categorized questions from a CSV file, sends each one to the OpenAI API with a short delay between requests, and writes the questions and responses to a .docx file with python-docx.",
    outcome: "A repeatable batch workflow that turns a question list into one finished document.",
    stack: ["Python", "OpenAI API", "python-docx", "Flask"],
    repo: gh("Storing-ChatGPT-Responce-In-Docs-File-with-Question-"),
  },
  {
    slug: "django-site",
    title: "Django Site",
    category: "Full stack & backend",
    kind: "Web app",
    summary: "A server-rendered site with user sign-up and a contact form that saves submissions to a database.",
    problem: "A business site needs to capture enquiries somewhere the owner can actually review them.",
    role: "Solo project. I built the views, the data model, the templates and the deployment configuration.",
    flow: ["HTML form", "Django view", "Contact model", "SQLite + admin"],
    architecture:
      "Django views handle each page and form. A Contact model stores submissions in SQLite and is registered in Django admin for review. Sign-up uses Django's built-in User model.",
    outcome: "A complete server-rendered app with source code on GitHub. The original free hosting plan has since ended.",
    stack: ["Python", "Django", "SQLite", "JavaScript"],
    repo: gh("django-contactus-project"),
  },
  {
    slug: "secure-shield-vpn",
    title: "Secure Shield VPN",
    category: "Mobile",
    kind: "Mobile app",
    summary: "A VPN app that lists free public servers by country, connects over OpenVPN, and shows connection status and IP details.",
    problem: "People need a simple way to pick a VPN server and connect, without signing up or configuring anything by hand.",
    role: "I built the Flutter app, including the server list, connection screens and local caching.",
    flow: ["VPN Gate API", "Provider", "Platform channels", "OpenVPN"],
    architecture:
      "The app fetches and parses a CSV server list from VPN Gate. Provider manages app state, Hive caches data locally, and Flutter method and event channels start the native VPN connection and stream its status.",
    outcome: "A working connection flow with country selection, status updates and an IP address check.",
    stack: ["Flutter", "Provider", "Hive", "OpenVPN", "Platform Channels"],
    repo: gh("Secure_Shield_VPN"),
  },
  {
    slug: "wallpaper-app",
    title: "Wallpaper App",
    category: "Mobile",
    kind: "Mobile app",
    summary: "A wallpaper browser with search and a staggered image grid, plus one-tap setting for the home or lock screen.",
    problem: "Finding a good wallpaper and applying it usually means searching the web, downloading a file and changing system settings.",
    role: "Solo project. I built the API layer, the browsing screens and the wallpaper integration.",
    flow: ["Pexels API", "Repository", "Staggered grid", "Device wallpaper"],
    architecture:
      "A repository class handles curated photos, pagination and search through the Pexels API. Cached images keep browsing smooth, and a native wallpaper plugin applies the chosen photo to the home or lock screen.",
    outcome: "A complete flow from browsing and searching to previewing and applying a wallpaper.",
    stack: ["Flutter", "REST API", "Pexels", "Image Caching"],
  },
  {
    slug: "flutter-auth",
    title: "Flutter Auth",
    category: "Mobile",
    kind: "Mobile + backend",
    summary: "Registration, login and protected screens using Firebase email and password authentication and Google Sign-In.",
    problem: "Most apps need secure sign-in, with clear feedback when something like a weak password or a duplicate account goes wrong.",
    role: "Solo project. I built the screens and the Firebase authentication layer.",
    flow: ["Login screens", "Auth functions", "Firebase Auth", "Protected home"],
    architecture:
      "A dedicated functions file wraps Firebase Authentication for sign-up, login, sign-out and Google Sign-In, and turns Firebase error codes into clear messages for the user.",
    outcome: "A reusable authentication flow with email and Google sign-in.",
    stack: ["Flutter", "Firebase Auth", "Google Sign-In"],
    repo: gh("flutter-auth"),
  },
  {
    slug: "url-shortener",
    title: "URL Shortener",
    category: "Mobile",
    kind: "Flutter app",
    summary: "A clean Flutter app that turns long links into short ones, ready to copy or open in one tap.",
    problem: "Long URLs are awkward to share, especially in messages and social posts.",
    role: "Solo project. I built the interface and the API integration.",
    flow: ["Long URL", "HTTP POST", "CleanURI API", "Short link"],
    architecture:
      "The app posts the original link to the CleanURI API, displays the result, and uses the clipboard and url_launcher so the short link can be copied or opened.",
    outcome: "A focused single-purpose tool built around a third-party REST API.",
    stack: ["Flutter", "Dart", "REST API", "url_launcher"],
    repo: gh("Url-Shortner-Application"),
  },
  {
    slug: "todo-hive",
    title: "To-Do App",
    category: "Mobile",
    kind: "Mobile app",
    summary: "A task manager with add, complete and delete actions, and tasks saved locally on the device.",
    problem: "A to-do list is only useful if tasks are still there after the app closes, even without an internet connection.",
    role: "Solo project. I built the interface and the local storage layer.",
    flow: ["Task list UI", "Database class", "Hive box", "Device storage"],
    architecture:
      "A small database class seeds starter tasks on first launch, then loads and saves the list through a Hive box, keeping storage logic separate from the screens.",
    outcome: "An offline-first task app whose data persists between sessions.",
    stack: ["Flutter", "Hive", "Local Storage"],
    repo: gh("Todo_App_with_Hive"),
  },
  {
    slug: "python-sorting-visualizer",
    title: "Python Sorting Visualizer",
    category: "Web & desktop",
    kind: "Desktop app",
    summary: "A desktop visualizer with keyboard controls for Bubble, Insertion, Merge and Quick Sort, in ascending or descending order.",
    problem: "Seeing an algorithm run frame by frame makes it easier to understand than reading static code.",
    role: "Solo project. I wrote the algorithms, the rendering and the controls.",
    flow: ["Generator", "Next step", "Pygame frame", "Screen"],
    architecture:
      "Each algorithm is a Python generator that pauses after every step. The Pygame loop advances it once per frame and redraws the bars, with colours marking the active values.",
    outcome: "A real-time desktop tool, and the same idea explored in a second language and framework.",
    stack: ["Python", "Pygame", "Generators", "Algorithms"],
    repo: gh("sorting_visualizer_python"),
  },
  {
    slug: "flutter-portfolio",
    title: "Flutter Portfolio",
    category: "Web & desktop",
    kind: "Web app",
    summary: "An earlier personal site built entirely with Flutter Web, with responsive navigation, projects and a contact section.",
    problem: "I wanted a personal site built with the same framework I use every day, working well on both desktop and mobile.",
    role: "Solo project. I designed, built and deployed the site.",
    flow: ["Flutter Web", "Components", "Responsive layout", "Netlify"],
    architecture:
      "The page is composed from reusable Flutter components such as the top bar, drawer, project list and footer, with a responsive helper that adapts the layout to the screen size.",
    outcome: "Live on Netlify as the previous version of my portfolio.",
    stack: ["Flutter Web", "Dart", "Provider", "Netlify"],
    live: { label: "Live site", href: "https://umartanwar.netlify.app/" },
  },
  {
    slug: "html-portfolio",
    title: "HTML Portfolio",
    category: "Web & desktop",
    kind: "Website",
    summary: "A hand-written portfolio site with home, about, services, portfolio and contact sections.",
    problem: "I wanted to practise core web layout and interaction without relying on a framework.",
    role: "Solo project. I wrote the HTML, CSS and JavaScript.",
    flow: ["HTML", "CSS", "JavaScript", "Browser"],
    architecture: "One semantic HTML page, a dedicated stylesheet and a small script, kept as plain files with no build step.",
    outcome: "A complete static site built with the web fundamentals.",
    stack: ["HTML", "CSS", "JavaScript"],
    repo: gh("Personal-Portfolio-Website"),
  },
  {
    slug: "milk-quality",
    title: "Milk Quality Prediction",
    category: "AI & machine learning",
    kind: "ML + Flask app",
    summary: "A multi-page Flask web app that predicts milk quality from its properties using several trained classifiers.",
    problem: "Checking milk quality by hand takes time, so a model that predicts it from measured properties can help screen samples quickly.",
    role: "I trained the models and built the Flask app and templates.",
    flow: ["Web form", "Flask route", "Trained models", "Quality result"],
    architecture:
      "Flask serves the pages and a prediction route. Pickled scikit-learn models, including Random Forest, KNN, SVM, Decision Tree and Naive Bayes, are loaded at startup and used for predictions.",
    outcome: "A complete ML web app with the code, dataset and trained models in the repository.",
    stack: ["Python", "Flask", "scikit-learn", "Bootstrap"],
    repo: gh("Milk-Quality-Prediction"),
  },
  {
    slug: "brain-stroke",
    title: "Brain Stroke Prediction",
    category: "AI & machine learning",
    kind: "ML + Flask app",
    summary: "A Flask app that estimates stroke risk from health details such as age and gender, using a healthcare dataset.",
    problem: "Patterns in routine health data may help flag stroke risk, which makes this a useful classification problem to explore.",
    role: "I trained the classifiers and built the web interface.",
    flow: ["Health form", "/predict", "5 classifiers", "Result page"],
    architecture:
      "A Flask route reads the submitted form values and passes them to pickled Decision Tree, KNN, SVM, Random Forest and Naive Bayes models.",
    outcome: "A deployable app for comparing classifiers. It's a learning project, not a medical tool.",
    stack: ["Python", "Flask", "scikit-learn", "Pandas"],
    repo: gh("Brain-Stoke-Prediction"),
  },
  {
    slug: "nlp-sentiment",
    title: "NLP Sentiment Analysis",
    category: "AI & machine learning",
    kind: "ML + Streamlit app",
    summary: "A machine learning app that predicts the sentiment of a piece of text, with a simple Streamlit interface.",
    problem: "Reading through written feedback by hand doesn't scale, so the sentiment needs to be classified automatically.",
    role: "I prepared the dataset, trained the model and built the Streamlit app around it.",
    flow: ["Text input", "Cleaning + stemming", "Trained model", "Streamlit UI"],
    architecture:
      "Text is cleaned with regular expressions, stripped of stopwords and stemmed with NLTK's Porter stemmer. A pickled model makes the prediction, and Streamlit provides the interface.",
    outcome: "A deployable app with the code, dataset and trained model all in the repository.",
    stack: ["Python", "NLTK", "scikit-learn", "Streamlit"],
    repo: gh("NLPsentimentanalysisProject5"),
  },
  {
    slug: "restaurant-reviews",
    title: "Restaurant Review Analysis",
    category: "AI & machine learning",
    kind: "ML + Streamlit app",
    summary: "An NLP model that reads a restaurant review and predicts how the customer felt.",
    problem: "Restaurants receive more written feedback than anyone has time to read one review at a time.",
    role: "I built the text pipeline, trained the model and created the Streamlit app.",
    flow: ["Review text", "NLTK cleaning", "CountVectorizer", "Prediction"],
    architecture:
      "Reviews are cleaned with NLTK and converted into features with a 1,500-word CountVectorizer before a pickled scikit-learn model makes the prediction in Streamlit.",
    outcome: "A complete pipeline from raw review text to a prediction in a simple interface.",
    stack: ["Python", "NLTK", "scikit-learn", "Streamlit"],
    repo: gh("RestaurantReviws"),
  },
  {
    slug: "placement-predictor",
    title: "Placement Predictor",
    category: "AI & machine learning",
    kind: "ML + Flask app",
    summary: "A Flask app that predicts student placement outcomes from academic scores across school and B.Tech semesters.",
    problem: "Students and colleges can benefit from an early signal of placement readiness based on academic history.",
    role: "I trained and compared the models, and built the prediction app.",
    flow: ["Academic scores", "/predict", "Multiple models", "Prediction"],
    architecture:
      "A Flask route collects Class 10, Class 12 and semester scores, then runs them through models trained with algorithms including KNN, Decision Tree and SVM.",
    outcome: "A working prediction interface developed during my PIET machine learning training.",
    stack: ["Python", "Flask", "scikit-learn"],
    repo: gh("PlacementAnalysisProject6"),
  },
  {
    slug: "churn-modelling",
    title: "Customer Churn Modelling",
    category: "AI & machine learning",
    kind: "ML + Flask app",
    summary: "A Flask app that predicts whether a bank customer is likely to leave, based on profile and account data.",
    problem: "Keeping a customer usually costs less than winning a new one, so it helps to know who is at risk of leaving.",
    role: "I trained the models and built the Flask prediction app.",
    flow: ["Customer data", "/predict", "5 models", "Churn result"],
    architecture:
      "A Flask route reads fields such as credit score, geography, age, tenure and balance, then uses pickled Random Forest, KNN, SVM, Decision Tree and Naive Bayes models.",
    outcome: "A working app that compares several classifiers on the same business problem.",
    stack: ["Python", "Flask", "scikit-learn"],
    repo: gh("project7minor"),
  },
  {
    slug: "data-science-internship",
    title: "Data Science Internship",
    category: "AI & machine learning",
    kind: "Bharat Intern",
    summary: "Three notebooks covering Apple stock price prediction, Titanic survival classification and handwritten digit recognition.",
    problem: "Each task applies a different machine learning approach to a well-known dataset: time series, tabular data and images.",
    role: "Data Science Intern. I completed all three tasks.",
    flow: ["Dataset", "Exploration", "Model training", "Evaluation"],
    architecture:
      "Stock prediction uses windowed price history with a Keras model, Titanic uses a Random Forest on tabular features, and digit recognition uses Logistic Regression on the MNIST dataset.",
    outcome: "Three completed notebooks, with the code and results available on GitHub.",
    stack: ["Python", "TensorFlow / Keras", "scikit-learn", "Pandas", "Seaborn"],
    repo: gh("Bharat-Intern"),
  },
  {
    slug: "ml-model-collection",
    title: "ML Model Collection",
    category: "AI & machine learning",
    kind: "PIET training",
    summary: "A set of deployed-style model projects covering regression, classification and clustering with Flask and Streamlit.",
    problem: "Learning machine learning properly means taking several algorithms all the way from a dataset to a usable interface.",
    role: "I built these as part of my Machine Learning & Data Science training at PIET.",
    flow: ["Dataset", "Training", "Pickled model", "Flask / Streamlit"],
    architecture:
      "Each project trains a model on a dataset, saves it with pickle, and serves predictions through a small Flask or Streamlit app. The set covers Linear Regression, KNN, Decision Trees, SVM, Random Forest and K-Means.",
    outcome: "Hands-on practice with the full workflow, across the main families of classic ML algorithms.",
    stack: ["Python", "scikit-learn", "Flask", "Streamlit"],
    related: [
      { label: "House price regression", href: gh("houseproject2") },
      { label: "K-Nearest Neighbours", href: gh("knnPROJECT4") },
      { label: "Decision Tree", href: gh("dicissiontreeproject3") },
      { label: "SVM & Random Forest", href: gh("SVM-and-Random-Forest") },
      { label: "K-Means clustering", href: gh("K_Means_Project7") },
    ],
  },
  {
    slug: "dsa-practice",
    title: "DSA Practice",
    category: "Computer science",
    kind: "Java + C++",
    summary: "My data structures and algorithms practice, including arrays and classic interview problems in Java and C++.",
    problem: "Strong fundamentals come from steady practice, so I keep my solutions in one place.",
    role: "I wrote these solutions as part of my regular practice.",
    flow: ["Problem", "Approach", "Java / C++", "Solution"],
    architecture:
      "Solutions are organised by topic and by day, covering problems such as Two Sum, 4Sum, Sort Colors, Valid Parentheses and Best Time to Buy and Sell Stock.",
    outcome: "Part of the 300+ DSA problems I've solved so far.",
    stack: ["Java", "C++", "Data Structures", "Algorithms"],
    repo: gh("DSA"),
    related: [{ label: "CrackYourPlacement solutions", href: gh("CrackYourPlacement") }],
  },
];

const FEATURED = ["archon-golf", "rove", "xtrafyl-customer", "xtrafyl-driver", "realtime-chat", "sorting-visualizer"];

export const featuredProjects = FEATURED.map((slug) => projects.find((p) => p.slug === slug)!);
export const otherProjects = projects.filter((p) => !FEATURED.includes(p.slug));
