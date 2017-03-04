'use strict';

const { pipe, flatten, join } = require('ramda');

const { mapProp, filterMatch, filterProp, filterPropEq } = require('./shorcuts');

const { logSimple, logMsg } = require('./debugging');
const { data } = require('./01 approaches');

const samples = [
  { id: 1, type: 'a', nested: [1] },
  { id: 2, type: 'b', nested: [2] },
  { id: 3, type: 'a', enabled: true },
  { id: 4, type: 'b' },
];

mapProp('id', samples); // map with property shortcut
filterProp('enabled')(samples); // filter property shortcut
filterPropEq(['type', 'b'], samples); // filter matchProperty shortcut
filterMatch({ nested: [1] }, samples); // filter match shortcut

const nameList = pipe(
  filterMatch({ type: 'proper' }),
  logMsg('Filtered: '),
  mapProp('list'),
  flatten,
  logMsg('Flat list: '),
  mapProp('name'),
  join('; '),
  logSimple
);

nameList(data);
