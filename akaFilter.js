'use strict';

const { filter, propEq, map, prop, useWith, identity, whereEq, apply } = require('ramda');

const data = [
  { id: 1, type: 'a', nested: [1] },
  { id: 2, type: 'b', nested: [2] },
  { id: 3, type: 'a', enabled: true },
  { id: 4, type: 'b' },
];

// emulation for Lodash's filter and map declarative

const mapP = useWith(map, [prop, identity]);
const filterP = useWith(filter, [prop, identity]);
const filterM = useWith(filter, [whereEq, identity]);
const filterMp = useWith(filter, [apply(propEq), identity]);

mapP('id')(data); // map with property shortcut
filterP('enabled')(data); // filter property shortcut
filterMp(['type', 'b'], data); // filter matchProperty shortcut
filterM({ nested: [1] }, data); // filter match shortcut
