
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
//const toDoInput = document.querySelector("#todo-form input") 과 같다!!
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEYS = "toDos"


function deleteToDo(event){
    //console.dir해서 parent가 누군지를 알 수 있다.
    console.dir(event.target.parentElement.innerText);//어떤버튼이 클릭된건지를 알수있다.
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) =>toDo.id !== parseInt(li.id));
    saveToDo();
    li.remove();
    console.log(li.id);
};

function saveToDo (){
    localStorage.setItem(TODOS_KEYS,JSON.stringify(toDos));
};



//이 함수가 무얼 그려야할지 알려주기 위해 괄호안에 newtodo 인자(argument)를 넣어준다.
function paintToDo (newToDo){
    //console.log(newToDo);
    const li = document.createElement("li"); //html에 <li>태그 만들어준다.
    li.id = newToDo.id; //html의 li에 id값을 넣어준다.
    const span = document.createElement("span");
    span.innerHTML=newToDo.text; //이너텍스트를 해줘야 적절함
    const button = document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click",deleteToDo);

    li.appendChild(span); //사용자가 작성한 목록의 한줄씩은 span에 넣고,
    //li로 감싼다음, 나중에 사용자가 delete를 누르면 한꺼번에 li를 삭제하기 위함.
    //그래서 span을 li로 감싸준다.
    li.appendChild(button);
    //console.log(li);
    //이제 todoform에 입력되었던 value인 새로운 li를 toDoList에 추가해줘야한다.
    toDoList.appendChild(li);
};

//form은 submit 이벤트를 가진다. 
//그 기본동작은 form에 입력하고 엔터칠때마다 브라우저가 새로고침된다. 그걸 막아야한다!!

function handleToDoSubmit (event){
    event.preventDefault();
    const newToDo = toDoInput.value; //input의 현재 value를 newdoto라는 새로운 변수에 복사하는 것. 
    //그 다음에 무슨일을 하든 newToDo 변수와는 상관없음.
    toDoInput.value=""; //이걸해주지않으면 사용자가 할일을쓰고 엔터쳐도 계속 그자리에 남아있음.
    //console.log(toDoInput.value); //바로위 코드로인해 todoinput은 빈값으로 나옴
    //console.log(newToDo); //newtodo는 입력값 나옴 (변수 선언후 newtodo는 영향을 받지않고, todoinput.value만 영향받음)
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj); //localstorage에는 배열을 저장할 수 없고, 오직 텍스트만 저장 가능하다.
    paintToDo(newToDoObj); //사용자가 입력한값인 newtodo라는 Value값을 painttodo로 보낸다.
    saveToDo();
};

toDoForm.addEventListener("submit",handleToDoSubmit)


function sayhello (item){
    //자바스크립트는 지금처리되고 있는 item도 보여준다. (본래 갖춘 기능)
    console.log("hello",item);
};

const savedToDos = localStorage.getItem(TODOS_KEYS);
console.log(savedToDos);

if(savedToDos !== null){
    //if만약 savedtodos에 값이 생겼다면, 그 string을 가지고 살아있는 자바스크립트 object로 바꾼다.
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos); //각각으로 보여지는 기능 확인
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);
    //array안의 각각의 item에 대해 작업하고 싶을 때 사용한다.
    //parsedtodos는 array라서 foreach라는 걸 갖고있다.
    //foreach를 사용하면 각각의 item에 원하는 것을 실행할 수 있다.
};


//array 에서 요소를 삭제하면, 요소만 삭제되는것이 아니라
//해당 요소를 제외한 또다른 array를 다시 만드는 것.
//지우고싶은 아이템을 제외할 때 filter를 사용한다.