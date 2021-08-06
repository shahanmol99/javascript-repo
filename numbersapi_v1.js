var factBtn = document.getElementById('facts');
factBtn.addEventListener('click', findFacts);
var mainDiv = document.getElementById('main');

function findFacts(e) {
    e.preventDefault();
    var num = document.getElementById('numberInput').value;

    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function() {
        renderDOM(xhr.responseText);
    })

    if(num=="") {
        alert('Please enter a No')
    }
    else {
        var path = "http://numbersapi.com/"+num;
        xhr.open("GET",path);
        fact = xhr.send();
    }
}

function renderDOM(fact) {
    var p = document.createElement('p');
    p.innerHTML = fact;
    mainDiv.appendChild(p);
}