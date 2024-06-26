const Task = {
    dueDate: '',
    task: '',
    label: ''
}

let tasks = document.getElementById("tasks")
let tasksDone = document.getElementById("tasks-done")
let addTask = document.getElementById("add-task-form")
let newTask = document.getElementsByName("new-task")

function createEventListenersOnLoad(){
    Array.from(document.getElementsByClassName("list-item")).forEach(element => {
        element.addEventListener("click", (event) => {
            applyCheckBoxEventLogic(event)
        })
    })
}

function createEventListenerForNewTask(element){
    element.addEventListener("click", (event) => {
        applyCheckBoxEventLogic(event)
    })
}

function applyCheckBoxEventLogic(event){
    console.log(event)
    if (event.target.tagName === "INPUT"){
        let isChecked = event.target.checked
        if(isChecked){
            document.getElementById("tasks-done").appendChild(event.target.parentElement)
        }
        else {
            document.getElementById("tasks").appendChild(event.target.parentElement)
        }
    }
}

function addNewTaskListenerOnLoad(){
    addTask.addEventListener("submit", (element) => {
        element.preventDefault();

        let newTaskObject = createTaskObjectFromForm();

        let newTaskElement = document.createElement("li")
        let newCheckBox = document.createElement("input")
        newCheckBox.checked = false
        newCheckBox.type = "checkbox"
        newCheckBox.className = "list-check"
        
        newTaskElement.appendChild(newCheckBox)
    
        newTaskElement.innerHTML += newTaskObject.task
        
        newTaskElement.className = "list-item"
    
        document.getElementById("tasks").appendChild(newTaskElement)

        createEventListenerForNewTask(newTaskElement)
    })
}

function createTaskObjectFromForm(){
    
    let taskValue = document.getElementById("new-task")
    let newTaskObject = Object.create(Task)

    newTaskObject.task = taskValue.value
    taskValue.value = ""

    return newTaskObject
}

createEventListenersOnLoad()
addNewTaskListenerOnLoad()