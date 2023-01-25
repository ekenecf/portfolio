import image1 from '../assets/calculator.png';
import image2 from '../assets/hotel.png';
import image3 from '../assets/budget_app_desktop.png';
import image4 from '../assets/space-x.png';
import image5 from '../assets/churchAPP_API.png';
import image6 from '../assets/dictionary_online.png';
import image7 from '../assets/covid19_snapshot.png';
import image8 from '../assets/demoSite.png';

const info = {
  miniBio: [
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
  bio: "Hello! My name is Nwachukwu Ekene. I am a full-stack developer in microverse a remote organisation that uses pair programming and real-world projects to teach development. Here, I code every day with other developers globally having the ability to demonstrate enough coding skills to pass the rigorous acceptance rate. I've spent several months immersed in remote development, building from landing pages to Rails APIs. I enjoy long walks on the beach and playing chess.",
  skills:
        {
          proficientWith: ['javascript', 'reactJs', 'reduxJs', 'NodeJs', 'expressJs', 'git', 'Tailwindcss', 'html5', 'css3', 'Ruby', 'Ruby on Rails', 'Postgresql'],
          exposedTo: ['ReactNative', 'MongoDB'],
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
  portfolio: [
    {
      title: 'Hotel Reservation App',
      live: 'https://micro-hotel-reservation.netlify.app/',
      source: 'https://github.com/ekenecf/hotel-reservation-frontend',
      image: image2,
    },
    {
      title: 'Rails Budget App',
      live: 'https://ekenebudgetapp.herokuapp.com/',
      source: 'https://github.com/ekenecf/Budget-App',
      image: image3,
    },
    {
      title: 'Space-travel app',
      live: 'https://gorgeous-melba-746edd.netlify.app/',
      source: 'https://github.com/ekenecf/spacex',
      image: image4,
    },
    {
      title: 'Church Database App',
      live: 'https://stcharlescyon.herokuapp.com/',
      source: 'https://github.com/ekenecf/my-church-app',
      image: image5,
    },
    {
      title: 'React Dictionary',
      live: 'https://incandescent-puffpuff-380218.netlify.app/',
      source: 'https://github.com/ekenecf/react-dictionary',
      image: image6,
    },
    {
      title: 'Covid-19 Data tracking App',
      live: 'https://warm-panda-37f6ed.netlify.app/',
      source: 'https://github.com/ekenecf/covid19-datatracking-app',
      image: image7,
    },
    {
      title: 'Math-magician',
      live: 'https://ekenemathmagician.netlify.app/',
      source: 'https://github.com/ekenecf/math-magician',
      image: image1,
    },
    {
      title: 'Demo app with Authorization and authentication',
      live: 'https://wazobia-nigeria.netlify.app/',
      source: 'https://github.com/ekenecf/engFrontend',
      image: image8,
    },
  ],
};
export default info;
