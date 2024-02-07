// let reachedTheEnd = false;
// let end = 5;
// let begin = 0;
// while (!reachedTheEnd) {
// 	begin += 1;
// 	console.log("I have stepped " + begin + " steps");
// 	if (begin == end) {
// 		reachedTheEnd = true;
// 	}
// }

// console.log("Finally");

// let end = 5;
// let begin = 0;
// while (begin <= end) {
// 	begin += 1;
// 	console.log("I have stepped " + begin + " steps");
// }

// console.log("Finally");

// let end = 5;
// let begin = 0;
// while (true) {
// 	begin += 1;
// 	console.log("I have stepped " + begin + " steps");
// 	if (begin == end) {
// 		break;
// 	}
// 	console.log("HERE");
// }

// console.log("Finally");

// let end = 5;
// let begin;
// for (begin = 0; begin <= end; ) {
// 	begin += 1;
// 	console.log("I have stepped " + begin + " steps");
// }
// console.log(begin);
// console.log("Finally");

// while (begin <= end) {
// 	begin += 1;
// 	console.log("I have stepped " + begin + " steps");
// }

let num = 15;
let str = "";

// while (num > 0) {
// 	if (num % 5 == 0 || num % 3 == 0) {
// 		if (num % 3 == 0) {
// 			str += "Fizz";
// 		}
// 		if (num % 5 == 0) {
// 			str += "Buzz";
// 		}
// 		console.log(str);
// 		str = "";
// 		num -= 1;
// 		continue;
// 	}
// 	console.log(num);
// 	num -= 1;
// }

// while (num > 0) {
// 	if (num % 3 == 0) {
// 		str += "Fizz";
// 	}
// 	if (num % 5 == 0) {
// 		str += "Buzz";
// 	}
// 	if (str == "") {
// 		console.log(num);
// 		num -= 1;
// 		continue;
// 	}
// 	console.log(str);
// 	str = "";
// 	num -= 1;
// }

function area(radius) {
	console.log(Math.PI * radius * radius);
}

function areaReturn(radius) {
	return Math.PI * radius * radius;
}

function fizzBuz(min, max) {
	let str = "";

	while (max > min) {
		if (max % 5 == 0 || max % 3 == 0) {
			if (max % 3 == 0) {
				str += "Fizz";
			}
			if (max % 5 == 0) {
				str += "Buzz";
			}
			console.log(str);
			str = "";
			max -= 1;
			continue;
		}
		console.log(max);
		max -= 1;
	}
}

// function factorial(num) {
// 	let hamada = 1;
// 	while (num > 0) {
// 		hamada *= num;
// 		num -= 1;
// 	}
// 	console.log(hamada);
// }

function hamada(arr) {
	if (arr.length == 1) {
		return arr[0];
	} else {
		let lastElement = arr.pop();
		return lastElement + hamada(arr);
	}
}

fizzBuz(20, 30);
factorial(10);



///////////////////////////////////////////////////////////////////////////////////////

let end = 5;
let begin = 0;
while (begin <= end) {
	begin += 1;
	console.log("I have stepped " + begin + " steps");
}

console.log("Finally");


// let beg =0;
// let end = 5;
//  while(end<=5){
// 	beg+=0;
// 	console.log("I have stepped " + beg + " steps")
//  }
//  console.log("finally")