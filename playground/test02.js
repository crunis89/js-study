// var x = 10;

// // 암묵적 타입 변환
// // 문자열 연결 연산자는 숫자 타입 x의 값을 바탕으로 새로운 문자열을 생성한다.
// var str = x + '';
// console.log(typeof str, str); 

// let a = 1, b = 2;

// let obj = {
//   a: a,
//   b: b
// }; 


// console.log(obj);

// const values = [1, 2, 3, 4, 5, 6];

// const average = values.reduce((acc, cur, i, {length}) => {
//   return (i === length - 1 ? acc + cur / length : acc + cur)
// }, 0);

// console.log(average); // 3.5


// //최대값구하기
// const values = [1,2,3,4,5];

// // console.log(values.length ? Math.max(...values) : 0); // 5
// // const max = values.reduce((acc, cur, i, arr) => {
// //   acc > cur ? acc : cur
// // },0);


// //중첩배열 평탄화
// const values = [1, [2, 3], 4, [5, 6]];

// const flatten = values.reduce((acc,cur) => {
  
// }, []);
// // [1] => [1, 2, 3] => [1, 2, 3, 4] => [1, 2, 3, 4, 5, 6]

// console.log(flatten); // [1, 2, 3, 4, 5, 6]

const sum = (...args) => {
  console.log(Array.isArray(args));
}
sum(1,2,3);

var arr1 = [1,2];
var arr2 = [3,4];

arr1.concat(arr1, [...arr2]);
console.log(arr1);

const arr = [1,2,3]

var 