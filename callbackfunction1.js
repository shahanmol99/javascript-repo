const arrNos = [10,20,30,40,51];


function filterNos(arrNos, predicateFunction) {

    var duplicateArr = [];

    for(var i=0;i<5;i++) {
        if(predicateFunction(arrNos[i])) {
            duplicateArr.push(arrNos[i]);
            i++;
        }
    }
    return duplicateArr
}

function isOdd(no) {
    return no%2!=0;
}

function isGreaterThan25(no) {
    return no>25;
}


console.log(filterNos(arrNos, isGreaterThan25));
console.log(filterNos(arrNos, isOdd));