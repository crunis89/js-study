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


const macs = [
  { name: '2019 MacPro 16 MVVJ2KH/A', screen: 16, cpu: 'i7', ram: 16, ssd: 512, weight: 2, price: 2698000 },
  { name: '2019 MacPro 13 MV962KH/A', screen: 13.3, cpu: 'i5', ram: 8, ssd: 256, weight: 1.37, price: 1850000 },
  { name: '2019 MacPro 16 MVVM2KH/A', screen: 16, cpu: 'i9', ram: 16, ssd: 1000, weight: 2, price: 3161000 },
  { name: '2020 MacAir 13 MVH42KH/A', screen: 13.3, cpu: 'i5', ram: 8, ssd: 512, weight: 1.29, price: 1689000 },
  { name: '2019 MacPro 15 MV912KH/A', screen: 15.4, cpu: 'i9', ram: 16, ssd: 512, weight: 1.83, price: 2942000 },
];

// * 풀이 조건: for문으로 풀고, 배열 내장함수에 들어갈 함수는 함수 선언문으로 작성된 함수를 넣어라

// 1. 16인치 이상인 맥북의 이름을 모두 출력하라
// 2. rma이 8기가 이상인 맥북의 이름을 모두 출력하라

for(let i = 0; i < macs.length; i++){
  if(macs[i] >= 16) {
    console.log(macs[i].screen);
  };
};

for(let i = 0; i < macs.length; i++) {
  if(macs[i].ram > 8) {
    console.log(macs[i].name);
  };
};