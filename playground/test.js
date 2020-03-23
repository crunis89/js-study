// console.log(Array.from({ length: 100 }, (v,i) => i ));

const fruits = ['banana', 'Orange', 'Apple'];

// 오름차순(ascending) 정렬 / 앞에 대문자는 숫자(순서가능한)로 표기하자 그래서 대문자로 순서를 알 수 있다.
fruits.sort();

// sort 메소드는 원본 배열을 직접 변경한다.
console.log(fruits); // ['Apple', 'Orange', 'banana']

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

// map 연습문제
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


//filter 연습문제, 삭제할때는 대부분 필터를 쓰면된다

// let todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function removeTodo(id) {
//   todos = todos.filter(todo => todo.id !== id )
// }

// removeTodo(2);

// console.log(todos);
// /*
// [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 1, content: 'Javascript', completed: false }
// ]
// */


// //4번 예제 추가하기
// let todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function addTodo(newTodo) {
//   todos = [newTodo, ...todos];
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

// //8번 true인 요소갯수 구하기
// let todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function countCompletedTodos() {
//   return todos.filter(todo => todo.completed).length;
// }

// console.log(countCompletedTodos()); // 1


// 9번 프로퍼티 값 중 최대값 구하기
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getMaxId() {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) : 0;
}

console.log(getMaxId()); // 3