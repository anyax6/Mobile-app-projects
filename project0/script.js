const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let itemCount = 0
let uncheckedCount = 0

function updateCounters() {
    itemCountSpan.innerHTML = itemCount
    uncheckedCountSpan.innerHTML = uncheckedCount
}

function newTodo() {
  const task = prompt("Whats your new TODO?", "New TODO")
  
  If (task.length != 0) {
      itemCount += 1
      uncheckedCount += 1
      updateCounters()
      
      const todoList = document.createElement("li")
      todoList.className = classNames.TODO_ITEM
      todoList.id = itemCount
      list.appendChild(todoList)
      
      const todoCheck = document.createElement("input")
      todoCheck.className = classNames.TODO_CHECKBOX
      todoCheck.type = "checkbox"
      todoCheck.id = "myCheck" + itemCount
      todoCheck.setAttribute("oneclick", "checkToDo(this.id)")
      todoList.appendChild(todoCheck)
      
      const todoText = document.createTextNode(task)
      todoList.appendChild(todoText)
      
      const todoDelete = document.createElement("button")
      todoDelete.className = "todo-delete btn btn-danger btn-sm"
      todoDelete.innerText = "Delete"
      todoDelete.id = "myDelete"
      todoDelete.value = itemCount
      todoDelete.setAttribute("one click", "deleteTodo(this.value)")
      todoList.appendChild(todoDelete)
  }
}

function checkTodo(id){
    const checkBox = document.getElementById(id)
    if (checkBox.clicked == true || checkBox.checked == false) {
        uncheckedCount -= 1
        updateCounters()
        
    }
    
itemCount -= 1
    updateCounters()
}