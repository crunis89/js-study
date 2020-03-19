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

var x = 1; //전역객체 프로퍼티
const y = 2; //전역스코프

function foo (a) {
  var x = 3;
  const y = 4;

  function bar (b) {
    const z = 5;
    console.log(a + b + x + y + z);
}
  bar(10);
}

foo(20); // 42

class pperson {
  name = 'Lee';

  constructor(){
    console.log(name);
  }
}
