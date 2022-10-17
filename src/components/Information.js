import image1 from '../assets/calculator.png';
import image2 from '../assets/hotel.png';
import image3 from '../assets/budget_app_desktop.png';
import image4 from '../assets/space-x.png';
import image5 from '../assets/churchAPP_API.png';
import image6 from '../assets/dictionary_online.png';
import image7 from '../assets/covid19_snapshot.png';

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
  bio: "Hello! My name is Nwachukwu Ekene. I am a full-stack development student enrolled in a remote software development school that uses pair programming and real-world projects to teach development.Here, I code every day with other developers globally and learn the ability to demonstrate enough coding skills to pass the rigorous acceptance rate. I've spent several months immersed in remote development, building from landing pages to Rails APIs. I enjoy long walks on the beach and playing chess.",
  skills:
        {
          proficientWith: ['javascript', 'react', 'redux', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma', 'Ruby', 'Ruby on Rails', 'Postgresql'],
          exposedTo: ['ReactNative', 'NodeJs'],
        },
  hobbies: [
    {
      label: 'playing chess',
      emoji: '♔',
    },
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
      live: 'https://micro-hotel-reservation.netlify.app/', // this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/ekenecf/hotel-reservation-frontend', // this should be a link to the **repository** of the project, where the code is hosted.
      image: image2,
    },
    {
      title: 'Project 2',
      live: 'https://ekenebudgetapp.herokuapp.com/',
      source: 'https://github.com/ekenecf/Budget-App',
      image: image3,
    },
    {
      title: 'Project 3',
      live: 'https://gorgeous-melba-746edd.netlify.app/',
      source: 'https://github.com/ekenecf/spacex',
      image: image4,
    },
    {
      title: 'Project 4',
      live: 'https://stcharlescyon.herokuapp.com/',
      source: 'https://github.com/ekenecf/my-church-app',
      image: image5,
    },
    {
      title: 'Project 5',
      live: 'https://incandescent-puffpuff-380218.netlify.app/',
      source: 'https://github.com/ekenecf/react-dictionary',
      image: image6,
    },
    {
      title: 'Project 6',
      live: 'https://warm-panda-37f6ed.netlify.app/',
      source: 'https://github.com/ekenecf/covid19-datatracking-app',
      image: image7,
    },
    {
      title: 'Project 7',
      live: 'https://ekenemathmagician.netlify.app/',
      source: 'https://github.com/ekenecf/math-magician',
      image: image1,
    },
  ],
};
export default info;
