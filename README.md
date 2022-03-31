# Interview Scheduler

A react application that allows users to book and cancel interviews.

## Screenshots

!["screenshot_1"](https://github.com/trijaychan/scheduler/blob/master/docs/screenshot_1.png?raw=true)

!["screenshot_2"](https://github.com/trijaychan/scheduler/blob/master/docs/screenshot_2.png?raw=true)

## Getting started

1. Install dependencies with `npm install`
2. Setup the [API](https://github.com/lighthouse-labs/scheduler-api)
3. Run the API server with `npm start` (make sure you are in the API's root directory)
4. Run client with `npm start`

## Running the tests

### Running Jest Test Framework

#### Covers the following:
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