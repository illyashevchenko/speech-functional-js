'use strict';

const { loadEnabled, loadOld } = require('./');

const actions = [
  { name: 'develop', enabled: true, config: { someProp: '' } },
  { name: 'fix', enabled: true, config: { someProp: '' } },
  { name: 'refactor', enabled: false, config: { someProp: '' } },
  { name: 'fix', enabled: false, config: { someProp: '' } },
  { name: 'deliver', enabled: true, config: { someProp: '' } },
];

console.log(loadEnabled(actions));

console.log(loadOld(actions[0]));
