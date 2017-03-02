'use strict';

const { constructN, invoker, pipe } = require('ramda');

const toIsoDate = pipe(
  constructN(1, Date),
  invoker(0, 'toISOString')
);

console.log(toIsoDate('2017-01-02'));
console.log(toIsoDate(1486926911751));
console.log(toIsoDate('Feb 12 2017'));
