# React Hello World

## About

This app was created to learn & experiment with React! It also includes notes & helpful resources.

## Helpful Links & References

- https://programmingwithmosh.com/react/react-tutorial-beginners/
- https://www.youtube.com/watch?v=Ke90Tje7VS0
- https://medium.freecodecamp.org/learn-react-js-in-5-minutes-526472d292f4
- https://hackernoon.com/the-constructor-is-dead-long-live-the-constructor-c10871bea599

## Notes

### Notable Definitions

*Webpack*
Bundles JavaScript files.

*Babel*
JavaScript compiler that converts ES6+ (ECMAScript 2015+) code into a backwards compatible version of JavaScript in different browser environments. Also converts JSX into a format that can be run on a browser.

*ESLint*
Linter for JavaScript syntax.

*Hot Module Reloading (HMR)*
Whenever a change is made, React will automatically restart in the browser.

*JSX expression*
Stands for JavaScript XML. An extension of JavaScript that is used to describe the appearance of the UI.

*React Elements & Virtual DOM*
React element: a plain JavaScript object that represents a DOM element. Virtual DOM: a representation of the real browser DOM in a React apps memory. Whenever app data changes, a new React element is created in memory. React compares this element to its previous version, and updates elements to match the virtual DOM. This means that we no longer have to work with the DOM (ex: assigning IDs & classes to DOM elements, attaching event handlers, etc.).

*Component*
A JavaScript class or function that can take in inputs (ex: props) and return a React element that describes a section of the UI.
Each component can only return one parent component, so encapsulate code inside of a parent element (ex: div).

*Root Component*
The component that wraps the entire app, and is on the top of a tree of components.

### Updating State

- don't update the state directly
- why? for better performance & for React to tell which part of the DOM it needs to update
- to update state, call setState method on components
- the properties in the object passed into setState will overwrite/merge with properties in state

### 2 Types of Data in React: Props & State

#### 1. props
- external
- not controlled by the component itself
- passed down from components higher up in the hierarchy
- *a component can't change its props directly*

#### 2. state
- private
- can be changed from within the component itself
- *a component can change its internal state directly*

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
