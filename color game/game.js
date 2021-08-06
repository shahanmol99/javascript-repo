(function(){
//controller
var startBtn = document.getElementById('startBtn');

startBtn.addEventListener('click', startGame);
var isStartedOnce = false;

function startGame() {

    var btnDiv = document.getElementById('buttons-container');
    var blueBallNo = (Math.floor((Math.random() * 15)+1));
    var status = document.getElementById('status');
    var turnCount=0;

    if(!isStartedOnce) {
        isStartedOnce = true;
    }
    else {
        btnDiv.childNodes[0].remove(); 
    }

    console.log(turnCount);
    renderDOM(btnDiv);
    changeStatus(turnCount, status);

    btnDiv.addEventListener('click', function(e) {
        if(turnCount<3) {
            turnCount = playGame(e,blueBallNo,turnCount);
            changeStatus(turnCount, status);
        }
    });

}

function playGame(e,blueBallNo,turnCount) {
    var element = e.target;
    if(element.classList[0]=='gameBtns') {
        turnCount++;
        if(element.innerText==blueBallNo) {
            console.log('You Won');
            changeColor(element, 'blue');
            turnCount = 4;
            return turnCount;
        }

        if(element.innerText>blueBallNo) {
            console.log('Too high');
            changeColor(element, 'green');
            element.setAttribute('disabled','disabled');
            return turnCount;
        }

        console.log('Too low');
        changeColor(element, 'red'); 
        return turnCount;       
    }
}

//view
function renderDOM(btnDiv) {
    var i = 0;

    var btns = document.createElement("div")
    btns.classList.add('btnDiv');
    btnDiv.appendChild(btns);
    
    while(i<15) {
        var btn = document.createElement("button");
        btn.id = i+1;
        btn.classList.add('gameBtns');
        btn.innerText = i+1;
        btns.appendChild(btn);
        i++;
    }
}

function changeColor(element, color) {
    element.style.backgroundColor = color;
}

function changeStatus(turnCount, status) {
    
    if(turnCount<3) {
        status.innerHTML = 3-turnCount;
        return
    }

    if(turnCount==3) {
        status.innerHTML = "Game Over";
        return
    }

    status.innerHTML = "You Won";    
}
})();