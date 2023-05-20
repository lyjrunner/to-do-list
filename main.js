//유저가 값을 입력한다
//+버튼을 클릭하면, 할일이 추가된다
//delete버튼을 누르면 할일이 삭제
//check버튼을 누르면 밑줄이 간다
//진행주 끝남 탭을 누르면, 언더바가 이동한다
//끝남탭은, 끝난 아이템만, 진행중탭은 진행중인 아이템만
//전체탭을 누르면 다시전체아이템으로 돌아옴

let taskinput=document.getElementById("task-input");
let addbutton=document.getElementById("add-button");
let taskList=[]
addbutton.addEventListener("click", addTask);

function addTask(){
    let taskContent = taskinput.value;
    taskList.push(taskContent);
    console.log(taskList);
    render();
}

function render() {
    let resultHTML = "";
    for(let i=0;i<taskList.length;i++){
        resultHTML += `<div id="task-board">    
        <div class="task">
            <div>${taskList[i]}</div>
            <div>
                <button>check</button>
                <button>delete</button>
            </div>
        </div>
    </div>`;
    }
    

    document.getElementById("task-board").innerHTML = resultHTML;
}
