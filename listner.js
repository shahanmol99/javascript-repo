var btn = document.getElementById('clickMe')
btn.addEventListener('click',godListner)
btn.addEventListener('click',devilListner)

function godListner() {
    alert("God is Listening");
    console.log(godListner);
}

function devilListner() {
    alert("Devil is Listening");
    console.log(devilListner);
}