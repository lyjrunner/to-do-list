//유저가 값을 입력한다
//+버튼을 클릭하면, 할일이 추가된다
//delete버튼을 누르면 할일이 삭제
//check버튼을 누르면 밑줄이 간다
//진행주 끝남 탭을 누르면, 언더바가 이동한다
//끝남탭은, 끝난 아이템만, 진행중탭은 진행중인 아이템만
//전체탭을 누르면 다시전체아이템으로 돌아옴
//1. check 번튼을 클릭하는 true false
//2. trueaus 끝난걸로 간주하고 밑줄 보여주기
//3. false이면 안끝난걸로 간주하고 그대로 
// 구동이 안됨 밑줄 및 삭제 버튼이 제멋대로 구동이 안됨 다시해봐 두번째 결과물과 비교 필요

let taskinput=document.getElementById("task-input");
let addbutton=document.getElementById("add-button");
let taskList=[]
let tabs = document.querySelectorAll(".task-tabs div")
addbutton.addEventListener("click", addTask);

for(let i=1;i<tabs.length;i++){
    tabs[i].addEventListener("click",function(event){filter(event)})
}
console.log(tabs)
function addTask(){
    let task = {
        id : randomIDGenerate(),
        taskContent : taskinput.value,
        isComplete : false,

    };
    taskList.push(task);
    console.log(taskList);
    render();
}

function render() {
    let resultHTML = "";
    for(let i=0;i<taskList.length;i++){
        if(taskList[i].isComplete == true){
            resultHTML += `
        <div class="task-done">
            <div>${taskList[i].taskContent}</div>
            <div>
                <button onclick= "toggleComplete('${taskList[i].id}')">check</button>
                <button onclick= "deleteTask'${taskList[i].id}')">delete</button>
            </div>
        </div>`;
            
        }else{
            resultHTML += `
        <div class="task">
            <div>${taskList[i].taskContent}</div>
            <div>
                <button onclick= "toggleComplete('${taskList[i].id}')">check</button>
                <button onclick= "deleteTask('${taskList[i].id}')">delete</button>
            </div>
        </div>`;
            }
    }
    

    document.getElementById("task-board").innerHTML = resultHTML;

}


function toggleComplete(id) {
    for(let i=0;i<taskList.length;i++){
        if(taskList[i].id == id){
        taskList[i].isComplete=!taskList[i].isComplete;
        break;
    }
    render()
    console.log(taskList);
}

function deleteTask(){
    for(let i=0;i<taskList.length;i++){
        if(taskList[i].id==id){
            taskList.splice(i,1)
            break;
        }
        render()
    }

    function filter(event){
        mode=event.target.id
        let filterList = []
        if(mode == "all"){
            render()
        }
        else if(mode==ongoing)P{
            for(let i =;<taskList.length;i++){
                if(taskList[i].isComplete == false){
                        filteList.push(taskList[i])
                }
            }            
        }
    }
}



}
function filter(event){
    console.log("filter 클릭")
}

function randomIDGenerate(){
    return '_' + Math.random().toString(36).substr(2, 9);}
