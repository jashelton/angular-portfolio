angular.module('AngularPortfolio', ['ngRoute', 'ngResource']);

// Works List Data
  var works = [
  {
    id: 4,
    title: 'Portfolio - AngularJS',
    description: 'After graduating from The Iron Yard, I immediately started looking into different JavaScript frameworks that I wanted to learn.  When I started getting into Angular, I quickly fell in love with it.  I wanted to use Angular form something on my own for practice, so what better use than rebuilding my portfolio.  This project was a lot of fun and I am extremely excited to continue progressing with AngularJS.',
    technologies:'HTML5, CSS3, JavaScript, jQuery, AngularJS, Git, Heroku, Photoshop',
    lessons: 'Considering this was my first real world experience using Angular, the biggest lesson I learned was how to incorporate JavaScript using things such as Angular directives.  I look forward to starting a few more projects and expanding into the full MEAN stack.',
    image: 'assets/images/angular-portfolio-img.png',
    github: 'fa-github-alt fa-2x fa',
    view: 'fa-eye fa-2x fa',
    viewWorkLink: 'http://www.sheltonjs.com',
    githubLink: 'https://github.com/jashelton/angular-portfolio',
    keywords: 'jQuery javascript html5 css3 angularjs'
  },
  {
    id: 3,
    title: 'PIM',
    description: 'Predictive Inventory Management (PIM) is a website created for Spas to manage inventory based on upcoming appointments. This was a final project created by myself and 4 other Iron Yard Graduates. My job was Front-End functionality and design (excluding the login flow/landing page.) Login info for testing - Username: Face_It | Password: faceit',
    technologies:'HTML5, CSS3, JavaScript, jQuery, and Git in a Python Environment.',
    lessons: 'PIM was a final project consiting of myself, one other Front-End Developer, and 3 Python Developers.  With a 2 week deadline to go from A - Z, we had to learn how to work well as a team and accomplish goals in a timely fashion.',
    image: 'assets/images/pim-image.png',
    github: 'fa-github-alt fa-2x fa',
    view: 'fa-eye fa-2x fa',
    viewWorkLink:'http://pim-spa.herokuapp.com',
    githubLink: 'https://github.com/OrganicInventory/organic-repo/tree/master',
    keywords: 'PIM JavaScript jQuery CSS HTML5 Python Design App'
  },
  {
    id: 2,
    title: 'Class Cash',
    description: 'Class Cash is a web app that serves as a modern rewards system for teachers to use with their students. I was brought on for design and basic functionality. After our test phase, we plan to implement a full redesign. Login info for testing - Username: test@test.com | Password: password',
    technologies:'HTML5, CSS3, JavaScript, jQuery, and Git in a Ruby on Rails Environment.',
    lessons: 'I was brought on to this project with a deadline of two weeks before a test run.  Working on this project taught me how to get an MVP finished with a strict deadline.  Also, I learned how to react to feedback from users for bug fixes and improvements.',
    image: 'assets/images/class-cash-image.png',
    github: 'fa-github-alt fa-2x fa',
    view: 'fa-eye fa-2x fa',
    viewWorkLink: 'http://classcash.herokuapp.com/',
    githubLink: 'https://github.com/awbedell/class_cash',
    keywords: 'Class Cash jQuery JavaScript CSS SCSS Design App'
  },
  {
    id: 1,
    title: 'Form With Floating Labels',
    description: 'A common problem with forms are that the typical labels cause balance issues and just generally dont look that great. When pushing towards using placeholder text, that solves the problem while creating a new one. When typing in a box that has a placeholder, the text is gone and the user could easily lose track of what information should go where. Floating labels solves both problems.',
    technologies:'HTML5, CSS3, jQuery, and Git.',
    lessons: 'This idea was brought to me by my instructor at The Iron Yard.  I am always interested in trying new things that make things easier from a UX perspective.  Working through floating labels was able to teach me a whole new approach to what seems like simple tasks.  Now I always have my eyes open to find other neat and interesting fixes to common design problems.',
    image: 'assets/images/floating-labels-img.png',
    github: 'fa-github-alt fa-2x fa',
    view: 'fa-eye fa-2x fa',
    viewWorkLink: 'http://jashelton.github.io/floating-labels/',
    githubLink: 'https://github.com/jashelton/floating-labels',
    keywords: 'jQuery javascript floating labels forms'
  }
]

// Tutorials List Data
var tutorials = [
  {
    title: 'Swerve Bowling Ball',
    description: 'How to throw the swerve.',
    preview: 'LPvhWWdFykA',
    keywords: ''
  },
  {
    title: 'Floating Labels',
    description: 'How to build floating labels.',
    preview: '5B3BZXBM-k8',
    keywords: ''
  }
]
