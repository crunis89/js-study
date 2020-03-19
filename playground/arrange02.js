// 실행 컨텍스트


// 모든 선언문 먼제 실행 ) 런타임 이전에 - >코드의 평가

// 전역 변수 선언
// const x = 1;
// const y = 2;

// // 함수 정의
// function foo(a) {
//   // 지역 변수 선언
//   const x = 10;
//   const y = 20;

//   // 메소드 호출
//   console.log(a + x + y); // 130
// }

// // 함수 호출
// foo(100);

// // 메소드 호출
// console.log(x + y); // 3

// var x = 1; //전역객체 프로퍼티
// const y = 2; //전역스코프

// function foo (a) {
//   var x = 3;
//   const y = 4;

//   function bar (b) {
//     const z = 5;
//     console.log(a + b + x + y + z);
// }
//   bar(10);
// }

// foo(20); // 42

// class pperson {
//   name = 'Lee';

//   constructor(){
//     console.log(name);
//   }
// }

// function add(x,y){
//   return x + y;
// }
// var result = add(3,5);
// console.log(result);

// function multiply(x,y){
//   return ;
// }
// console.log(multiply(3,5));


function factorial(n){
  if (n <= 1) return 1;
  return n * factorial(n-1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

var x = 10;

x /= 5;
console.log(x);