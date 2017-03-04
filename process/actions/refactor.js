'use strict';

module.exports = (config) => console.log('Refactor included') || ({
  act() {
    return config.someProp;
  },
});
