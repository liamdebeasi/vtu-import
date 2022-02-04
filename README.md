## Steps to Reproduce

1. Clone repo.
2. Run `npm install`.
3. Run `cd test-module && npm pack` to create an archive of the test package.
4. In the root directory, run `npm install ./test-module/ionic-vue-0.0.1.tgz`.
5. Run `npm run test:unit`. Observe that you receive the following error:

```js
TypeError: (0 , vue_1.testFunction) is not a function

       8 | export default {
       9 |   setup() {
    > 10 |     testFunction();
         |     ^
      11 |   }
      12 | };
      13 | </script>
```
6. Remove `lang="ts"` from the `<script>` in `App.vue`.
7. Re-run `npm run test:unit`. Observe that no error is thrown.

Note: You can also get the test to pass with no error by doing one of the following:

- Remove everything inside of `<template>`
- Changing the name of the module to something else (i.e. `@test/module`)