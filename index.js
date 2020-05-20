var form = document.querySelector('#addForm');
var itemList = document.querySelector('.list-group');


// EventListener to form
form.addEventListener('submit', addItem);

// Add task To localStorage
const storeTaskInLocalStorage = (task) => {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Get task from localStorage
const getTaskFromLocalStorage = () => {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = []
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
        tasks.forEach((task) => {
            var li = document.createElement('li');

            // Add class to the created list item
            li.className = 'list-group-item';

            // Append new value to new listitem
            li.appendChild(document.createTextNode(task));

            // create delete button
            var delBtn = document.createElement('button');

            // create check button
            var checkListBtn = document.createElement('button');

            // Add class to delete button
            delBtn.className = 'far fa-trash-alt delete';

            // Add class to check button
            checkListBtn.className = 'fas fa-check-circle check';

            // Append delete button to li
            li.appendChild(delBtn);

            // Append check button to li
            li.appendChild(checkListBtn);

            // Add new  item to todo list
            itemList.appendChild(li);
        })
}


// DOM event that Restores tasks from LocalStorage
document.addEventListener('DOMContentLoaded', getTaskFromLocalStorage);


// Additem function
function addItem(e){
    e.preventDefault();

    // Get value of inputfield
    var newItem = document.getElementById('add-Todo');

    //CREATE A NEW ITEMLIST IN THE UI
    //checking if there is a text in inputfield befoe creating
   if(newItem.length !== 0) {
       alert('Type in Todo in inputField!');
   }else{
        var li = document.createElement('li');
   
        // Add class to the created list item
        li.className ='list-group-item';

        // Append new value to new listitem
        li.appendChild(document.createTextNode(newItem.value));

        // create delete button
        var delBtn = document.createElement('button');

        // create check button
        var checkListBtn = document.createElement('button');

        // Add class to delete button
        delBtn.className = 'far fa-trash-alt delete';

        // Add class to check button
        checkListBtn.className = 'fas fa-check-circle check';

        // Append delete button to li
        li.appendChild(delBtn);

        // Append check button to li
        li.appendChild(checkListBtn);

        // Add new item to todo list
        itemList.appendChild(li);

        // Add task to localStorage
        storeTaskInLocalStorage(newItem.value);

        // Clear fields
        newItem.value = '';

   }
}

 
// EventListener for delete button
itemList.addEventListener('click', removeItem);

// Delete btn function
function removeItem(e){
    if(e.target.classList.contains('delete')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }

    removeFromLocalStorage(e.target.parentElement);
    
}

function removeFromLocalStorage(tsk){
    // Delete from localStorage
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach((task, index) => {
        if (tsk.textContent === task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}



// EventListener for check button
itemList.addEventListener('click', checkItem);

// Check btn function
function checkItem(e){
    if(e.target.classList.contains('check')){
        var li = e.target.parentElement;
        li.className = 'list-group-item completed ';
    }
}
