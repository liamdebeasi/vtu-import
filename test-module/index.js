'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const testFunction = () => {
  console.log('some func')
}

Object.defineProperty(exports, 'testFunction', {
  enumerable: true,
  get: function () {
    return testFunction;
  }
});