import reactdex from "/assets/reactdex-3.png";
import dontbudge from "/assets/dontbudge2.png";
import LawlerLiving from "/assets/lawler-living.png";

export const PROJECTS = [
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
