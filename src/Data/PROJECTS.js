import reactdex from "/assets/reactdex-3.png";
import dontbudge from "/assets/dontbudge2.png";
import SuperHealth from "/assets/super-health.png";
import ObservationTest from "/assets/observation-test-1.png";
import LawlerLiving from "/assets/lawler-living.png";

export const PROJECTS = [
  {
    title: "Super Health",
    description:
      "A full stack application with a backend created in Java, Spring Boot, and Postgres. Front end created using React. Project with full CRUD functionality tested in Postman. Allows users to add patients and data about their doctors visits. Created as the final project of the Create Opportunity Columbia September 2023 cohort.",
    tools: [
      "REACT",
      "CSS MODULES",
      "JAVA",
      "SPRINGBOOT",
      "POSTGRES",
      "POSTMAN",
    ],
    links: {
      Frontend:
        "https://github.com/DCampbellCreative/Create-Opp-Health-Final-UI",
      Backend:
        "https://github.com/DCampbellCreative/Create-Opp-Health-Final-API",
    },
    imgUrl: SuperHealth,
  },
  {
    title: "Observation Test",
    description:
      "A number selection game created as part of Create Opportunity Columbia curriculum. Users must select numbers in order from two data sets. If an incorrect number is selected the numbers in the current block are shuffled. Records users' time and accuracy and displays them once the game is completed.",
    tools: ["REACT", "CSS MODULES"],
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
      "A Pokédex created using React, Lodash, and Pokeapi.co. Loads and displays a list of Pokémon from Pokeapi.co and displays their names and sprites. List is searchable by name and sortable by ID number or name ascending and descending. Clicking on an item loads a modal showing front and back sprites, height, and types of selected Pokémon. Changes background based upon Pokémon's type.",
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
      "Budgeting app created using vanilla JavaScript, HTML, and CSS. Allows users to enter their budget and expenses and calculate a balance based upon these inputs. Forms are validated before values can be submitted. Expenses are displayed on screen and can be removed from display and calculation by clicking the delete button.",
    tools: ["JAVASCRIPT", "HTML", "CSS"],
    links: {
      App: "https://dcampbellcreative.github.io/dont_budge/",
      Code: "https://github.com/DCampbellCreative/dont_budge",
    },
    processId: "dontbudge",
    imgUrl: dontbudge,
  },
];
