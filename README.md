# Getting Started with Create React App by Creating Tic Tac Toe Game!
## This Demo is based on React Documentations:
### [Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html#setup-option-1-write-code-in-the-browser)
#### Anmar Jarjees
##### You can check the [live demo]() of this repo

1. Make sure you have a recent version of Node.js installed.

2. Follow the installation instructions for Create React App to make a new project. 
(Notice that I named project/app/repo "my-react-app")
> npx create-react-app my-react-app

NOTE: Before executing point 3, you can run your app for testing!
> npm start

3. Delete all files in the src/ folder of the new project. Don't delete the entire src folder, just the original source files inside it

4. Add a file named index.css in the src/ folder 
[The code for this CSS file](https://codepen.io/gaearon/pen/oWWQNa?editors=0100)

5. Add a file named index.js in the src/ folder
[The code for this JS code](https://anmarjarjees.github.io/my-react-app/)

6. Add these three lines to the top of index.js in the src/ folder:
- import React from 'react';
- import ReactDOM from 'react-dom/client';
- import './index.css';

7. Now if you run npm start in the project folder and open http://localhost:3000 in the browser, 
you should see an empty tic-tac-toe field.

### NOTE:
In order to simplify the code and make the comments easy to read,
I have divided the process of coding into two files:<br />
First Part: index1.js<br />
Second Part: index.js<br />

8. Passing Data Through Props: Check my comments in index1.js file (Ordered Steps)

9. Making an Interactive Component: Check my comments in index1.js file (Ordered Steps)

10. Continuing the Game: Check my comments in index1.js file (Ordered Steps)

11. Completing the Game: Check the second part of my comments in the final file index.html

### NOTES:
- My First File "index1.js" contains the first part (steps) of coding from step1 to step12
- My Second File "index.js" contains the second (final) part (steps) of coding starting from step13 till the end
- We cannot have two index.js files! That's why I put them to be index1.js for starting then the main final one index.js

### Deploying a React App* to GitHub Pages
## Before Starting:
### Steps Reference: [React App Deployment](https://create-react-app.dev/docs/deployment/#github-pages)
These steps assume that:
- You are already familiar with the basic commands of Git and GitHub<br />
Please refer to my 2 pdf files regarding using Git/GitHub/GitPod 
- You had already created and initialized your repo in your local computer and connected with your GitHub repo

1. Make sure you are inside the APP folder, then you can start running all the commands listed in the next steps

2. Install the "gh-pages" npm package and save it as a "development dependency"
> npm install gh-pages --save-dev

3. Modifying the package.json file by adding the homepage property:
- By default the "package.json" starts with these lines:
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  .....
<br />
- Add the following property in one of these formats:
-- For Project Site: https://{username}.github.io/{repo-name}
-- For User Site: https://{username}.github.io
<br />
in my case, it will be: 
"homepage": "https://anmarjarjees.github.io/my-react-app"
<br />
so the JSON file:
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://anmarjarjees.github.io/my-react-app",

NOTE: Don't forget the the "," at the end, for more info refer to my JSON lectures
<br />
Now, the React app's package.json file includes a new added property named "homepage".

4. Add the following two porperties to deployment scripts to the package.json file:<br />
"predeploy": "npm run build",<br />
"deploy": "gh-pages -d build",

Below is the default code for "scripts" property:<br />
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },

You can add it anywhere:<br />
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
  
  The final code:<br />
    "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }

Now, the React app's package.json file includes deployment scripts.

5. Deploy the React app to GitHub Pages by running this command:
> npm run deploy
<br />

===

### Below are the default content of README.md file:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
