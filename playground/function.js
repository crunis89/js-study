// // return : 반환하다

// // f(x, y) = x + y (뒤에 x + y 는 매개변수 파라미터라고 불린다)
// function add() {
//   return ;
// }
// console.log(add());
// // 함수 호출
// // var result = add(2, 5);

// // 함수 add에 인수 2, 5를 전달하면서 호출하면 반환값 7을 반환한다.
// // console.log(result); // 7


// // 함수 표현식

// var doSomething = function () {

//   console.log("function expression");
// }
// doSomething();


// // var functionName = function(arg0, arg1, arg2){

// //   alert("hi");
// // }
// // functionName();

// var x = 'global';

// function foo() {
//   var x = 'local';
//   console.log(x); // ①
// }

// foo();

// console.log(x); // ②


// // var를 스코프내에 중복으로 사용했을 때
// function foo() {
//   var x = 1;
//   // var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
//   // 아래 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
//   var x = 2;
//   console.log(x); // 2
// }
// foo();


// // [객체복사]
// // 객체복사에는 얕은복사 깊은복사가 있다.

// // var a 
// // $.ajax({
// //   method: 'POST',
// //   url: '/user',
// //   data: { id: 1, name: 'Lee' },
// //   cache: false
// // });

// // (function () {
// //   // ...
// // })();

// function outer() {
//   var x = 1;

//   // 중첩 함수
//   function inner() {
//     var y = 2;
//     // 외부 함수의 변수를 참조할 수 있다.
//     console.log(x + y); // 3
//   }

//   inner();
// }

// outer();
// // var all =1;
// // var odd =2;
// // var even =3;

// // function repeat(n, type){
// //   for (var i = 0; i < n; i++){ 
// //     if (type === all);
// //     else if(type === odd) 
// //     all(i);
// //   }  

// //   function all(num){
// //     console.log(num);
// //   }  

// //   function odd(num){
// //   if (num % 2) console.log(num);
// //   }

// //   function even(num){
// //   if (num % 2 === 0) console.log(num);
// //   }  
// // }
// // repeat(5);

// // 비동기
// console.log(1);

// setTimeout (function(){
//   console.log('hello');
// }, 0);

// console.log(2);

// var x = 'global';

// function foo() {
//   var x = 'local';
//   console.log(x); // ①
// }

// foo();

// console.log(x); // ②


// let i = 10;

// // for문에서 선언한 i는 전역 변수이다. 이미 선언된 전역 변수 i가 있으므로 중복 선언된다.
// for (let i = 0; i < 5; i++) {
//   console.log(i); // 0 1 2 3 4
// }

// // 의도치 않게 변수의 값이 변경되었다.
// console.log(i); // 5

// var x = 5;
// // var f = 2;
// function foo() {
//   var x = 7;
//   bar = function(f){
//     console.log(f);
//   };
//   bar(x);
//   console.log('ddddd');
// };
// foo();

// for (var i = 1; i <= 6; i++) {
//   for (var j = 1; j <= 6; j++) {
//     if (i + j === 6) {
//       console.log('[' + i + ','+ j + ']');
//     }
//   }
// }
// var x = 'gloabl';

// function foo() {
//   var x = 'local';
//   console.log(x); // ①
//   return x;
  
// }

// foo();
// console.log(x); // gloabl

// const person = {
//   name: 'Lee'
// };

// // 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 취득한다.
// console.log(Object.getOwnPropertyDescriptor(person, 'nameT'));

const person = {
  // 데이터 프로퍼티
  firstName: 'Ungmo',
  lastName: 'Lee',

  get fullName() {
	return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
	[this.firstName, this.lastName] = name.split(' ')	; //['foo', 'bar']
  },
};
person.fullName = 'foo bar';
console.log(person);
