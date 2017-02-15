/*eslint no-continue: 0, no-plusplus: 0, no-extend-native: 0  */

'use strict';


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
      names += `${ item.name };`;
    }
  }
  return names && names.slice(0, names.length - 2);
}


console.log(getNamesList(data));

Array.prototype.flattern = function () {
  return this.concat.apply([], this);
};

function getNamesListDeclarative(data) {
  return data
    .filter((item) => item.type === 'proper')
    .map((item) => item.list)
    .flattern()
    .map((item) => item.name)
    .join('; ');
}

console.log(getNamesListDeclarative(data));
