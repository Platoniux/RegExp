;(function() {
  'use strict';

  const time = /[012][0-9]:[0-5][0-9]/;

  const testTime = ['Breakfast at 07:30', 'Dinner at 45:94. WTF? 0_o'];

  testingRegExp(time, testTime);

  function testingRegExp(regexp, arrOfTests) {
    arrOfTests.forEach(i => {console.log(regexp.test(i))});
  }

}());