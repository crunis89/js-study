// const arr = [0,1,2,3,4,5,6,7,8,9,10];
const oddArray = [];

const arr = [4,1,2,9,4,5,6,7];
for(let i = 0; i < 7; i+2){
  console.log(arr[i])
}
console.log(arr[3])
// arr.forEach(function(element){
//     if(element%2==1) {
//         oddArray.shift(element);
//     }
// });

// console.log(oddArray); // [ 1, 3, 5, 7, 9 ]

// const x = 1;

// // ①
// function outer() {
//   const x = 10;
//   const inner = function () { console.log(x); }; // ②
//   return inner;
// }

// 함수 outer를 호출하면 중첩 함수 inner를 반환한다.
// 그리고 함수 outer의 실행 컨텍스트는 실행 컨텍스트 스택에서 pop된다.
const innerFunc = outer(); // ③
innerFunc(); // ④ 10
console.log(outer)