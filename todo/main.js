const btnAddTask = document.querySelector("#btnAdd")
const btnOk = document.querySelector("#btnOk")
const btnCancel = document.querySelector("#btnCancel")
const form = document.querySelector("#form")
const modal = document.querySelector("#modal")
const tasks = document.querySelector("#taskList")



const submitForm = (e) => {
    e.preventDefault()
    const task = document.querySelector("#taskName")
    const time = document.querySelector("#time")
    if (!task.value && !time.value) {
        console.log("Enter task nad time")
    }
    else if (!task.value) {
        console.log("Enter task")
    }
    else if (!time.value) {
        console.log("Enter time")
    }
    else {
        modal.open = false
        const taskDiv = document.createElement("div")
        taskDiv.id = "task"
        taskDiv.innerHTML = 
        `
        <div id="desc">
            <h2>${task.value}</h2>
            <p>${time.value}</p>
        </div>
        `
        const actionsDiv = document.createElement("div")
        actionsDiv.id = "actions"
        const btnDel = document.createElement("button")
        btnDel.id = "delete"
        btnDel.innerText = "Delete"
        btnDel.classList.add("curP")
        tasks.append(taskDiv)
        taskDiv.append(actionsDiv)
        actionsDiv.append(btnDel)
        btnDel.addEventListener("click", () => taskDiv.remove())
    }
    
}

const closeModal = (e) => {
    modal.open = false
    e.preventDefault()

}

btnAddTask.addEventListener("click", () => document.querySelector("#modal").open = true)
btnOk.addEventListener("click", submitForm)
btnCancel.addEventListener("click", closeModal)
