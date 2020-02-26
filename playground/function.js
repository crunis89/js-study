// f(x, y) = x + y
function add(x, y) {
  return x + y;
}
// 함수 호출
var result = add(2, 5);

// 함수 add에 인수 2, 5를 전달하면서 호출하면 반환값 7을 반환한다.
console.log(result); // 7


// 함수 표현식

// var doSomething = function () {
//   alert("test");
//   console.log("function expression");
// }

// doSomething();

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

