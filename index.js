var form = document.querySelector('#addForm');
var itemList = document.querySelector('.list-group');

// EventListener to form
form.addEventListener('submit', addItem);


// Additem function
function addItem(e){
    e.preventDefault();

    // Get value of inputfield
    var newItem = document.getElementById('add-Todo').value;

    //create a new listitem in the Ul

    //checking if there is a text in inputfield befoe creating
   if(newItem.length == 0) {
       var warning = 'Type in Todo in inputField!';
        alert(warning);
   }else{
      var li = document.createElement('li');
   }
   
    // Add class to the created list item
    li.className ='list-group-item';

    // Append new value to new listitem
    li.appendChild(document.createTextNode(newItem));

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
}


 
// EventListener for delete button
itemList.addEventListener('click', removeItem);

// Delete btn function
function removeItem(e){
    if(e.target.classList.contains('delete')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
  }
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
