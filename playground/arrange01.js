function foo() {
    x = 10;
  }
  foo();
  
  console.log(x); // ?


  // apply 와 call

  foo apply (? ,[ 1 , 2]) apply 는 묶어준다 인수를 
      call(x, 1 , 2) call은 그냥 늘어놔준다
  //apply와 call 메소드의 본질적인 기능은 함수를 호출하는 것이다. 
  //apply와 call 메소드는 호출할 함수에 인수를 전달하는 방식만 다를 뿐 동일하게 동작한다.
  

