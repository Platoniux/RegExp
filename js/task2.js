;(function() {
  'use strict';

  const arithmeticOperation = /(-?\d+)(\.\d+)*\s*([+\-*\/])\s*(-?\d+)(\.\d+)*/g;
  const testOperations = ['1 + 3', '-50.40534 / -34.79984', '45*76', 'g = 3'];

  testingRegExp(arithmeticOperation, testOperations);

  function testingRegExp(regexp, arrOfTests) {
    arrOfTests.forEach(item => {console.log(item.match(regexp))});
  }
}());