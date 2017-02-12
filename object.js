'use strict';

const R = require('ramda');

const stringValues = R.pipe(
  R.pick, R.values, R.join(', ')
);

stringValues(['a', 'b'], { a: 1, b: 2, C: 3 });
