'use strict';

const { pipe, prop, converge, concat, call, map } = require('ramda');
const { filterProp } = require('../shorcuts');

const loader = pipe(
  prop('name'),
  concat('./actions/'),
  require
);

const loadOld = (item) =>
  require(`./actions/${ item.name }`)(item.config); // eslint-disable-line global-require, import/no-dynamic-require

const loadOne = converge(call, [loader, prop('config')]);
const load = map(loadOne);

const loadEnabled = pipe(
  filterProp('enabled'),
  load
);

module.exports = { load, loadEnabled, loadOld };
