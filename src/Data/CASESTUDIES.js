import cs1image1 from "../assets/casestudy4-2.png";
import cs1gif from "../assets/flixfix.gif";
import cs2image1 from "../assets/casestudy1-1.png";
import cs2image2 from "../assets/reactdex-2.png";
import cs2image3 from "../assets/casestudy1-2.png";
import cs2gif from "../assets/reactdex-2.gif";
import cs3image1 from "../assets/casestudy2-1.png";
import cs3image2 from "../assets/casestudy2-2.png";
import cs3gif from "../assets/dontbudge.gif";

export const CASESTUDIES = [
  {
    title: "FlixFix",
    intro: `FlixFix is the client side of application allowing users to interact with server side code created and tested
		using Express, NodeJS, Postman, and MongoDB. The backend performs CRUD interactions with a MongoDB database.
		It allows user to view details about movie objects stored in the database, add these objects to a list of their favorite movies,
		register for accounts, update their existing account information, and delete their accounts.
		The goal of this app was to familiarize myself with the JavaScript framework Angular and its preferred flavor of JavaScript, TypeScript.`,
    body: [
      `I began by initializing my project using Angular CLI. Once the boilerplate application was created, I was overwhelmed by the
		shear amount of files created.  Going step by step following my CareerFoundry curriculum, this task became less daunting.
		This was also my first exposure to TypeScript, similarly, I greatly over thought the concept at first but soon realized it was
		just JavaScript with self imposed training wheels.`,
      `I housed the API call functions in their own TypeScript file. I created a list of movie cards rendered from the database as the
		main page, once a user was authenticated. Passing data between components using interpolation and data binding takes a few more steps
		than passing props in React. Even though the extra steps are complicated, two way data binding is very helpful.
		I loaded all the data for the movies into the movie card component, then passed it to the other components to be displayed in
		dialogs when the corresponding button was clicked.`,
      `One of my biggest challenges while approaching this project was learning directives. Adding and removing the movies from
		the user's favorites using JavaScript was fairly straight forward. I then added a variable to check whether or not the
		movie was already included in the array. I used the *ngClass directive to change the material UI components on the cards
		when users added or removed a movie from their favorites. This allowed the user's to see on screen feedback representing
		the movies in the favorite array. I used the material UI snack bar component to give further feedback to the user in the case of
		successful requests or errors. Once all the functionality was implemented I extensively commented my code and used TypeDoc to generate documentation.`,
      `I appreciate how Angular has so many built in modules and a built in router. Using the Angular Material UI
	quickly allowed me to create elements
	I thought would take me ages at first. Angular Material also allows for a consistent user experience out of the box.`,
    ],
    conclusion: `This project took three weeks to complete, about half the time it took me to create a similar app in React just a few months earlier.
	This definitely speaks to my progression as a programmer. Problems that, at first, seemed extremely complex
	began to seem simpler when broken down. Focusing on functions in one Angular
	file at a time instead of trying immediately to have it working across all the files in and outside of the component was very helpful.`,
    bodyImages: [
      {
        name: cs1image1,
        caption: "Function to add/remove movie from favorites",
      },
    ],
    gif: { name: cs1gif, caption: "FlixFix Demo" },
    processId: "flixfix",
  },
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
    introImages: [
      { name: cs2image1, caption: "Application v1.0" },
      // { name: cs2image2, caption: "Application v2.0" },
    ],
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
