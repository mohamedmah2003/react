let n =10
while(n>=1){
if( n%3==0 || n%5==0 ){
    n--
    continue
}else{
    console.log(n)
    n--
}
}

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
	return Math.PI * radius * radius;
}

function s (n,o){
    for(let i=o ; i>=n ; i--){
        if(i%15==0){
            console.log("face & buz");
            continue;
        }
        if(i%3==0){
          
            console.log("buz");
          continue;
        }
        if(i%5==0){
            console.log("face");
          continue;
        }
        console.log(i);
        
    }
    }
    
    s (1,10);
    // console.log("b");