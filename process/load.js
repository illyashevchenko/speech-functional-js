'use strict';

const { loadEnabled } = require('./');

const actions = [
  { name: 'develop', enabled: true, config: { someProp: '' } },
  { name: 'fix', enabled: true, config: { someProp: '' } },
  { name: 'refactor', enabled: false, config: { someProp: '' } },
  { name: 'fix', enabled: false, config: { someProp: '' } },
  { name: 'deliver', enabled: true, config: { someProp: '' } },
];

console.log(loadEnabled(actions));
