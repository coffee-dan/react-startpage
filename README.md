# React Startpage
React - As in ReactJS, a powerful web framework. <br />
Startpage - An extensible browser productivity toolkit. <br />
[Live demo](https://react-startpage.herokuapp.com/)

## Instructions to install React enviroment on Windows

1. [Download and install most recent LTS version of Node.js and NPM](https://nodejs.org/en/download/)

2. `npm -v` verify npm install

3. `git clone https://github.com/coffee-dan/react-startpage.git` get code

4. `npm install` install project dependencies

## Deployment instructions

Download and install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

`heroku login`

Clone the repository

Use Git to clone react-startpage's source code to your local machine.

`heroku git:clone -a react-startpage`
`cd react-startpage`

Deploy your changes

Make some changes to the code you just cloned and deploy them to Heroku using Git.

`git add .`
`git commit -am "make it better"`
`git push heroku master`

### Links to more detailed setup instructions
[Installing NPM](https://phoenixnap.com/kb/install-node-js-npm-on-windows)

[Installing create-react-app](https://github.com/facebook/create-react-app)

[Setting up local React.js development enviroment](https://reactjs.org/tutorial/tutorial.html#setup-option-2-local-development-environment)

## This project uses these tools
[Open Weather API](https://home.openweathermap.org/) - 
    A simple free weather API that requires an account for a key. <br />
[npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) - 
    An npm package runner that replaces the need for global installs and is the preferred tool for this project. <br />
[Node JS](https://nodejs.org/en/) - 
    An asynchronous event-driven JavaScript runtime built with scalable network applications as the goal. <br />
[npm](https://www.npmjs.com/) - 
    Package manager that will be handling nearly all installing using CLI. <br />
[Heroku](https://heroku.com) - 
    Free service that hosts the most recent build of the app for the time being. <br />
[react-router-dom](https://github.com/ReactTraining/react-router#react-router--) - 
    DOM bindings for React Router which is at its core a tool to serve up different content at different URLs. <br />
[Express.js](http://expressjs.com/) - 
    A Node.js web application framework that provides a useful set of features for easily serving up the app. <br />

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the most recent app build. See `npm run build` for build instructions. <br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

This uses a thin Express wrapper which is not present in the dev toolchain. <br />
Currently no support for secret information so any features that require API keys are non-functioning.

### `npm dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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
