'use strict';

const { assoc, map, prop } = require('ramda');

console.log(assoc('isDeclarative', true, { javascript: true }));
// { javascript: true, isDeclarative: true }

const setDeclarative = assoc('isDeclarative', true);
console.log(setDeclarative({ javascript: true }));

const setIsDeclarative = assoc('isDeclarative');
console.log(setIsDeclarative(true, { javascript: true }));

const setToBeDeclarative = setIsDeclarative(true);
setToBeDeclarative({ javascript: true });

const names = map(prop('name'));

prop('name', { name: 'Alice' }); // 'Alice'
const name = prop('name');
name({ name: 'Alice' }); // 'Alice'

names([{ name: 'Alice' }, { name: 'Bob' }]); // ['Alice', 'Bob']
