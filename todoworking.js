var add_button = document.getElementById("add_button");
var todo_list = document.getElementById("todo_list");
var done_list = document.getElementById("done_list");
var input_todo = document.getElementById("input_todo");
var clear_all = document.getElementById("clear_button");
var clear_todo = document.getElementById("clear_todo");
var clear_done = document.getElementById("clear_done");
var due = document.getElementById("due");
var count = localStorage.clickcount;
var todo_xs = document.getElementsByClassName("todo_xs");
var todo_mains = document.getElementsByClassName("todo_mains");
var todo_progs = document.getElementsByClassName("todo_progs");
var todo_dones = document.getElementsByClassName("todo_dones");


function remove_todo() {
    var temp_parent = this.parentNode;
    temp_parent.parentElement.removeChild(temp_parent);
    count = count-1;
}

function prog() {
    console.log(this.parentElement.firstChild);
    this.parentElement.firstChild.style.backgroundColor = "orange";
}

function done() {
    console.log(this.parentElement.firstChild);
    var temp=this.parentElement
    this.parentElement.firstChild.style.backgroundColor = "lime";
    if (temp.parentElement == todo_list){
    temp.removeChild(temp.lastChild)
    todo_list.removeChild(temp)
    done_list.appendChild(temp) }
}

function add_todo_list(){
    var todo_main = document.createElement("div");
    todo_main.setAttribute("class","todo_mains");

    var todo_name = document.createElement("div");
    todo_name.setAttribute("class","todo_names");
    if (input_todo.value == "") {
        alert("Please enter task name !")
        return false;
    }
    else {
        todo_name.appendChild(document.createTextNode(input_todo.value));
        todo_main.appendChild(todo_name);
        count = count + 1;
        localStorage.setItem("todo_"+count,input_todo.value);
    }

    var due_date = document.createElement("samp");
    due_date.setAttribute("class","due_dates");
    if (due.value == "") {
        alert("Please enter due date also !")
        return false;
    }
    else {
        due_date.appendChild(document.createTextNode(due.value));
        todo_main.appendChild(due_date);
        count = count + 1;
        localStorage.setItem("due_"+count,due.value);
     }
    

    var todo_x = document.createElement("button");
    todo_x.setAttribute("class","todo_xs");
    todo_x.appendChild(document.createTextNode("X"));
    todo_main.appendChild(todo_x);

    var todo_prog = document.createElement("button");
    todo_prog.setAttribute("class","todo_progs");
    todo_prog.appendChild(document.createTextNode("Prog"));
    todo_main.appendChild(todo_prog);

    var todo_done = document.createElement("button");
    todo_done.setAttribute("class","todo_dones");
    todo_done.appendChild(document.createTextNode("Done"));
    todo_main.appendChild(todo_done);

    todo_list.appendChild(todo_main);
    input_todo.value=""
    due.value=null

    for (var i=0; i<todo_xs.length; i++) {
        todo_xs[i].addEventListener("click", remove_todo);
        todo_progs[i].addEventListener("click", prog);
        todo_dones[i].addEventListener("click", done);
    }
}

function clear_all_todo(){
    var temp_child = todo_list.lastElementChild;
    count = 0;
    while (temp_child) {
        todo_list.removeChild(temp_child);
        temp_child = todo_list.lastElementChild;
    }    

    temp_child = done_list.lastElementChild;
    while (temp_child) {
        done_list.removeChild(temp_child);
        temp_child = done_list.lastElementChild;
    } 
}

function clear_todos(){
    var temp_child = todo_list.lastElementChild;
    while (temp_child) {
        todo_list.removeChild(temp_child);
        temp_child = todo_list.lastElementChild;
    }     
}

function clear_dones(){
    var temp_child = done_list.lastElementChild;
    while (temp_child) {
        done_list.removeChild(temp_child);
        temp_child = done_list.lastElementChild;
    } 
}

add_button.addEventListener("click", add_todo_list);
clear_all.addEventListener("click",clear_all_todo);
clear_todo.addEventListener("click",clear_todos);
clear_done.addEventListener("click",clear_dones);