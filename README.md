js-testing-presentation
=====================

### Run the example

```
yarn install
yarn run start
open http://localhost:3000
```

### Run the tests
```
yarn run test
```

or to run a subset of tests

```
yarn run test:stub src/**/**/CounterSave-test.js
```

or to run tests on changes
```
yarn run test:watch
```

### Test examples

* [Javascript Function](src/__tests__/utils-test.js)
* [React Component](src/components/counter/__tests__/CounterDisplay-test.js)
* [Spy](src/components/counter/__tests__/Counter-test.js)
* [Mock and Async functionality](src/components/counter/__tests__/CounterSave-test.js)

### Testing libraries

* Framework (and also test runner) - https://mochajs.org/ (library for webpack compatability - https://www.npmjs.com/package/mocha-webpack)
* Assertions - http://chaijs.com/api/
* Spies, Stubs, and Mocks - http://sinonjs.org/
* React Testing Utilities - https://github.com/airbnb/enzyme
* Enzyme Assertions - https://github.com/producthunt/chai-enzyme
* Coverage - https://github.com/istanbuljs/istanbuljs (and its cli - https://github.com/istanbuljs/nyc)

### Credits

Based on the boilerplate from https://github.com/mobxjs/mobx-react-boilerplate
