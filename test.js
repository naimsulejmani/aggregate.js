var groupBy = require('./index');


var arr = [ 
{"shape":"square","color":"red","used":1,"instances":1}, 
{"shape":"square","color":"red","used":2,"instances":1}, 
{"shape":"circle","color":"blue","used":0,"instances":0}, 
{"shape":"square","color":"blue","used":4,"instances":4}, 
{"shape":"circle","color":"red","used":1,"instances":1}, 
{"shape":"circle","color":"red","used":1,"instances":0}, 
{"shape":"square","color":"blue","used":4,"instances":5}, 
{"shape":"square","color":"red","used":2,"instances":1} ];

console.log('Test Object');
console.log('---------------------------------');
console.log(arr);
console.log('---------------------------------');
var gb = new groupBy.GroupBy(arr,['used','instances']);


console.log('Sum=',gb.sum());
console.log('Max=',gb.max());
console.log('Min=',gb.min());
console.log('Avg=',gb.avg());
console.log('Avg=',gb.distinctCount());


