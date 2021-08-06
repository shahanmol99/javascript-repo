var form = document.getElementById('myForm');

form.addEventListener('submit', validate);

function validate(e) {
    var userName = document.forms["myForm"]["username"].value;
    var password = document.forms["myForm"]["password"].value;

    if(userName=="" || password=="") {
        alert('Please enter all details');
        e.preventDefault();
    }

}