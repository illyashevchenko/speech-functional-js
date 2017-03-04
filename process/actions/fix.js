'use strict';

module.exports = (config) => console.log('Fix included') || ({
  act() {
    return config.someProp;
  },
});
