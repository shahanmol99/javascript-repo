var btn = $('.colorbtn');
console.log(btn);

btn.click(function(e) {
    if(e.target.id=="red") {
        $('body').css("background-color", "red");
        return;
    }

    $('body').css("background-color", "blue");
})

// for(var i=0;i<btn.length;i++) {
//     console.log(btn[i]);
//     btn[i].addEventListener('click', changeColor);
// }


// function changeColor(e) {
    
//     if(e.target.id=='red') {
//         document.body.style.backgroundColor = "red";
//         return;
//     }

//     document.body.style.backgroundColor = "blue";
// }

