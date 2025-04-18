const inputEl = document.querySelectorAll("input");
const addBtn = document.querySelector(".add-btn");
const listEl = document.querySelector(".list-items");

let listArray = [];
renderList();

function addTodo() {
  if (inputEl[0].value.length > 0 && inputEl[0].value.trim().length > 0) {
    let text = inputEl[0].value;
    let date = inputEl[1].value;
    listArray.push({ text, date });
  }
  renderList();
  inputEl[0].value = "";
}

addBtn.addEventListener("click", addTodo);

function renderList() {
  let todoListHtml = "";

  for (let i = 0; i < listArray.length; i++) {
    const element = listArray[i];
    const { text, date } = element;

    const html = `
    <div>${text}</div>
    <div>${date}</div> 
    <button class="delete-btn" onclick="
        listArray.splice(${i}, 1);
        renderList()")>
        Delete
    </button> 
    `;

    todoListHtml += html;
  }
  listEl.innerHTML = todoListHtml;
}

// function deleteBtn(event) {
//   listArray.splice(event.target.getAttribute("data-index"), 1);
// }

inputEl[0].addEventListener("keydown", function (event) {
  event.key === "Enter" && addTodo();
});

// listEl.addEventListener("dblclick", function (event) {
//   if (event.target.classList.contains("delete-btn")) {
//     const index = event.target.getAttribute("data-index");
//     deleteItem(index);
//   }
// });

// function deleteItem(index) {
//   listArray.splice(index, 1);
//   renderList();
// }
