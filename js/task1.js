;(function() {
  'use strict';

  const time = /([01][0-9]|2[0-3]):[0-5][0-9]/;

  const testTime = ['Breakfast at 07:30', 'Dinner at 45:94. WTF? 0_o', '26:49'];

  testingRegExp(time, testTime);

  function testingRegExp(regexp, arrOfTests) {
    arrOfTests.forEach(i => {console.log(regexp.test(i))});
  }

}());