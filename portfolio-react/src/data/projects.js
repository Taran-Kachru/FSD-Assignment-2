const projects = [
  {
    id: 'taskflow',
    title: 'TaskFlow',
    image: '/assets/project-taskflow.svg',
    imageAlt: 'TaskFlow dashboard screenshot showing a kanban board',
    description:
      'A drag-and-drop kanban board with real-time collaboration built on Node.js, Express, Socket.io, and vanilla JavaScript. Supports multi-board workspaces and per-task comments.',
    longDescription:
      'TaskFlow is a real-time collaborative kanban board application. Users can create multiple boards, drag tasks between columns, and leave per-task comments that update live for all connected users. The back-end is powered by Node.js and Express with Socket.io handling the WebSocket layer, while the front-end uses vanilla JavaScript with smooth CSS Grid animations.',
    tags: ['Node.js', 'Socket.io', 'CSS Grid'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Taran-Kachru/',
    highlights: [
      'Real-time updates via WebSockets',
      'Drag-and-drop across columns',
      'Multi-board workspace support',
      'Per-task comment threads',
    ],
  },
  {
    id: 'weatherly',
    title: 'Weatherly',
    image: '/assets/project-weatherly.svg',
    imageAlt: 'Weatherly app showing a 7-day forecast card',
    description:
      'A responsive weather dashboard that fetches real-time data from the OpenWeatherMap API. Features geo-location detection, unit toggling (°C / °F), and animated weather icons.',
    longDescription:
      'Weatherly is a fully responsive weather dashboard built with vanilla JavaScript and the OpenWeatherMap API. It automatically detects the user\'s location via the Geolocation API, displays a 7-day forecast, and lets users toggle between Celsius and Fahrenheit. Weather condition icons are animated using CSS keyframe animations.',
    tags: ['REST API', 'Flexbox', 'CSS Animations'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Taran-Kachru/',
    highlights: [
      'Browser Geolocation API integration',
      '7-day animated forecast display',
      '°C / °F unit toggling',
      'Offline-friendly error handling',
    ],
  },
  {
    id: 'shopquick',
    title: 'ShopQuick',
    image: '/assets/project-shopquick.svg',
    imageAlt: 'ShopQuick e-commerce storefront with product grid',
    description:
      'A full-stack e-commerce prototype with product catalogue, cart management, and Stripe-powered checkout. Back-end built with Express and MongoDB; front-end with semantic HTML and CSS Grid.',
    longDescription:
      'ShopQuick is a full-stack e-commerce prototype demonstrating a complete shopping flow: browsing a product catalogue, managing a cart, and completing payment via Stripe Checkout. The Express/MongoDB back-end exposes a REST API for products and orders, while the front-end renders a responsive CSS Grid catalogue with accessible form components.',
    tags: ['Express', 'MongoDB', 'Stripe API'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Taran-Kachru/',
    highlights: [
      'Stripe Checkout integration',
      'REST API with Express + MongoDB',
      'Shopping cart with local persistence',
      'Admin order dashboard',
    ],
  },
  {
    id: 'devblog',
    title: 'DevBlog',
    image: '/assets/project-devblog.svg',
    imageAlt: 'DevBlog article listing page with dark theme',
    description:
      'A markdown-powered developer blog engine with syntax highlighting, dark/light theme toggle, and an RSS feed. Built as a static-site generator using Node.js with zero runtime dependencies.',
    longDescription:
      'DevBlog is a zero-dependency static-site generator written in Node.js. It reads Markdown files from a content directory, applies a minimal templating engine, and outputs production-ready HTML. Features include Prism.js syntax highlighting, an auto-generated RSS feed, and a CSS-variables-driven dark/light theme that persists across visits via localStorage.',
    tags: ['Node.js', 'Markdown', 'CSS Variables'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Taran-Kachru/',
    highlights: [
      'Zero runtime dependencies',
      'Auto-generated RSS feed',
      'Syntax highlighting via Prism.js',
      'Dark/light theme with localStorage',
    ],
  },
];

export default projects;
