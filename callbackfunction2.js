var arrNos = [1,2,3,4,5];


function filterNos(arrNos, mapFn) {

    var duplicateArr = [];
    var temp;

    for(var i=0;i<arrNos.length;i++) {
        temp = mapFn(arrNos[i]);
        duplicateArr.push(temp);
    }

    return duplicateArr;
}

function squareNo(no) {
    return no * no;
}

function cubeNo(no) {
    return no * no * no;
}

function add10ToNO(no) {
    return no+10;
}


console.log(filterNos(arrNos, squareNo));
console.log(filterNos(arrNos, cubeNo));
console.log(filterNos(arrNos, add10ToNO));

