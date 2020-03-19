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

// 제어문 문제
// var x = 15;
// if (x > 10 && x < 20){
// console.log(x);
// }

// for (var i = 0; i < 10; i++) {
//   if (i % 2 === 0)
//   console.log(i);
// }

for (even = 0; even < 10; even++) {
  if (!(even % 2)) console.log(even);
}

let bar = 123;
console.log(bar);

var str = "";

for (var i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    str += i;
  }
}
console.log(str);

for(var i = 1; i <= 6; i++){
  for(var j = 1; j <= 6; i++)
  if(i + j === 6){
    console.log(['i','+','j']);
  }
  
}
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

// const person = {
//   // 데이터 프로퍼티
//   firstName: 'Ungmo',
//   lastName: 'Lee',

//   get fullName() {
// 	return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(name) {
// 	[this.firstName, this.lastName] = name.split(' ')	; //['foo', 'bar']
//   },
// };
// person.fullName = 'foo bar';
// console.log(person);


// const arg = {
//   0:1,
//   0:2,
//   0:3,
//   length:3;
// }

// for (let i = 0; i < arg.length; i++){
//   console.log(arg);
// }

// function sum() {
//   // console.log(arguments);
  
//   let sum = 0;
//   for(let i = 0; i < arguments.length; i++) {
//   // console.log();
//   sum += arguments[i];
//   }

//   return sum;
// }
// console.log(sum(1,2,3,4,5));

// function linearSearch(array, target) {
 
//   for(let i = 0; i < array.length; i ++){
//     if(array[i] === target) return i;
//   }
//   return -1;
// }

// function linearSearch(array, target) {
//   let a = '';
//   for(let i = 0; i < array.length; i ++){
//     if(array[i] === target) a = i;
//     else if(a === '') a = -1;
//   }
//   return a;
// }

// // function linearSearch(array, target) {
// //   let a = '';
// //   for(let i = -1; i < array.length; i ++){
// //     if(array[i] === target) return a = i;
// //     else if(a === '') a = -1;
// //   }
// // }

// console.log(linearSearch([1, 2, 3, 4, 5, 6], 1)); // 0
// console.log(linearSearch([1, 2, 3, 4, 5, 6], 3)); // 2
// console.log(linearSearch([1, 2, 3, 4, 5, 6], 5)); // 4
// console.log(linearSearch([1, 2, 3, 4, 5, 6], 6)); // 5
// console.log(linearSearch([1, 2, 3, 4, 5, 6], -1)); // -1

// function Circle(radius) {
//   // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
//   this.radius = radius;
//   this.getDiameter = function () {
//     return 2 * this.radius;
//   };
// }

// const circle3 = Circle(15);
// console.log(circle3); // undefined

// 일반 함수로서 호출된 Circle내의 this는 전역 객체를 가리킨다.



// *위에서부터 무조건 순차적으로 실행되는 것이 아닌, 일단 선언만하고ㅡ 실행은 호출할때 실행된다 
function Hello(row) {
  console.log(this); // new연산자를 통한 생성자 함수를 사용하면 빈객체가 먼저 함수최상단에서 만들고 this에 바인딩함

  this.row2 = row; // 객체에 동적으로 프로퍼티 키 와 값을 추가

  console.log(this); // 잘들어갔나 확인

  this.getDiameter = function () { // this에 들어가있는 {row2 :5}객체에 메소드 추가/프로퍼티에 함수가 들어가서 메소드임
    return 10 * this.row2; //마지막 메소드를 실행할때 this에 {row2:5, getDiameter : function //아직까지는 안에 뭐가있는지 모르기 떄문에}
  };

  console.log(this);

}
const hello1 = new Hello(5); //호출 순서2번
console.log(hello1.getDiameter()); // 함수값을 실행했을때 this가 함수최상단에서 자신을 호출한 객체를 바인딩하고,
                                  // 함수값을 계산하고 그값이 나옴

// let c = 3;

const x = {};

x.a = 1;

console.log(x.a);
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

var name = 'Lee';
function sayH1(){
  console.log(`Hi, ${name}`);
}
name = `Kim`;
sayH1();

function makeCounter(predicate) {
  let counter = 0;
  return function () {
    counter = predicate(counter);
    return counter;
  };
}

function increase(n) {
  return ++n;
}

function decrease(n) {
  return --n;
}

console.log(counter(increase));
