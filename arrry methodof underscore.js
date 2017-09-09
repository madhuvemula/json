'use strict'
const _ =require('underscore-node');
var persondetalis = [{name: 'madhu', age: 23}, {name: 'hari', age: 25}, {name: 'ashock', age: 26}];
var x = _.indexBy(persondetalis, 'age');
var y = _.sortBy(persondetalis,'name');
var z = _.pluck(persondetalis,'name');

console.log(y)
console.log(x)
console.log(z)