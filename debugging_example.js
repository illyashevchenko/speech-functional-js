'use strict';

const { pipe, map, filter, join, identity, prop } = require('ramda');
const { logSimple, log, logJson, logKeys, logMsg, trueLog } = require('./debugging');

logJson('logJson: ')({ id: 3 });
logKeys('logKeys: ')({ id: 4, name: '1' });


trueLog(JSON.stringify)('trueLog stringify 1: ')({ id: 3 });
trueLog(JSON.stringify)('trueLog stringify 2: ', { id: 3 });
trueLog(JSON.stringify, 'trueLog stringify 3: ')({ id: 3 });
trueLog(JSON.stringify, 'trueLog stringify 4: ', { id: 3 });

const idList = pipe(
  logSimple,
  map(prop('id')),
  log(Object.keys, 'Before filter: '),
  filter(identity),
  logJson('After filter: '),
  join('; '),
  logMsg('Result:')
);

idList([
  { id: '4' },
  { id: '3' },
  {},
]);
