'use strict';

const { tap, pipe, identity, concat, append, useWith, apply, of, partial, uncurryN, __ } = require('ramda');

const logSimple = tap(console.log);

const logMsg = pipe(
  of,
  partial(console.log),
  tap
);

const createLog = pipe(
  Array,
  append(console.log),
  apply(pipe),
  tap
);

const log = useWith(createLog, [identity, concat]);
const logJson = log(JSON.stringify);
const logKeys = log(Object.keys);

const logStrings = pipe(
  concat,
  logSimple
);

const trueLog = uncurryN(3, pipe(
  append(__, [identity]),
  useWith(logStrings)
));

module.exports = { logSimple, log, logJson, logKeys, logMsg, trueLog };
