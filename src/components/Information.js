const info = {
  miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      id: 1,
      emoji: '☕',
      text: 'fueled by coffee',
    },
    {
      id: 2,
      emoji: '🌎',
      text: 'based in Nigeria',
    },
    {
      id: 3,
      emoji: '💼',
      text: 'Open to work',
    },
    {
      id: 4,
      emoji: '📧',
      text: 'ekens2u@gmail.com',
    },
  ],
  bio: "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
  skills:
        {
          proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
          exposedTo: ['nodejs', 'python', 'adobe illustrator'],
        },
  hobbies: [
    {
      label: 'reading',
      emoji: '📖',
    },
    {
      label: 'theater',
      emoji: '🎭',
    },
    {
      label: 'movies',
      emoji: '🎥',
    },
    {
      label: 'cooking',
      emoji: '🌶',
    },
  ],
  portfolio: [ // This is where your portfolio projects will be detailed
    {
      title: 'Project 1',
      live: 'https://paytonpierce.dev', // this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/paytonjewell', // this should be a link to the **repository** of the project, where the code is hosted.
      // image: mock1
    },
    {
      title: 'Project 2',
      live: 'https://paytonpierce.dev',
      source: 'https://github.com/paytonjewell',
      // image: mock2
    },
    {
      title: 'Project 3',
      live: 'https://paytonpierce.dev',
      source: 'https://github.com/paytonjewell',
      // image: mock3
    },
    {
      title: 'Project 4',
      live: 'https://paytonpierce.dev',
      source: 'https://github.com/paytonjewell',
      // image: mock4
    },
    {
      title: 'Project 5',
      live: 'https://paytonpierce.dev',
      source: 'https://github.com/paytonjewell',
      // image: mock5
    },
  ],
};
export default info;
