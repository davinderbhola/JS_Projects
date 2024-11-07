const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

function addTask(){
    if(inputBox.value == ''){
        alert('Yout must write something');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(el){
    if(el.target.tagName === 'LI'){
        el.target.classList.toggle("checked");
        saveData();
    }
    else if(el.target.tagName === "SPAN"){
        el.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();