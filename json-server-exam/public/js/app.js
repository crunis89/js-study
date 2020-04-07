
let todos = [];

const xhr = new XMLHttpRequest();
const $pre = document.querySelector('.todos');



const get = () => {
  xhr.open('GET', '/todos');

  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      callback JSON.parse(xhr.response);
    } else {
      console.error(`${xhr.status}, ${xhr.statusText}`);
    }  
  };
};



const render = () => {
  let html = '';
  todos.forEach(({id, content, completed}) => {
    html += `<li id="${id}">
      <input type="checkbox" ${completed ? 'checked' : ''}
      <span>${content}</span>
      <button>X</button>
      </li>`;
  });

  $todos.innerHTML = html;
};

const getTodos = () => {
  get('/todos',());
}

window.onload = getTodos;