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

const result2 = aaa.splice(2,0);

console.log(aaa);
console.log(result2);