### Simple Tic Tac Toe App

## Instructions

1. `yarn init` -> Set up package.json and manage our dependencies (we leave the defautlt values)
2. `yarn add react react-dom` -> Install dependencies for React
3. `yarn add --dev webpack webpack-cli webpack-dev-server` -> Code bundler
4. `yarn add --dev style-loader css-loader html-webpack-plugin clean-webpack-plugin` ->
5. `yarn add --dev @babel/core babel-loader @babel/preset-env @babel/preset-react` -> Transcompiler for jsx into js
   - core transforms ES6 to ES5
   - babel-loader is a webpack helper to transform JS dependencies with Babel.
   - Babel-preset-env determines the plugins to use.
   - Babel-preset-react allows babel to work with React and the JSX syntax.
6. Create a new file called ‘.babelrc’ in the root of your project. We set Babel to use the React and Preset-env packages we installed.
7. Configure webpack using webpack.config.js in our root folder

