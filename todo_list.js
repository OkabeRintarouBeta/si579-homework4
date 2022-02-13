// const removeitem=function(btn){
//     btn.addEventListener('click',(e)=>{
//         btn.parentElement.remove();
//     })
// }


const addTask=function(description,dueTime=false){
    task=document.querySelector('ul#task_list');
    li1=document.createElement("li");
    li1.innerText=description
    task.appendChild(li1);
    
    span1=document.createElement("span");
    span1.setAttribute("id","due");
    let dueTime_date=new Date(dueTime);
    dueTime_date=dueTime_date.toLocaleString("en-US");
    span1.innerText="due "+(dueTime?dueTime_date:"");
    li1.appendChild(span1);
    button1=document.createElement("button")
    button1.setAttribute("class","btn btn-sm btn-outline-danger done");
    button1.setAttribute("type","button");
    button1.innerText="Done";
    li1.appendChild(button1);
    // removeitem(button1);
}

addTask("Learn to wrap gifts", 1639944400000);
addTask("Code in javascript", 16399444000100);

function dateAndTimeToTimestamp(dateInputElement, timeInputElement) {
    console.log(dateInputElement,timeInputElement);
    const dueDate = dateInputElement.valueAsNumber; // Returns the timestamp at midnight for the given date
    const dueTime = timeInputElement.valueAsNumber; // Returns the number of milliseconds from midnight to the time
    console.log(dueDate,dueTime);
    if(dueDate && dueTime) { // The user specified both a due date & due time
        //Add the timezone offset to account for the fact that timestamps are specified by UTC
        const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
        return dueDate + dueTime + timezoneOffset;
    } else {
        // if the user did not specify both a due date and due time, return false
        return false;
    }
}

let description=document.querySelector("input#task_description_input");
let duedate=document.querySelector("input#duedate_input");
let duetime=document.querySelector("input#duetime_input");


const add_task=document.querySelector("button#add_task");
const updatetask=function(){
    let duedatetime=dateAndTimeToTimestamp(duedate,duetime);
    console.log(duedatetime);
    addTask(description.value,duedatetime);
    description.value="";
    duedate.value="";
    duetime.value="";
}

add_task.addEventListener("click",updatetask);

description.addEventListener("keydown",(e)=>{
    if (e.key=='Enter' && description.value!=''){
        console.log("enter!!!");
        updatetask();
    }
})

// let lilist=document.querySelectorAll("ul li");

// for(let i=0;i<document.querySelectorAll("ul li").length;i++){
//     document.querySelectorAll("ul li")[i].querySelector('button.done').addEventListener('click',function(){
//         console.log(i);
//         document.querySelectorAll("ul li")[i].remove();
//     })
// }



// let btnlist=document.querySelectorAll("button.done");
// for(let i=0;i<btnlist.length;i++){
//     btnlist[i].addEventListener('click',function(){
//         btnlist[i].parentElement.remove();
//     })
// }


// document.querySelectorAll("button.done").forEach(btn=>{
//     btn.addEventListener('click',e=>{
//         btn.parentElement.remove();
//     })
// })

document.querySelector('ul').addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.className=='btn btn-sm btn-outline-danger done'){
        e.target.parentElement.remove();
    } 
});
