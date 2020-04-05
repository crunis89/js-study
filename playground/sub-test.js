// 0.함수선언문 함수만드는법
//함수선언문은 함수이름을 무조건 사용해야 한다.
function add(x,y){
  return x + y;
}
//함수호출
add(3,5);
console.log(add);


// 1.객체리터럴쓰느법
const student = {
    name: `HeoYongJe`
};
// 1.1 프로퍼티 동적 할당 하는법
student.age(32);
console.log(student);


// 2.생성자함수 쓰는법
function game(level,sex) {
    this.level = level;
    this.sex = sex;
}
const heo = new game(99,male);


// 3.배열 만드는법, 조회하는법
const num = [1,2,3,4,5];
console.log(num[i]);

