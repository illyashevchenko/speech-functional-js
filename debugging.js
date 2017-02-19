'use strict';

const { tap, pipe, map, filter, join, identity, prop, concat, append, useWith, apply } = require('ramda');

const logSimple = tap(console.log);

const logPipe = pipe(
  Array,
  append(console.log),
  apply(pipe),
  tap
);

const log = useWith(logPipe, [identity, concat]);
const logJson = log(JSON.stringify);
const logKeys = log(Object.keys);

logJson('Just: ')({ id: 3 });
logKeys('Keys: ')({ id: 4, name: '1' });

const idList = pipe(
  map(prop('id')),
  logSimple,
  filter(identity),
  logJson('After filter: '),
  join('; '),
  logJson('Result: ')
);

idList([
  { id: '4' },
  { id: '3' },
  {},
]);

