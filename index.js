export function GroupBy(array, columns) {
	if (!array.length || !columns.length)
		return;
	var array = array;
	var columns = columns;
	var retArr = {};
	var initialize = function (type) {
		if (type == 'sum' || type == 'avg') {
			for (var str of columns) {
				retArr[str] = 0;
			}
		}
		else if (type == 'min' || type == 'max') {
			for (var str of columns) {
				retArr[str] = array[0][str];
			}
		}
	};
	return {
		sum: function () {
			initialize('sum');
			return array.reduce(function (a, item) {
				for (var str of columns) {
					retArr[str] += item[str];
				}
				return retArr;
			}, columns);
		},
		min: function () {
			initialize('min');
			return array.reduce(function (a, item) {
				for (var str of columns) {
					if (item[str] < retArr[str])
						retArr[str] = item[str];
				}
				return retArr;
			}, columns);
		},
		max: function () {
			initialize('max');
			return array.reduce(function (a, item) {
				for (var str of columns) {
					if (item[str] > retArr[str])
						retArr[str] = item[str];
				}
				return retArr;
			}, columns);
		},
		avg: function () {
			initialize('avg');
			var retObj = array.reduce(function (a, item) {
				for (var str of columns) {
					retArr[str] += item[str];
				}
				return retArr;
			}, columns);
			for (var str of columns) {
				retArr[str] /= array.length;
			}
			return retArr;
		},
		distinctCount:function(){
			
			var retObj = array.reduce(function (a, item) {
				for (var str of columns) {
					if(!retArr.hasOwnProperty(str)) retArr[str]={};
					retArr[str][item[str]]=1;
				}
				return retArr;
			}, columns);

			for (var str of columns){
				retArr[str]=Object.keys(retArr[str]).length;
			}
			return retArr;
		}
	};
}
