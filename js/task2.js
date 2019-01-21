;(function() {
  'use strict';

  const arithmeticOperation = /(-?\d+)\s*([+\-*\/])\s*(-?\d+)/;
  const testOperations = ['1 + 3', '-50.40534 / -34.79984', '45*76', 'g = 3'];

  testingRegExp(arithmeticOperation, testOperations);

  function testingRegExp(regexp, arrOfTests) {
    arrOfTests.forEach(i => {console.log(regexp.test(i))});
  }
}());