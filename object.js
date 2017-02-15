'use strict';

const { pipe, pick, values, join } = require('ramda');

const stringValues = pipe(
  pick,
  values,
  join(', ')
);

stringValues(
  ['a', 'b'],
  { a: 1, b: 2, C: 3 }
);
