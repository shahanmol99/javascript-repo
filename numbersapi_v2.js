//model
function getFactsFromLocalStorage() {
    if(localStorage.getItem('facts')==null) {
        var factsArr = [];
        return factsArr;
    }

    var factsArr = JSON.parse(localStorage.getItem('facts'));
    return factsArr;
}

function saveFactsToLocalStorage(factText) {
    var factsArr = getFactsFromLocalStorage();

    var fact = {};
    fact.text = factText;
    fact.createdTime = moment.utc();

    factsArr.push(fact);

    localStorage.setItem('facts', JSON.stringify(factsArr));
}

function deleteFactsFromLocalStorage() {
    localStorage.clear();
}

//controller
var factBtn = document.getElementById('genratefacts');
factBtn.addEventListener('click', findFacts);
var searchedFact = document.getElementById('searchedFact');
var previousFact = document.getElementById('previousFact');
var deletebtn = document.getElementById('deleteFacts');
deletebtn.addEventListener('click', deleteFactsHandler);


document.addEventListener('DOMContentLoaded', loadPreviousFactsHandler)

function findFacts(e) {
    e.preventDefault();
    var num = document.getElementById('numberInput').value;
    var color = "yellow";

    if(num%2==0) {
        color = "cyan";
    }

    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function() {
        var fact = xhr.responseText;
        loadPreviousFactsHandler();
        renderDOMSearchedFacts(searchedFact, fact, color);
        saveFactsToLocalStorage(fact);
    })


    if(num=="") {
        alert('Please enter a No')
        return;
    }

    if((!isNaN(num))==false) {
        alert('Please enter a No')
        return;
    }
    
    var path = "http://numbersapi.com/"+num;
    xhr.open("GET", path);
    fact = xhr.send();
    
  
}


function loadPreviousFactsHandler() {
    var factsArr = getFactsFromLocalStorage();
    deleteDiv(previousFact);

    if(factsArr.length==0) {
        renderDOMSearchedFacts(previousFact, "No Previous Search Made");
        return;
    }

    for(var i=0;i<factsArr.length;i++) {
        var domText = factsArr[i].text + " ........." + moment(factsArr[i].createdTime).fromNow();
        renderDOMPreviousFacts(previousFact, domText);    
    }
}

function deleteFactsHandler(e) {

    deleteFactsFromLocalStorage();
    loadPreviousFactsHandler();     
}

//view
function renderDOMSearchedFacts(element, fact,color) {
   
    if(element.childNodes[3]!=null) {
        element.childNodes[3].remove();
    }

    var p = document.createElement('p');
    p.innerHTML = fact;
    p.style.backgroundColor = color;
    element.appendChild(p);
}

function renderDOMPreviousFacts(element, fact) {
    
    if(element.childNodes[3]==null) {
        divFacts = document.createElement('div');
        element.appendChild(divFacts);
    }

    var p = document.createElement('p');
    p.innerHTML = fact;
    divFacts.appendChild(p);
}

function deleteDiv(element) {
    if(element.childNodes[3]!=null) {
        element.childNodes[3].remove();
    }
}