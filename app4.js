console.log("Hello Alex Lee 4");
console.log(""); 
//print out in html by using document.write();

// Q1-1
function rotateLeft3(arr) {
	var b = arr.splice(0, 1)[0];
	arr.push(b);
	return arr;
}
	console.log("  Q1-1--------------------");
	console.log(rotateLeft3([1, 2, 3])); //→   [2, 3, 1]
	console.log(rotateLeft3([5, 11, 9]));  //→   [11, 9, 5]
	console.log(rotateLeft3([7, 0, 0])); //→   [0, 0, 7]
		// .splice(start, # move) , splice is array

// Q1-2
function rotateLeft4(arr) {
	var d = [arr[1], arr[2], arr[0]];
	return d;
}
	console.log("  Q1-2--------------------");
	console.log(rotateLeft4([1, 2, 3]));  
	console.log(rotateLeft4([5, 11, 9])); 
	console.log(rotateLeft4([7, 0, 0])); 
		// .splice(start, # move) , splice is array

// Q2
function reverse3(arr) {
	arr.reverse();
	return arr;
}
	console.log("  Q2--------------------");
	console.log(reverse3([1, 2, 3])); //→   [3, 2, 1]
	console.log(reverse3([5, 11, 9])); //→   [9, 11, 5]
	console.log(reverse3([7, 0, 0])); //→   [0, 0, 7]

// Q3
function has23(arr) {
	var n = "2";
	var m = "3";
	e = false;
	for (i = 0; i < (arr.length - 1); i++) {
	var c = ((arr[i] == m) || (arr[i] == n));
	var d = ((arr[i + 1] == m) || (arr[i + 1] == n));
	var e = e || (c || d);
	}
	return e;
}
	console.log("  Q3--------------------");
	console.log(has23([2, 5])); //→   true
	console.log(has23([4, 3])); //→   true
	console.log(has23([4, 5])); //→   false

// Q4
function fix23(arr) {
	var n = "2";
	var m = "3";
		for (i = 0; i < (arr.length - 1); i++) {
			if ((arr[i] == n) && (arr[i + 1] == m)) {
			arr.splice([i + 1], 1, 0);
			}
		} return arr;
}
	console.log("  Q4--------------------");
	console.log(fix23([1, 2, 3]));   //→   [1, 2, 0] 
	console.log(fix23([2, 3, 5]));   //→   [2, 0, 5] 
	console.log(fix23([1, 2, 1]));   //→   [1, 2, 1]

// Q5
function maxTriple(arr) {
	// var f = arr[0];
	// var m = arr[parseInt(arr.length/2)];
	// var l = arr[arr.length - 1];
	for (i = 0; i < (arr.length - 1); i++) {
		if (arr[i] > arr[i + 1]) {
			arr.splice(i + 2, 0, arr[i]);
			arr.splice(i, 1);
		}
		 
	}
	return arr.slice(-1)[0];
}
	console.log("  Q5--------------------");
	console.log(maxTriple([1, 2, 3]));  //→   3 
	console.log(maxTriple([1, 5, 3]));   //→   5 
	console.log(maxTriple([5, 2, 3]));   //→   5

// Q6
function swapEnds(arr) {
	if (arr.length > 1) {
	var k = arr[0];
	var l = arr[arr.length - 1];
	arr.shift();
	arr.unshift(l);
	arr.pop(); 
	arr.push(k);
	return arr;
} else {
	return "The array length is less than 2. "
}
}
	console.log("  Q6--------------------");
	console.log(swapEnds([1, 2, 3, 4]));   	//→   [4, 2, 3, 1] 
	console.log(swapEnds([1, 2, 3]));   		//→   [3, 2, 1] 
	console.log(swapEnds([8, 6, 7, 9, 5]));   //→   [5, 6, 7, 9, 8]
	console.log(swapEnds([7]));

// Q7
function unlucky1(arr) {
	var l = 1;
	var m = 3;
	e = false;
	for (i = 0; i < 2; i++) {
	var c = ((arr[i] == l) && (arr[i + 1] == m));
	//for (i = arr.length - 2; i < (arr.length); i++) {
	var d = ((arr[arr.length - 2] == l) && (arr.length - 1 == m));
	var e = e || (c || d);
	}
	return e;
}
	console.log("  Q7--------------------");
	console.log(unlucky1([1, 3, 4, 5]));   //→   true 
	console.log(unlucky1([2, 1, 3, 4, 5]));   //→   true 
	console.log(unlucky1([1, 1, 1]));   //→   false

// Q8
function front11(arr1, arr2) {
	var f = arr1[0];
	var g = arr2[0];
	if (arr1[0] == null) {
		arr3 = [g];
	} else if (arr2[0] == null) {
		arr3 = [f];
	} else { //((arr1 !== []) && (arr2 !== [])) 
		arr3 = [f, g];
	} return arr3;
}
//or use arr.length == 0
	console.log("  Q8--------------------");
	console.log(front11([1, 2, 3], [7, 9, 8]));   //→   [1, 7] 
	console.log(front11([1], [2]));   //→   [1, 2] 
	console.log(front11([1, 7], []));   //→   [1]

