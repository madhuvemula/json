'use strict'
const _ =require('underscore-node');
var persondetalis = [{'name': 'madhu', 'age': '23'}, {'name': 'hari', 'age': '26'}, {'name': 'ashock', 'age': '24'}];
var x = _.indexBy(persondetalis, 'age');
var y = _.sortBy(persondetalis,'name');
var z = _.pluck(persondetalis,'name');
var a = _.size(persondetalis);
var b =_.shuffle(persondetalis);
var c =_.sample(persondetalis);
var d = _.groupBy(fobj,'length');
var e= _.sortedIndex(persondetalis);
var fobj=[['yuva','naga','balu'],[20,30,18]];
var f = _.object(fobj);
var g =_.sortedIndex(persondetalis,{'name':'madhu','age':'50'},'age');
var h = _.keys(persondetalis);
var i = _.values(persondetalis);
console.log(h)
console.log(g)
console.log(f)
console.log(e)
console.log(d)
console.log(c)
console.log(b)
console.log(a)
console.log(y)
console.log(x)
console.log(z)