function Prefixer(prefix) {
    this.prefix = prefix;
  }
  
  Prefixer.prototype.prefixArray = function (arr) {
    // this는 상위 스코프인 prefixArray 메소드 내의 this를 가리킨다.
    return arr.map(x => `${this.prefix}  ${x}`);
  };
  
  const pre = new Prefixer('Hi');
  console.log(pre.prefixArray(['Lee', 'Kim']));

  const arr = [0];

// 배열 요소의 추가
arr[1] = 1;

console.log(arr);
console.log(arr.length); 

arr[100] = 100;

console.log(arr); 
console.log(arr.length); 

const arr2 = [4,5,6,7];
arr2.indexOf(6);
console.log(arr2);

const aaa = [3,4,5,6];

const result2 = aaa.splice(2,1,100);

console.log(aaa);
console.log(result2);

//sort / reverse 사용 문자열일때
const fruits = ['바나나','사과','귤'];

fruits.sort();
console.log(fruits);

fruits.reverse();
console.log(fruits);

const points = [1,2,10,100,5,6];

//숫자일때는 아래와같은 식을 이용하여 정렬
points.sort();
console.log(points);

points.sort((a,b) => a-b);
console.log(points);

//forEach
const numbers = [1,2,3];
let pows = [];

for (let i = 0; i < numbers.length; i++){
  pows.push(numbers[i] ** 2);
}
console.log(pows);
pows =[];


const items = ['item1', 'item2', 'item3'];
const copy = [];

// for (let i=0; i<items.length; i++) {
//   copy.push(items[i]);
// }

items.forEach(function(item){
  copy.push(item);
});

console.log(copy);

const asd = [1,2,3];

console.log(asd[2]);