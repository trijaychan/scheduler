# Interview Scheduler

A react application that allows users to book and cancel interviews.

## Screenshots

!["screenshot_1"](https://github.com/trijaychan/scheduler/blob/master/docs/screenshot_1.png?raw=true)

!["screenshot_2"](https://github.com/trijaychan/scheduler/blob/master/docs/screenshot_2.png?raw=true)

## Getting started

1. Clone this repo as well as the [scheduler-api](https://github.com/lighthouse-labs/scheduler-api)
2. Install dependencies with `npm install` for both the client and server
3. Follow the instructions for setting up the server on the [scheduler-api](https://github.com/lighthouse-labs/scheduler-api) repo
4. Run both the client and server simultaneously (make sure you are in their respective directories)
    - Run the Webpack Development Server with `npm start`
    - Run the Webpack Development Client with `npm start`

## Running the tests

### Running Jest Test Framework

Covers the following:
- Selector Functions
- Visual Mode Custom Hook
- Components:
  - Application
  - Button
  - DayListItem
  - Form

```sh
npm test
```

### Running Storybook Visual Testbed

Covers each component created.

```sh
npm run storybook
```

### Running End to End Tests (Cypress)

Covers appointment operations and navigation through the day list.

```sh
npm run cypress
```

## Dependencies

- axios: ^0.26.1
- classnames: ^2.2.6
- cypress: ^9.5.3
- g: ^2.0.1
- normalize.css: ^8.0.1
- react: ^16.9.0
- react-dom: ^16.9.0
- react-hooks-testing-library: ^0.6.0
- react-scripts: 3.0.0

## Dev Dependencies

- @babel/core: ^7.4.3
- @storybook/addon-actions: ^5.0.10
- @storybook/addon-backgrounds: ^5.0.10
- @storybook/addon-links: ^5.0.10
- @storybook/addons: ^5.0.10
- @storybook/react: ^5.0.10
- @testing-library/jest-dom: ^4.0.0
- @testing-library/react: ^8.0.7
- babel-loader: ^8.0.5
- node-sass: ^4.14.0
- prop-types: ^15.8.1
- react-test-renderer: ^16.9.0