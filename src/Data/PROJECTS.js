import reactdex from "../assets/reactdex-3.png";
import dontbudge from "../assets/dontbudge2.png";
import sitcomsites from "../assets/sitcomsites.png";
import ObservationTest from "../assets/observation-test-1.png";
import LawlerLiving from "../assets/lawler-living.png";

export const PROJECTS = [
  {
    title: "React Observation Test",
    description:
      "A game created as part of my Create Opportunity Columbia curriculum, users must select numbers in order from two data sets. If an incorrect number is selected the number in the respective block are shuffled. Once the game is complete the user's time and accuracy are displayed",
    tools: ["REACT", "CSS"],
    links: {
      App: "https://dcampbellcreative.github.io/React-Observation-Test/",
      Code: "https://github.com/DCampbellCreative/React-Observation-Test",
    },
    imgUrl: ObservationTest,
  },
  {
    title: "Lawler Living",
    description:
      "A marketing site created for a client using Wordpress and the Elementor Plugin. Mocked up and designed the UI to resonate with the client's branding needs.",
    tools: ["WORDPRESS", "ELEMENTOR"],
    links: {
      Website: "https://lawlerliving.com/",
    },
    imgUrl: LawlerLiving,
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
      Frontend: "https://github.com/DCampbellCreative/Sitcom-Sites",
      Backend: "https://github.com/DCampbellCreative/Sitcom-Sites_Backend",
    },
    imgUrl: sitcomsites,
  },
];
