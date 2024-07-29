//js file with be coded


const btn = document.getElementById("btn");
const output = document.getElementById("task");

btn.onclick = function(){
    if(document.querySelector("#addtask input").value.length == 0){
        alert("Please Enter a task")
    }else{
        document.querySelector("#task").innerHTML += 
       `<div class="tasks">
       <span id="taskname">${document.querySelector("#addtask input").value}
       </span>
       <button class="delete">
        <i class="fa-solid fa-trash-can"></i>
       </button>
       </div>`;
    }

    var current_tasks = document.querySelectorAll(".delete");
for(var i=0; i<current_tasks.length; i++){
    current_tasks[i].onclick = function(){
    this.parentNode.remove();
}
} 
var tasks = document.querySelectorAll(".tasks");
for(var i=0; i<tasks.length; i++){
    tasks[i].onclick - function(){
        this.classList.toggle('completed');
    }
 }
 document.querySelector("#addtask input").value = "";
};




