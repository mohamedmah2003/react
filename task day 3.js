// // let vactorial = 10
// // let sum =1;
// // let begin = 0

// // while (begin<=vactorial) {
// // begin+=1;
// // sum=sum*begin;
// // }
// // console.log(sum)




// // //************************************************************* */

// // let begin1=1,stoop=11;
// // let sum1=1;

// // for(begin1;begin1<=stoop;begin1+=1)
// // {
// //     sum1*=begin1;
// //  }
// // console.log("sum " + sum1)

// // //************************************************************ */

// // let n =27;
// // let a =0;
// // let aaa =0;
// // for(let i=n ; i>=1 ; i--){
// //     if(i%15==0){
// //         console.log("fezz & buz");
// //         continue;
// //     }
// //     if(i%3==0){
      
// //       console.log("buzz");
// //       continue;
// //     }
// //     if(i%5==0){
// //       console.log("face");
// //       continue;
// //     }
// //     console.log(i);
// //     
// //     
// //     
// // }

// //////////////////////////////////////////////////////////////

// // console.log("***********");
// let height = 6;
// let spacesCount = height - 1;

// for (let currentLine = 1; currentLine <= height; currentLine++) {
//     let starsCount = currentLine - 1;

//     let spaceString = ' '.repeat(spacesCount);
//     let starString = '*'.repeat(starsCount);

//     process.stdout.write(spaceString + starString);

//     spacesCount = spacesCount - 1;
//     console.log();
// }

// /////////////////////////////////////////////////////////////////

// let suggestionNumber = 100;
// let fourth = 0;
// let flag = 0;

// for (let i = 0; i <= suggestionNumber; i++) {
//   for (let j = 0; j <= suggestionNumber; j++) {
//     for (let k = 0; k <= suggestionNumber; k++) {
//       if (i != j && j != k && k != i) {
//         fourth = suggestionNumber - (i + j + k);
//         console.log(fourth + " " + i + " " + j + " " + k);
//         flag = 1;
//       }
//       if (flag == 1) {
//         break;
//       }
//     }
//     if (flag == 1) {
//       break;
//     }
//   }
//   if (flag == 1) {
//   break;
//   }
// }

///////////////////////////////////////////////////////////////

arr = [5, -2, 3, 4, 10] = 20

op = {
	array1: [5, 9, 10, -1, -15],
	array2: [4, 5, 2, -20],
	array3: [5, 9, -10, -15, 29],
};

// let arr = [5, -2, 3, 4, 10] = 20

function sumObject(obj) {
  let sum1 = 0;
  let sum = 0;
  
  for (let key in obj) {
    for (let value of obj[key]) {
      sum =sum+ value;
    }
    sum1 =totalSum+ sum1;
  }
  
  console.log(sum1);
}