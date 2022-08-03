const textAdd = document.querySelector(".textAdd");
const addBtn = document.querySelector(".addBtn");
let todoList = document.querySelector(".todoList");

addBtn.addEventListener("click", function () {
  if (textAdd.value == 0) {
    alert("Please add a task!");
  } else {
    let template = `<div class="listItems">${textAdd.value} <button class="removeBtn" onclick="removeTask()"><i class="fa-solid fa-trash-can"></i></button> </div>`;
    todoList.innerHTML += template;
    textAdd.value = "";
  }
});

function removeTask() {
  const removeBtn = document.querySelector(".removeBtn");
  removeBtn.parentElement.remove();
  // console.log(addBtn.parentElement.parentNode.parentElement.parentElement)
}