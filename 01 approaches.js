'use strict';

const { pipe, filter, whereEq, map, prop, flatten, join } = require('ramda');
const { logSimple } = require('./debugging');

const data = [
  {
    type: 'proper',
    list: [
      { name: 'Alice' },
      { name: 'Bob' },
    ],
  },
  {
    type: 'improper',
    list: [
      { name: 'foo' },
      { name: 'bar' },
    ],
  },
  {
    type: 'proper',
    list: [
      { name: 'Dan' },
      { name: 'Mike' },
    ],
  },
];

function getNameList(data) {
  /* eslint no-continue: 0, no-plusplus: 0  */
  let names = '';

  for (let i = 0; i < data.length; i++) {
    const entry = data[i];

    if (entry.type !== 'proper') {
      continue;
    }

    for (let k = 0; k < entry.list.length; k++) {
      const item = entry.list[k];
      names += `${ item.name }; `;
    }
  }

  return names && names.slice(0, names.length - 2);
}


getNameList(data);

/* eslint no-extend-native: 0 */
Array.prototype.flatten = function () {
  return this.concat.apply([], this);
};

function getNameListDeclarative(data) {
  return data
    .filter((item) => item.type === 'proper')
    .map((item) => item.list)
    .flatten()
    .map((item) => item.name)
    .join('; ');
}

getNameListDeclarative(data);

function getProperList(data) {
  return data
    .filter((item) => item.type === 'proper')
    .map((item) => item.list)
    .flatten();
}

function getNames(data) {
  return data
    .map((item) => item.name)
    .join('; ');
}

function getNameListParts(data) {
  const properList = getProperList(data);
  return getNames(properList);
}

getNameListParts(data);

const nameList = pipe(
  filter(whereEq({ type: 'proper' })),
  map(prop('list')),
  flatten,
  map(prop('name')),
  join('; ')
);

nameList(data);

const properList = pipe(
  filter(whereEq({ type: 'proper' })),
  map(prop('list')),
  flatten
);
const names = pipe(
  map(prop('name')),
  join('; ')
);

const nameListComposed = pipe(
  properList,
  names
);

nameListComposed(data);

function getNamesLodashChain(data) {
  /* global _ */
  return _(data)
    .filter({ type: 'proper' })
    .map('list')
    .flatten()
    .map('name')
    .join('; ');
}

module.exports = { getNamesLodashChain, data, getProperList, getNames, logSimple };
