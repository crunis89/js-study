// var x = 1;
// var y = 2;

// // do something
// var z = 0;
// z = x;

// console.log(x, y); // 2 1


// var first = '1';
// var last = 'Lee';

// // ES5: 문자열 연결
// console.log('My name is ' + first + ' ' + last + '.');

// var key = Symbol('key');
// console.log(typeof key); // symbol

// var i = 5;
// var numKind;

// if (i < 5){
//   numKind = '작음'
// }
// else if (i > 5){
//   numKind = '큼'
// }
// else (i == 5);{
//   numKind = '같음'
// };

// console.log(numKind);

// var x = 5;
// console.log (x);
// x++;
// console.log(x);

// var y = true;
// +true;
// console.log(y);
// var a = 'Hello';
// ('Hello').toUpperCase;
// console.log(a);

// const o = {};
// o.a = 3;
// console.log(o);


// 참조에 의한 전달
var person = {
  name: 'Lee'
};

// 참조 값을 복사
var copy = person;

copy.age = 1;

console.log(copy);
console.log(person);


var person1 = {
  name: 'Lee'
};

var person2 = {
  name: 'Lee'
};

console.log(person1 === person2); // ①
console.log(person1.name === person2.name); // ②