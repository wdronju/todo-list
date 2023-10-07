

const taskForm = document.getElementById("taskForm");
const taskInput =document.getElementById("inputField");
const AllTask = document.querySelector(".task")

let redAlert = document.getElementById("alertred");
let successAlert = document.getElementById("success");
// form Event

taskForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    // condition start 
    if(!taskInput.value){
        
        redAlert.innerText="* Please fill in the required field.";
        
        
    }else{
        redAlert.innerText="";
      
    
    

      const taskDiv = document.createElement("div");
      taskDiv.classList.add("content");
      AllTask.appendChild(taskDiv);
      

    //   Creating a  input  field 
    const input = document.createElement("input");
    input.type="text";
    input.setAttribute("id", "outputList");
    input.value=(taskInput.value);
    input.setAttribute("readonly", "readonly");

    // Adding the input  fild into content div 

    taskDiv.appendChild(input);

    // creating Action Div 
        const ActionDiv =document.createElement("div");
        ActionDiv.classList.add("actions");

        taskDiv.appendChild(ActionDiv);

        // Crating Buttons 
        const EditButton = document.createElement("button");
        ActionDiv.appendChild(EditButton);
        const DeleteButton = document.createElement("button");
        ActionDiv.appendChild(DeleteButton);
        
        EditButton.classList.add("edit");
        EditButton.innerHTML="Edit";
        DeleteButton.classList.add("delete");
        DeleteButton.innerHTML="Delete";


        // Edit Task  
        EditButton.addEventListener("click",function(e){
            if(EditButton.innerText.toLocaleLowerCase() === "edit"){
                EditButton.innerHTML="Save";
                input.removeAttribute("readonly");
                input.focus();

            }else{
                input.setAttribute("readonly", "readonly");
                EditButton.innerHTML="Edit";
            }
            
        });
        
        // Delete Task 
        DeleteButton.addEventListener("click",function(){
            taskDiv.remove(taskDiv);
        });

    }
    // condition end 
    
    
    console.log(taskInput.value);



    // to make empty the input field 
    taskInput.value="";
});


