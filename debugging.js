'use strict';

const { tap, pipe, map, filter, join, identity, prop, concat, insert, __, apply } = require('ramda');

const logSimple = tap(console.log);
const log = pipe(
  concat,
  insert(1, __, [JSON.stringify, console.log]),
  apply(pipe),
  tap
);

const idList = pipe(
  map(prop('id')),
  logSimple,
  filter(identity),
  log('After filter: '),
  join('; ')
);

idList([
  { id: '4' },
  { id: '3' },
  {},
]);
