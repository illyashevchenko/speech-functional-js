'use strict';

const { filter, propEq, map, prop, useWith, identity, whereEq, apply, pipe, flatten, join } = require('ramda');
const { logSimple, logJson } = require('./debugging');
const { data } = require('./01 approaches');

const samples = [
  { id: 1, type: 'a', nested: [1] },
  { id: 2, type: 'b', nested: [2] },
  { id: 3, type: 'a', enabled: true },
  { id: 4, type: 'b' },
];

// emulation for Lodash's filter and map declarative

const mapProp = useWith(map, [prop, identity]);
const filterMatch = useWith(filter, [whereEq, identity]);
const filterProp = useWith(filter, [prop, identity]);
const filterPropEq = useWith(filter, [apply(propEq), identity]);

mapProp('id', samples); // map with property shortcut
filterProp('enabled')(samples); // filter property shortcut
filterPropEq(['type', 'b'], samples); // filter matchProperty shortcut
filterMatch({ nested: [1] }, samples); // filter match shortcut

const nameList = pipe(
  filterMatch({ type: 'proper' }),
  logJson('After filter: '),
  mapProp('list'),
  flatten,
  mapProp('name'),
  join('; '),
  logSimple
);

nameList(data);
