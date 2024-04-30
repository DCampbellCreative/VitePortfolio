import flixfixreact from "../assets/flixfixreact.png";
import reactdex from "../assets/reactdex-3.png";
import dontbudge from "../assets/dontbudge2.png";
import sitcomsites from "../assets/sitcomsites.png";

export const PROJECTS = [
  {
    title: "FlixFix",
    description:
      "Full Stack application. Server side REST API created using NodeJS and Express. Database created using MongoDB. Two separate Client side applications. React application with UI created using React Bootstrap. Angular application created using TypeScript and MaterialUI. Users can register new accounts, login using existing accounts, and update and delete their current account. Renders a list of movies stored in database. Users can view detailed information about each title and add and remove titles from their favorites.",
    tools: [
      "REACT",
      "BOOTSTRAP",
      "ANGULAR",
      "MATERIALUI",
      "TYPESCRIPT",
      "MONGODB",
      "NODEJS",
      "EXPRESS",
    ],
    links: {
      "React App": "https://main--movieapiclient.netlify.app/",
      "React Code": "https://github.com/DCampbellCreative/movie_api-client",
      "Backend Code": "https://github.com/DCampbellCreative/movie_api",
      "Angular App":
        "https://dcampbellcreative.github.io/myFlix-Angular-client/welcome",
      "Angular Code":
        "https://github.com/DCampbellCreative/myFlix-Angular-client",
    },
    processId: "flixfix",
    imgUrl: flixfixreact,
  },
  {
    title: "ReactDex",
    description:
      "A Pokédex created using create-react-app, lodash, pokeapi.co, and React. Loads and displays a list of Pokémon from pokeapi.co and displays their names and sprites. The list is searchable by name and sortable by ID number or name ascending and descending. Clicking on a list item loads a modal showing front and back sprites, height, and types of selected Pokémon. Changes background based upon Pokémon's type.",
    tools: ["REACT", "CSS", "LODASH"],
    links: {
      App: "https://dcampbellcreative.github.io/react-pokedex/",
      Code: "https://github.com/DCampbellCreative/react-pokedex",
    },
    processId: "reactdex",
    imgUrl: reactdex,
  },
  {
    title: "Don't Budge",
    description:
      "A budgeting app created using vanilla JavaScript, HTML, and CSS. Allows users to enter their budget and expenses and calculate a balance based upon these inputs. Forms are validated before values can be submitted. Expenses are displayed on screen and can be removed from display and calculation by clicking the delete button.",
    tools: ["REACT", "CSS", "LODASH"],
    links: {
      App: "https://dcampbellcreative.github.io/dont_budge/",
      Code: "https://github.com/DCampbellCreative/dont_budge",
    },
    processId: "dontbudge",
    imgUrl: dontbudge,
  },
  {
    title: "Coming Soon! Sitcom Sites",
    description:
      "A full stack application with a backend created in MongoDB, NodeJS, and Express. Front end created using React and TailwindCSS. I'm turning my love for 90's sitcoms into an app. Let users view facts and trivia about places used in sitcoms. Shows sets supposed real world location on map. Check out my progress so far and stay tuned for the finished project!",
    tools: ["REACT", "TAILWINDCSS", "RESTAPI", "MONGODB"],
    links: {
      "Frontend Code": "https://github.com/DCampbellCreative/Sitcom-Sites",
      "Backend Code":
        "https://github.com/DCampbellCreative/Sitcom-Sites_Backend",
    },
    imgUrl: sitcomsites,
  },
];
