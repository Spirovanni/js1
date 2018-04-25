// let shoppingList = [];
//
// let item1 = "Detergent";
// let item2 = "cheese";
// let item3 = "Crackas";
// let item4 = "wine";
//
// shoppingList.push(item1, item2, item3, item4);
//
// console.log(shoppingList);


// While Loop Example
// let count = 0;
//
// document.write("Starting Loop" + "<br />");
// do{
//     document.write("Current Count : " + count + "<br />");
//     count++;
// }
//
// while (count < 15);
// document.write ("Loop stopped!");

// let step;
// for (step = 0; step < 5; step++) {
//     // Runs 5 times, with values of step 0 through 4.
//     console.log('Walking east one step');
// }

// let favoriteMovie = ['Wall Street', '1987'];
// let secondFavorite = ['The Godfather', '1972'];
// let thirdFavorite = ['The Godfather II', '1974'];
// let myFavoriteMovies = [];
// myFavoriteMovies.push(favoriteMovie, secondFavorite, thirdFavorite);
//
// for(let i = 0; i < myFavoriteMovies.length; i++) {
//     if(myFavoriteMovies[i][0] === 'The Godfather') {
//         alert(`${myFavoriteMovies[i][0]} is the title of my favorite movie and ${myFavoriteMovies[i][1]} is the date`);
//     }
// }
//
// console.log(myFavoriteMovies[0][0], myFavoriteMovies[0][1], myFavoriteMovies[2][0], myFavoriteMovies[2][1], myFavoriteMovies[1][0], myFavoriteMovies[1][1]);

//Document is the DOM can be accessed in the console with document.window.
// Tree is from the top, html, body, p etc.

//Problem: User interaction does not provide the correct results.
//Solution: Add interactivity so the user can manage daily tasks.
//Break things down into smaller steps and take each step at a time.


//Event handling, uder interaction is what starts the code execution.

var taskInput=document.getElementById("new-task");//Add a new task.
var addButton=document.getElementsByTagName("button")[0];//first button
var incompleteTaskHolder=document.getElementById("incomplete-tasks");//ul of #incomplete-tasks
var completedTasksHolder=document.getElementById("completed-tasks");//completed-tasks


//New task list item
var createNewTaskElement=function(taskString){

    var listItem=document.createElement("li");

    //input (checkbox)
    var checkBox=document.createElement("input");//checkbx
    //label
    var label=document.createElement("label");//label
    //input (text)
    var editInput=document.createElement("input");//text
    //button.edit
    var editButton=document.createElement("button");//edit button

    //button.delete
    var deleteButton=document.createElement("button");//delete button

    label.innerText=taskString;

    //Each elements, needs appending
    checkBox.type="checkbox";
    editInput.type="text";

    editButton.innerText="Edit";//innerText encodes special characters, HTML does not.
    editButton.className="edit";
    deleteButton.innerText="Delete";
    deleteButton.className="delete";



    //and appending.
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;
}



var addTask=function(){
    console.log("Add Task...");
    //Create a new list item with the text from the #new-task:
    var listItem=createNewTaskElement(taskInput.value);

    //Append listItem to incompleteTaskHolder
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

    taskInput.value="";

}

//Edit an existing task.

var editTask=function(){
    console.log("Edit Task...");
    console.log("Change 'edit' to 'save'");


    var listItem=this.parentNode;

    var editInput=listItem.querySelector('input[type=text]');
    var label=listItem.querySelector("label");
    var containsClass=listItem.classList.contains("editMode");
    //If class of the parent is .editmode
    if(containsClass){

        //switch to .editmode
        //label becomes the inputs value.
        label.innerText=editInput.value;
    }else{
        editInput.value=label.innerText;
    }

    //toggle .editmode on the parent.
    listItem.classList.toggle("editMode");
}




//Delete task.
var deleteTask=function(){
    console.log("Delete Task...");

    var listItem=this.parentNode;
    var ul=listItem.parentNode;
    //Remove the parent list item from the ul.
    ul.removeChild(listItem);

}


//Mark task completed
var taskCompleted=function(){
    console.log("Complete Task...");

    //Append the task list item to the #completed-tasks
    var listItem=this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);

}


var taskIncomplete=function(){
    console.log("Incomplete Task...");
//Mark task as incomplete.
    //When the checkbox is unchecked
    //Append the task list item to the #incomplete-tasks.
    var listItem=this.parentNode;
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem,taskCompleted);
}



var ajaxRequest=function(){
    console.log("AJAX Request");
}

//The glue to hold it all together.


//Set the click handler to the addTask function.
addButton.onclick=addTask;
addButton.addEventListener("click",addTask);
addButton.addEventListener("click",ajaxRequest);


var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
    console.log("bind list item events");
//select ListItems children
    var checkBox=taskListItem.querySelector("input[type=checkbox]");
    var editButton=taskListItem.querySelector("button.edit");
    var deleteButton=taskListItem.querySelector("button.delete");


    //Bind editTask to edit button.
    editButton.onclick=editTask;
    //Bind deleteTask to delete button.
    deleteButton.onclick=deleteTask;
    //Bind taskCompleted to checkBoxEventHandler.
    checkBox.onchange=checkBoxEventHandler;
}

//cycle over incompleteTaskHolder ul list items
//for each list item
for (var i=0; i<incompleteTaskHolder.children.length;i++){

    //bind events to list items chldren(tasksCompleted)
    bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
}




//cycle over completedTasksHolder ul list items
for (var i=0; i<completedTasksHolder.children.length;i++){
    //bind events to list items chldren(tasksIncompleted)
    bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
}




// Issues with usabiliy don't get seen until they are in front of a human tester.

//prevent creation of empty tasks.

//Shange edit to save when you are in edit mode.