"use strict";
let textInput = document.querySelector(".textInput");
let addTask = document.querySelector(".addTask");
let taskContainer = document.getElementById("taskContainer");
let Tasks = [];
addTask.addEventListener("click", function () {
    let newTask = {
        task: textInput.value
    };
    Tasks.push(newTask);
    showTask();
});
function showTask() {
    let task = ``;
    for (let i = 0; i < Tasks.length; i++) {
        task += `
        <h2 class="task">${Tasks[i].task}</h2>
        <button class="deleteTask" onclick=deleteTask(${i})>X</button>
        `;
    }
    taskContainer.innerHTML = task;
}
function deleteTask(i) {
    Tasks.splice(i, 1);
    showTask();
}
