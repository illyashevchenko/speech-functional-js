'use strict';

module.exports = (config) => console.log('Deliver included') || ({
  act() {
    return config.someProp;
  },
});
