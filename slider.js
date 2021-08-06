(function() {
    var sliderRange = document.getElementById("sliderRange");
    var sliderVal = document.getElementById("sliderVal");
    var sliderBtn = document.getElementById("btns");
    //var rangeBtn = document.getElementsByClassName("rangeBtn");

    //console.log(rangeBtn);

    console.log(sliderVal);
    sliderBtn.addEventListener('click', printConsole)

    sliderVal.innerHTML = sliderRange.value;
    sliderRange.oninput = function () {
        sliderVal.innerHTML = this.value;

        var btn = document.createElement("button");
        btn.innerText = this.value;
        btn.classList.add("rangeBtn");
        sliderBtn.appendChild(btn);
    }

    function printConsole(e) {
        console.log(e.target.innerText);
    }

}) ();
    