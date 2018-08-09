##aggregate.js
*The javascript library for using aggregate functions on array of objects.*

*Basic functions like SUM, MIN, MAX, AVG, DISTINCT_COUNT for entire javascript objects*


**Example:**
```Javascript
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

```
**Specify columns**
```Javascript
var columns =["used", "instances"];
```

**Initialize object**
```Javascript
var gb = new GroupBy(arr,columns);
```
**or**
```Javascript
var gb = new GroupBy(arr,["used", "instances"]);
```
**Call the aggregate functions**
```Javascript
gb.sum();
gb.min();
gb.max();
gb.avg();
gb.distinctCount();
```