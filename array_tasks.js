var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		return arr.map(function(number){
			return number**2;
		})
	},

	sum: function (arr) {
		return arr.reduce(function(total, number){
			return total + number;
		})
	},

	findDuplicates: function (arr) {
		duplicateArray = []
		for(var i = 0; i < arr.length; i++){
			for(var j = 0; j < arr.length; j++){
				if(arr[i] == arr[j] && i !== j && !duplicateArray.includes(arr[i])){
					duplicateArray.push(arr[i]);
				}
			}
		}
		return duplicateArray;
	},

	removeAndClone: function (arr, valueToRemove) {
		filteredArray = [];
		arr.forEach(function(number){
			if(number !== valueToRemove){
				filteredArray.push(number);
			}
		})
		return filteredArray;
	},

	findIndexesOf: function (arr, itemToFind) {
		indexPos = [];
		for(var i = 0; i < arr.length; i++){
			if (arr[i] === itemToFind){
				indexPos.push(i);
			}
		}
		return indexPos;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var total = 0;
		arr.forEach(function(number){
			if(number % 2 === 0){
				total += (number**2);
			}
		})
		return total;
	}

}

module.exports = arrayTasks
