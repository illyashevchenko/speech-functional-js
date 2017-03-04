'use strict';

module.exports = (config) => console.log('Develop included') || ({
  act() {
    return config.someProp;
  },
});
