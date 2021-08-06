var hello = document.getElementById('hello');
var print = document.getElementById('print');
var async = document.getElementById('async');

hello.addEventListener('click', function(){
    alert('Hello');
});

print.addEventListener('click', function(){
    alert('Just Printing');
});

async.addEventListener('click', function(){
    var  w = new Worker("worker.js");
    w.onmessage = function(e) {
        console.log(e.data);
    }
})

// function startWorker() {
//     if(window.Worker) {
//         var worker = new Worker('worker.js');
        
//         worker.postMessage('Hello');
//     }
//     else {
//         alert("Sorry your browser does not support webworker")
//     }
// }
  
