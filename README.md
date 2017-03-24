# JS Starter Kit (March 2017)
This is a starter kit for JS projects, based on the setup outlined in Chapter 2 of [js-stack-from-scratch](https://github.com/verekia/js-stack-from-scratch).

You'll need to have Node.js and Yarn installed in order to use this repository.

To install:
```
git clone https://github.com/cweems/js-starter-kit.git
yarn install
```
Start the project by running `yarn start` and run the test command by doing `yarn test`.

## Dependencies
### Babel
Babel is a JavaScript transpiler that ports ES6 features back to ES5.

```
    "babel-cli": "^6.24.0" // Command line interface for babel
    "babel-eslint": "^7.2.1"
    "babel-jest": "^19.0.0"
    "babel-preset-env": "^1.2.2"
    "babel-preset-flow": "^6.23.0"
```

### ESLint
JavaScript linter for detecting code syntax errors. Configures to use the AirBnB code styleguide.

```
    "eslint": "^3.18.0",
    "eslint-config-airbnb": "^14.1.0",
    "eslint-plugin-compat": "^1.0.2",
    "eslint-plugin-flowtype": "^2.30.4",
    "eslint-plugin-import": "^2.2.0",
    "eslint-plugin-jsx-a11y": "^3.0.2 || ^4.0.0",
    "eslint-plugin-react": "^6.9.0",
```

### Flow
A JavaScript variable type-checker. Ensures that variables of the correct type are being passed to functions.

### Husky
A git command hook. Allows for adding the `precommit` and `prepush` commands to `package.json`. This automatically runs our test scripts before we deploy.

### Jest
Facebook's testing framework for JavaScript/React.
