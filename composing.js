'use strict';

const { compose, pipe } = require('ramda');
const { data, getProperList, getNames } = require('./01 approaches');

function getNameListParts(data) {
  const properList = getProperList(data);
  return getNames(properList);
}

getNameListParts(data);

const f = () => ({});
const g = () => ({});
const h = () => ({});

h(g(f(data)));

const x = compose(h, g, f);
x(data);

const nameListParts = compose(getNames, getProperList);
const nameListPipe = pipe(
  getProperList,
  getNames
);

nameListParts(data);
nameListPipe(data);
