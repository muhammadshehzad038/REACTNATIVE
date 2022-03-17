const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");

function newTodo() {

  /*Add Logic for creating a new Todo Item. */
  const n=prompt("please add new TODO")
  const c=document.createElement("c")
  const txtAnswer= document.createTextNode(n,"\n");
  c.appendChild(txtAnswer)
  document.getElementById("todo-list").appendChild(c)

  itemCountSpan.innerHTML=parseInt(itemCountSpan.innerHTML)+ 1;
  uncheckedCountSpan.innerHTML=parseInt(uncheckedCountSpan.innerHTML)+ 1;

}

function removeTodo() {
  /*Add Logic for removing an existing TODO Item */
  /*Below lines can be used to updated the data on frontend */
  list.removeChild(list.lastElementChild);
  let a=0
  if(a==0){
    itemCountSpan.innerHTML=a;
    uncheckedCountSpan.innerHTML=unchecked;

  }
  else
  {
    b--;
    itemCountSpan.innerHTML =a
    unchecked--
    uncheckedCountSpan.innerHTML= uncheckedCountSpan

  }
  list.innerHTML = " ";
  itemCountSpan.innerHTML = "";
  uncheckedCountSpan.innerHTML = "";
}
