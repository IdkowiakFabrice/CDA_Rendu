# Codeflix // e001

## <a name='TOC'>Summary</a>

- [Objectives](#objectives)
- [Usage](#usage)
- [Credits](#credits)

## <a name='objectives'>Objectives</a>

Say hi to "Hello, World!", the traditional first program for beginning programming in a new language or environment.
You have to write a function that returns the string `Hello, World!` or that replace the word `World!` with a name when it passed.

```typescript
function HelloWorld(name: string): string
```

## <a name='usage'>Usage</a>

Your have to run `test` to validate your work

```console
❯ npm run test

> algo-base-e002@1.5.0 test /Users/majdi/Downloads/xsort/algo/episode.001
> npx jest --config=.jestrc.js --maxWorkers 2

 FAIL  tests/helloWorld.test.js
  ● Test suite failed to run

    Cannot find module '../src/helloWorld' from 'helloWorld.test.js'

      1 | import { expect } from 'chai'
    > 2 | import helloWorld from '../src/helloWorld'
        | ^
      3 |
      4 | describe(':: helloWorld', () => {
      5 |   it('helloWorld()', () => {

      at Resolver.resolveModule (node_modules/jest-resolve/build/index.js:259:17)
      at Object.<anonymous> (tests/helloWorld.test.js:2:1)

----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |        0 |        0 |        0 |        0 |                   |
----------|----------|----------|----------|----------|-------------------|
Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.998s
Ran all test suites.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! algo-base-e002@1.5.0 test: `npx jest --config=.jestrc.js --maxWorkers 2`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the algo-base-e002@1.5.0 test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/majdi/.npm/_logs/2019-11-06T17_24_50_936Z-debug.log
```

IT DOESN'T WORK ? Why ? Well, there is no file on `src` directory.

Just add your solution in the **good** filename, **export** the function and re-test :)

```console
❯ npm run test

> algo-base-e002@1.5.0 test /Users/majdi/Downloads/xsort/algo/episode.001
> npx jest --config=.jestrc.js --maxWorkers 2

 PASS  tests/helloWorld.test.js
  :: helloWorld
    ✓ helloWorld() (1ms)
    ✓ helloWorld("Ch0pper")

----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |        0 |        0 |        0 |        0 |                   |
----------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.162s
Ran all test suites.
```

WELL DONE ! You just succeed, go to the next one :),

## <a name='credits'>Credits</a>

Write with :heart: by [**Mhirba**](http://mhirba.com) in **Paris**.
