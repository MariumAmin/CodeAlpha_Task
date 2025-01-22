function add() {
    const taskInput = document.getElementById('task').value;
    if (taskInput) {
        
        const addItem = document.createElement("li");
        addItem.textContent = taskInput;
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn"); 

       
        removeButton.onclick = function () {
            addItem.remove(); 
        };
        addItem.appendChild(removeButton);

   
        document.getElementById('taskList').appendChild(addItem);
        document.getElementById('task').value = "";
    }
}
