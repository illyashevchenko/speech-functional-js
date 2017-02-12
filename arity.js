'use strict';

const R = require('ramda');

const toIsoDate = R.pipe(
  R.constructN(1, Date),
  R.invoker(0, 'toISOString')
);

toIsoDate('2017-01-02');
toIsoDate(1486926911751);
toIsoDate('Feb 12 2017');
