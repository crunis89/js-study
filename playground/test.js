// console.log(Array.from({ length: 100 }, (v,i) => i ));

// const fruits = ['banana', 'Orange', 'Apple'];

// 오름차순(ascending) 정렬 / 앞에 대문자는 숫자(순서가능한)로 표기하자 그래서 대문자로 순서를 알 수 있다.
// fruits.sort();

// sort 메소드는 원본 배열을 직접 변경한다.
// console.log(fruits); // ['Apple', 'Orange', 'banana']

// const pows = [];
// Array.forEach((v, i, arr) => {
//   pows[i] = v ** 2;
// });

// console.log(pows);

// [1, 2, 3].forEach(console.log);

// console.log(Math.pow(2, 2)); // 2 ** 2

// function render(){

// }
// let html = '';
//   tods.forEach(function (todo){

//   )};

// return html;

// const todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function render() {
//   let html = '';

//   todos.forEach(function (todo) {
//     html+= `<li id="$[todo.id]">
//     <label><input type="checkbox">${todo.content}</label>
//   </li>`
//   });

//   return html;
// }

// console.log(render());
/*
<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>
*/


// const todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function getValues(key) {
//   return todos.map(todo => todo[key]);
// }

// console.log(getValues('id')); // [3, 2, 1]
// console.log(getValues('content')); // [ 'HTML', 'CSS', 'Javascript' ]
// console.log(getValues('completed')); // [ false, true, false ]


// const todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function sortBy(key) {
//   todos.sort((a,b) => a[key] > b[key] ? :  : a[key] < b[kry] );
// }0

// console.log(sortBy('id'));
/*
[
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false }
]
*/
// console.log(sortBy('content'));
/*
[
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/
// console.log(sortBy('completed'));
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true }
]
*/


// // const로 사용한 배려=열
// let todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function addTodo(newTodo) {
//   todos = [newsTodo, ...todos];
// }

// addTodo({ id: 4, content: 'Test', completed: false });

// console.log(todos);
// /*
// [
//   { id: 4, content: 'Test', completed: false },
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ]
// */
function sayHi(){
  console.log(`hi`);
}

const obj = {
  sayHi};

console.log(obj.this);

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function removeTodo(id) {
  todos = todos.filter(todo => todo.id !== id );
  return todos;
}

removeTodo(2);

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/


// let todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];
// //forEach는 리턴값이 무조건 undefind가 나온다
// function toggleCompletedById(id) {
//   todos.forEach(todo => {
//     if(todo.id === id) {
//       todo completed = !todo.completed
//     };
//   })
// }

// toggleCompletedById(2);

// console.log(todos);
// /*
// [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: false },
//   { id: 1, content: 'Javascript', completed: false }
// ]
// */


// let todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function toggleCompletedAll() {
//   // todos.forEach(todo => todo.completed =true);
//   // return todos;
//   return todos.map(todo => todo.completed =true);
// }

// toggleCompletedAll();

// console.log(todos);
// /*
// [
//   { id: 3, content: 'HTML', completed: true },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: true }
// ]
// */


// let todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function countCompletedTodos() {
//   return todos.filter(todo => todo.completed === true).length;

// }

// console.log(countCompletedTodos()); // 1


// let todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function getMaxId() {
//   // return  Math.max(...todos.map(todo => todo.id));
//   return todos.length ? Math.max(...todos.map(todo => todo.id)) : 0;

// }

// console.log(getMaxId()); // 3

// 0.함수선언문 함수만드는법
// 1.객체리터럴쓰느법
// 1.1 프로퍼티 동적 할당 하는법
// 2.생성자함수 쓰는법
// 3.배열 만드는법, 조회하는법


// circle1.radius = radius;

function Student(name, age) {
  this.name = name;
  this.age = age;
}

const park = new Student('박기태', 32);
const yu = new Student()
console.log(park);


function Class1(student, age) {
  this.student = student;
  this.age = age;
}

const check = new student(10, 20);

console.log(check);



function add(x,y){
  return x + y;
}
var result = add(3,5);

console.log(result);



const person={
  name: 'Lee'
};

person.age = 20;

console.log(person);

function add(){
  return;
}
console.log(add);

const age = {
  old: 30,
  increase: function() {
    this.old++;
  }
};

people.age = 30;

console.log(people);

function add() {
  return x+y;
}

const student = {
  name:
}