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




var functionName = function(arg0, arg1, arg2){

  alert("hi");
}
functionName();