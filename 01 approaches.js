/*eslint no-continue: 0, no-plusplus: 0, no-extend-native: 0  */

'use strict';

const { pipe, filter, propEq, map, prop, flatten, join } = require('ramda');

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

function getNamesList(data) {
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


console.log(getNamesList(data));

Array.prototype.flatten = function () {
  return this.concat.apply([], this);
};

function getNamesListDeclarative(data) {
  return data
    .filter((item) => item.type === 'proper')
    .map((item) => item.list)
    .flatten()
    .map((item) => item.name)
    .join('; ');
}

console.log(getNamesListDeclarative(data));

const nameList = pipe(
  filter(propEq('type', 'proper')),
  map(prop('list')),
  flatten,
  map(prop('name')),
  join('; ')
);

console.log(nameList(data));

const properList = pipe(
  filter(propEq('type', 'proper')),
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

console.log(nameListComposed(data));

function getNamesLodashChain(data) {
  /* global _ */
  return _(data)
    .filter({ type: 'proper' })
    .map('list')
    .flatten()
    .map('name')
    .join('; ');
}
