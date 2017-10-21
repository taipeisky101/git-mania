//Q1-a
console.log("     Q1-a : dogdeer");
function q1a(arr) {
	return result = arr[0] + arr[2];
}
console.log(q1a(['dog', 'cat', 'deer']));

//Q1-b 
console.log("     Q1-b : As in the .html file");

//Q1-c
console.log("     Q1-c : Yes, original coding has error cuz the range of i.");
function q1c(arr) {
	for (i = 0; i < arr.length; i += 1) {
		num = arr[i];
		num2 = Math.pow(num, 2);
		arr[i] = num2;
	}
	return arr
}
console.log(q1c([20, 30]));

//Q1-d
console.log("     Q1-d : The wrong answer is 270.");
function q1d(arr) {
	var sum = 0;
	for (i = 0; i < arr.length; i += 1) {
		sum = sum + arr[i];
	}
	return sum;
}
console.log(q1d([10, 20, 30, 40, 50, 60, 70, 90]));

//Q1-e
console.log("     Q1-e : ");
function q1e(d) {
	var DL = 5; //DL = d.length
	var n = 0;
	var m = d[n];
	for (var i = 1; i < DL; i++) {
		if (d[i] < m) {
			n = i;
			m = d[n];
			console.log(m);
		}
		return ("n =", n, " m = ", m);
	}
	
}

console.log(q1e([25.0, 9.0, 10.0, 25.0, 15.0]));

//Q2
console.log("     Q2 : ");
function sumArray(arr) {
	var sum = 0;
	for (i = 0; i < arr.length; i++) {
		for (j = 0; j < arr[i].length; j++) {
			sum += arr[i][j];
		}
	}
	return sum;
}

console.log(sumArray([[1, 2, 3, 4, 5], [2, 3, 4, 5, 6], 
	[3, 4, 5, 6, 7], [4, 5, 6, 7, 8], [5, 6, 7, 8, 9]]));