// Q9
function isEverywhere(arr, value) {
	var v = value;
	e = true;
	for (i = 0; i < arr.length - 1; i++) {
	var c = ((arr[i] == v) || (arr[i + 1] == v));
	var e = e && c;
	}
	return e;
}
	console.log("  Q9--------------------");
	console.log(isEverywhere([1, 2, 1, 3], 1));   //→   true 
	console.log(isEverywhere([1, 2, 1, 3], 2));   //→   false 
	console.log(isEverywhere([1, 2, 1, 3, 4], 1));   //→   false

// Q10
function  tenRun(arr) {
	for (k = 1; k < 10; k++) {
		n = 10 * k;
		for (i = 0; i < arr.length - 1; i++) {
			if (arr[i] == n && (arr[i + 1] !== n + 10)) {
				arr.splice(i + 1, 1, n);
			}
		}
	}
	return arr;
}
//Another way is % 10 == 0
//newArr.push(arr[i]);
	console.log("  Q10--------------------");
	console.log(tenRun([2, 10, 3, 4, 20, 5]));   //→   [2, 10, 10, 10, 20, 20] 
	console.log(tenRun([10, 1, 20, 2]));   //→   [10, 10, 20, 20] 
	console.log(tenRun([10, 1, 9, 20]));   //→   [10, 10, 10, 20]

// Q11
function twoTwo(arr) {
	var v = 2;
	var e = false;
	arr.push("a");
	arr.splice(0, 0, "a");
	for (i = 0; i < arr.length - 1; i++) {
		c = ((arr[i] == v) && ((arr[i - 1] !== v) && (arr[i + 1] !== v)));
		e = e || c;
	}
		return !e;
}
	console.log("  Q11--------------------");
	console.log(twoTwo([4, 2, 2, 3]));   //→   true 
	console.log(twoTwo([2, 2, 4]));   //→   true 
	console.log(twoTwo([2, 2, 4, 2]));   //→   false
	console.log(twoTwo([2, 2, 3, 3, 4, 2, 2])); //→   true

// Q12
function shiftLeft(arr) {
	var m = arr[0];
	arr.shift(arr.push(m));
	return arr;
}
	console.log("  Q12--------------------");
	console.log(shiftLeft([6, 2, 5, 3]));   //→   [2, 5, 3, 6] 
	console.log(shiftLeft([1, 2]));   //→   [2, 1] 
	console.log(shiftLeft([1]));   //→   [1]

// Q13
function evenOdd(arr) {
	var arr1 = [];
	var arr2 = [];
	for (i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			arr1.push(arr[i]);
		} else {
			arr2.push(arr[i]);
		}
	}
	return arr1.concat(arr2);
}
	console.log("  Q13--------------------");
	console.log(evenOdd([1, 0, 1, 0, 0, 1, 1]));   //→   [0, 0, 0, 1, 1, 1, 1] 
	console.log(evenOdd([3, 3, 2]));   //→   [2, 3, 3]
	console.log(evenOdd([2, 2, 2]));   //→   [2, 2, 2]

// Q14
function fizzBuzz(s, d) {
	var arr = [];
	for (i = 0; i < d - 1; i++) {
		if ((i + 1) % 15 == 0) {
			arr[i] = "BizzBuzz";
		} else if ((i + 1) % 3 == 0) {
			arr[i] = "Fizz";
		} else if ((i + 1) % 5 == 0) {
			arr[i] = "Buzz";
		} else {
			arr[i] = i + 1;
		}
	} return arr;
}
	console.log("  Q14--------------------");
	console.log(fizzBuzz(1, 6));   //→   ["1", "2", "Fizz", "4", "Buzz"]
	console.log(fizzBuzz(1, 8));   //→   ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7"]
	console.log(fizzBuzz(1, 11));   //→   ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz"]

//Q15
function countClumps(arr) {
	var l = arr.length; //var, let, cons;
	var c = 0;
	//var arr2 = [];
	for (i = 0; i < l - 1; i++) {
		if (arr[i] == arr[i + 1]) {
			if (i == 0) {
			c = 1;//arr2 = arr2.concat(arr[i]);
			} else if (arr[i] !== arr[i - 1]) {
			c++;//arr2 = arr2.concat(arr[i]);
			}
		}
	}	
	return c;
}

	console.log("  Q15--------------------");
	console.log(countClumps([1, 2, 2, 3, 4, 4]));   //→   2 
	console.log(countClumps([1, 1, 2, 1, 1]));   //→   2 
	console.log(countClumps([1, 1, 1, 1, 1]));   //→   1
	console.log(countClumps([1, 2, 2, 2, 1])); 


	


