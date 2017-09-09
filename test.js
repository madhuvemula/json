'use  strict'
const _ = require('underscore-node');
var person =[{name:"abi" ,age:"25" ,sex:"male"} ,{name:"yuva" ,age:"24" ,sex:"male"} ,{name:"babu" ,age:"23" ,sex:"male"}];
const personid = _.indexBy(person, 'name','age');
console.log(personid)