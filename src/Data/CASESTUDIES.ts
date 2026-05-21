import cs2image1 from "/assets/casestudy1-1.png";
import cs2image3 from "/assets/casestudy1-2.png";
import cs2gif from "/assets/reactdex-2.gif";
import cs3image1 from "/assets/casestudy2-1.png";
import cs3image2 from "/assets/casestudy2-2.png";
import cs3gif from "/assets/dontbudge.gif";

export const CASESTUDIES = [
  {
    title: "ReactDex",
    intro: `ReactDex is a single page application, or SPA, created using the Javascript library React, HTML5, CSS3, and the NPM package Lodash.
		The application uses external data loaded from the pokeapi.co application programming interface, or API, to gather and display data
		about a selection of characters from Nintendo's Pokémon video game franchise.
		The backgrounds were created using duiker101's Github repo pokemon-type-svg-icons. The list is sortable and searchable.
		Users can click on list items to display a modal containing detailed data about the selected Pokémon. When a Pokémon is selected the
		background of the application changes dynamically based up the creature's type. This application is currently in its third version. It was originally created in vanilla JavaScript as part of my CareerFoundry curriculum. I challenged myself to recreate it in React to implement many new features and learn more about the library.  felt that it could use more visual variety. I wanted to capture the early 2000's Nintendo feel that made me fall in love with the video game series as a child. To achieve this, I created many CSS classes that changed the background based on each Pokémon's type`,
    body: [
      `The app was initialized using Create-React-App. I populated the directory with components and created a separate file for my API calls. One function, called in main component retrieves the list of Pokemon from pokeapi.co. Another retrieves details from specific endpoints containing more detailed information about each creature. I call this function in the modal component once a specific Pokémon has been selected.`,
      `A map function renders the data as buttons in an unordered list. I created an on click function that would set the state variable, show, as true. This reveals a modal, housed in a different component, displaying detailed information about each Pokémon object. I had to split the fetch URL to retrieve each Pokémon's ID and set it as variable separately from the item's index. Plugging this into a URL allowed me to find the address for the item's sprite and display it on the main page. I originally used the indices as keys for the list items but this caused a conflict once I implemented the search feature, since the indices changed each time the list was rendered. It would filter the name's of the Pokemon but display the images of the object that originally held that index. To sort the items I used Lodash, which I learned is much easier than creating a JavaScript sort function from scratch.`,
      `Inside of the Modal component's useEffect function, I call the function that retrieves specific data about each Pokémon and store the name of the background corresponding to the type in the state variable 'background'. I pass this variable as a prop to the Background component. I created a list of CSS classes for each type and made repeating backgrounds using duiker101's Github repo pokemon-type-svg-icons. Using a template literal, I dynamically set the class each time the selected Pokémon's type changes.`,
      `This was the first application I created exclusively using functional components and React hooks. It was an adjustment from mainly working with class components but I now understand why its the preferred structure of modern React applications, the code is much more streamlined. With each version of the app I broke down each component into smaller pieces so future editing would be much easier.`,
    ],
    conclusion: ` After creating a React app from scratch I feel much more confident working with the library. When creating a project like this in the future I will never again set a dynamically rendered list's keys as indices. I now understand why React throws an error message when this is attempted. I am much more confident using built in hooks like useState and useEffect, and passing props between components. This project has also taught me a lot about CSS and how it interacts with React and JavaScript. I can now easily use template literals to dynamically set classes and can implement a fully responsive CSS grid.`,
    introImages: [{ name: cs2image1, caption: "Application v1.0" }],
    bodyImages: [
      {
        name: cs2image3,
        caption: "Function to map items and variable to find sprite URL",
      },
    ],
    gif: { name: cs2gif, caption: "Final app" },
    processId: "reactdex",
  },
  {
    title: "Don't Budge",
    intro: `Don't Budge is a lightweight budgeting app created using JavaScript, HTML, and CSS.
		It allows users to enter their budget and expenses, and calculate a remaining balance based upon these inputs.
		My goal was to further my understanding of the fundamentals of JavaScript and learn how to display and edit lists dynamically.
		After working primarily in the JavaScript library React for an extended period of time,
		I challenged myself to build an app from scratch using vanilla JavaScript, based solely upon an image and short demo of
		a project created by another developer.`,
    body: [
      `	I began by creating HTML input fields with submit buttons to add user inputs as values.
			The submit button on the budget field directly sets and displays the budget value.
			Submitting the expense field originally created a simple array holding the expense values and reduced them into
			a single number reflecting the total amount of these values. I then created a function to subtract the total value
			of the expenses from the supplied budget value and display this in the balance field.
			I realized displayed expenses would be more practical if they had descriptions to accompany them.
			To achieve this I would need to refactor my code and take a different approach.
			I had to convert each expense to an object to hold key and value pairs, and then push those objects to an array. Using document object model, or DOM, manipulation,
			I displayed the expense amounts and descriptions with the values held in the created objects.`,
      `This brought me to my biggest challenge, creating a button with a function that would remove the desired element from the
			DOM and the corresponding object from the array simultaneously.
			With guidance from my CareerFoundry mentor, I came up with a solution that searched the created array
			for parameters exactly matching the object amounts and descriptions provided by users. Once the item is
			removed, the object amounts are reduced once again to update the user's expense value,
			then this new value is subtracted from the budget value to display a new user balance.`,
    ],
    conclusion: `The final product took around two weeks to complete.
		The resulting app allows users to set a budget, create and edit a list of expenses dynamically and view their
		remaining balance based upon these inputs. All forms are validated to accept the correct values.
		I learned a lot about the importance of indices in an array, targeting elements in the DOM, parsing user inputs for integers,
		validating fields with conditionals, the CSS grid, and reducing arrays. When approaching
		a project similar to this in the future, I will be sure to work with objects off the bat so dynamically generated information can
		be more descriptive and user friendly.`,
    introImages: [{ name: cs3image1, caption: "Original Application" }],
    bodyImages: [
      {
        name: cs3image2,
        caption: "Function to add/delete list items",
      },
    ],
    gif: { name: cs3gif, caption: "Final app" },
    processId: "dontbudge",
  },
];
