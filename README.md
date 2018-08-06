# aggregate.js
The javascript library for using aggregate functions on array of objects.

Basic functions like SUM, MIN, MAX, AVG for entire javascript objects


Example:
----------------------------------------------------
var arr = [
						{"shape":"square","color":"red","used":1,"instances":1},
						{"shape":"square","color":"red","used":2,"instances":1},
						{"shape":"circle","color":"blue","used":0,"instances":0},
						{"shape":"square","color":"blue","used":4,"instances":4},
						{"shape":"circle","color":"red","used":1,"instances":1},
						{"shape":"circle","color":"red","used":1,"instances":0},
						{"shape":"square","color":"blue","used":4,"instances":5},
						{"shape":"square","color":"red","used":2,"instances":1}
					];
					
#specify columns 
var columns =["used", "instances"];

#initialize object
var gb = new GroupBy(arr,columns);
# or
var gb = new GroupBy(arr,["used", "instances"]);

# call the aggregate functions
gb.sum();
gb.min();
gb.max();
gb.avg();
