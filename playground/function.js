// return : 반환하다

// f(x, y) = x + y (뒤에 x + y 는 매개변수 파라미터라고 불린다)
function add() {
  return ;
}
console.log(add());
// 함수 호출
// var result = add(2, 5);

// 함수 add에 인수 2, 5를 전달하면서 호출하면 반환값 7을 반환한다.
// console.log(result); // 7


// 함수 표현식

var doSomething = function () {

  console.log("function expression");
}
doSomething();


// var functionName = function(arg0, arg1, arg2){

//   alert("hi");
// }
// functionName();

var x = 'global';

function foo() {
  var x = 'local';
  console.log(x); // ①
}

foo();

console.log(x); // ②


// var를 스코프내에 중복으로 사용했을 때
function foo() {
  var x = 1;
  // var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
  // 아래 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
  var x = 2;
  console.log(x); // 2
}
foo();


// [객체복사]
// 객체복사에는 얕은복사 깊은복사가 있다.

// var a 
// $.ajax({
//   method: 'POST',
//   url: '/user',
//   data: { id: 1, name: 'Lee' },
//   cache: false
// });

// (function () {
//   // ...
// })();

function outer() {
  var x = 1;

  // 중첩 함수
  function inner() {
    var y = 2;
    // 외부 함수의 변수를 참조할 수 있다.
    console.log(x + y); // 3
  }

  inner();
}

outer();

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