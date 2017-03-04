'use strict';

const { filter, propEq, map, prop, useWith, identity, whereEq, apply } = require('ramda');

// emulation for Lodash's filter and map declarative
const mapProp = useWith(map, [prop, identity]);
const filterMatch = useWith(filter, [whereEq, identity]);
const filterProp = useWith(filter, [prop, identity]);
const filterPropEq = useWith(filter, [apply(propEq), identity]);

module.exports = { mapProp, filterMatch, filterProp, filterPropEq };
