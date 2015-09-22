angular.module('AngularPortfolio', ['ngRoute', 'ngResource']);

// Works List Data
  var works = [
  {
    id: 1,
    title: 'PIM',
    description: 'Predictive Inventory Management (PIM) is a website created for Spas to manage inventory based on upcoming appointments. This was a final project created by myself and 4 other Iron Yard Graduates. My job was Front-End functionality and design (excluding the landing page.)',
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
    description: 'Class Cash is a web app that serves as a modern rewards system for teachers to use with their students. I was brought on for design and basic functionality. After our test phase, we plan to implement a full redesign.',
    image: 'assets/images/class-cash-image.png',
    github: 'fa-github-alt fa-2x fa',
    view: 'fa-eye fa-2x fa',
    viewWorkLink: 'http://classcash.herokuapp.com/',
    githubLink: 'https://github.com/awbedell/class_cash',
    keywords: 'Class Cash jQuery JavaScript CSS SCSS Design App'
  },
  {
    id: 3,
    title: 'Form With Floating Labels',
    description: 'A common problem with forms are that the typical labels cause balance issues and just generally dont look that great. When pushing towards using placeholder text, that solves the problem while creating a new one. When typing in a box that has a placeholder, the text is gone and the user could easily lose track of what information should go where. Floating labels solves both problems.',
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
