(function() {
  'use strict';

  const objForURL = {
    country: 'Ukraine', 
    region: 'Kiev'
  };
  
  let templateURL = '/api/countries/{country}/regions/{region}/';

  console.log(createURL(templateURL, objForURL));

  function createURL(pattern, params) {
    for (let key in params) {
      pattern = pattern.replace('{' + key + '}', params[key]);
    }
    return pattern;
  }
}());