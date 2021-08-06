
var displayBtn = document.getElementById('display');
var reporteeBtn = document.getElementById('reportee');
var tableDiv = document.getElementById('tableDiv');
displayBtn.addEventListener('click', displayEmps);
reporteeBtn.addEventListener('click', displayReportee);


// function fetchEmp(path) {
//     var path = "https://cors-anywhere.herokuapp.com/swabhav-tech.firebaseapp.com/emp.txt"
    
//     fetchEmpsDataFromAPI(path) 
//         .then(function(responseText) {
//             var empArr = genrateArrayFromEmpData(responseText);
//              return empArr;
//         })
//         .catch(function(error) {
//             return error;
//         })
//     return result;
// }


function displayEmps() {

    tableDiv.style.visibility = 'visible';

    var path = "https://cors-anywhere.herokuapp.com/swabhav-tech.firebaseapp.com/emp.txt"
    fetchEmpsDataFromAPI(path) 
            .then(function(responseText) {
                var empArr = genrateArrayFromEmpData(responseText);
                loadtoDOMHandler(empArr);
            })
        .catch(function(error) {
            console.log(error);
        })

}

function fetchEmpsDataFromAPI(path) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.onload = function() {
            resolve(xhr.responseText);
        }

        xhr.onerror = function() {
            reject("Errrr!!! Something Went Wrong");
        }
        xhr.open("GET", path);
        fact = xhr.send();    
    })
}

function genrateArrayFromEmpData(data) {
    var empData = data.split('\n');
    var empArr = [];

    for(var i=0;i<empData.length;i++) {
        var empColumns = empData[i].split(',');
        var emp = {};
        emp.id = empColumns[0];
        emp.name = empColumns[1];
        emp.designation = empColumns[2];
        emp.managerId = empColumns[3];
        emp.doj = empColumns[4];
        emp.sal = empColumns[5];
        emp.comission = empColumns[6];
        emp.deptNo = empColumns[7];
        empArr.push(emp);
    }
    var newEmpArr = removeDuplicates(empArr);

    return newEmpArr;
}

function removeDuplicates(empArr) {
    
    var newEmpArr = empArr;

    for(var i=0;i<empArr.length;i++) {
        var currentId = empArr[i].id;

        for(var j=i+1;j<empArr.length;j++) {
            if(currentId==empArr[j].id) {
                newEmpArr.splice(j, 1);
            }
        }
    }
    return newEmpArr;
}
    
function loadtoDOMHandler(empArr) {
    
    if(tableDiv.childNodes[5]!=null) {
        tableDiv.childNodes[5].remove();
    }

    createTable('empDetails');
    var table = document.getElementById('empDetails');

    for(var i=0;i<empArr.length;i++) {
        insertDataIntoTable(table, empArr[i]);
    }
}


function displayReportee() {
    
    tableDiv.style.visibility = 'visible';

    var path = "https://cors-anywhere.herokuapp.com/swabhav-tech.firebaseapp.com/emp.txt"
    fetchEmpsDataFromAPI(path) 
            .then(function(responseText) {
                var empArr = genrateArrayFromEmpData(responseText);
                findrootEmp(empArr);
            })
        .catch(function(error) {
            console.log(error);
        })
}

function findrootEmp(empArr) {
    var rootEmp;
    for(var i=0;i<empArr.length;i++) {
        if(empArr[i].managerId=="NULL") {
            rootEmp = empArr[i];
            findReportees(rootEmp, empArr);
            break;
        }
    }

    for(var i=0;i<empArr.length;i++) {
        if(empArr[i].managerId!="NULL") {
            rootEmp = empArr[i];
            findReportees(rootEmp, empArr);
        }
    }
}

function findReportees(emp, empArr) {
    
    loadMangerEmpToDOM (emp);               
    createTable(emp.id);
    var table = document.getElementById(emp.id);

    for(var i=0;i<empArr.length;i++) {
        if(emp.id==empArr[i].managerId){
            insertDataIntoTable(table, empArr[i])
            // tempEmpArr.push(empArr[i]);
        }
    }
}

function insertDataIntoTable(table,empData) {
    var tr = document.createElement('tr');

    var tdId = document.createElement('td');
    tdId.innerText = empData.id;
    tr.appendChild(tdId);

    var tdName = document.createElement('td');
    tdName.innerText = empData.name;
    tr.appendChild(tdName);

    var tdDes = document.createElement('td');
    tdDes.innerText = empData.designation;
    tr.appendChild(tdDes);

    var tdManagerId = document.createElement('td');
    tdManagerId.innerText = empData.managerId;
    tr.appendChild(tdManagerId);

    var tdDoj = document.createElement('td');
    tdDoj.innerText = empData.doj;
    tr.appendChild(tdDoj);

    var tdSal = document.createElement('td');
    tdSal.innerText = empData.sal;
    tr.appendChild(tdSal);

    var tdCom = document.createElement('td');
    tdCom.innerText = empData.comission;
    tr.appendChild(tdCom);

    var tdDept = document.createElement('td');
    tdDept.innerText = empData.deptNo;
    tr.appendChild(tdDept);

    table.appendChild(tr);
}

function createTable(idName) {
    var table = document.createElement('table');
    table.id = idName;

    var thId = document.createElement('th');
    thId.innerText = 'ID';
    table.appendChild(thId);

    var thName = document.createElement('th');
    thName.innerText = 'NAME';
    table.appendChild(thName);

    var thDes = document.createElement('th');
    thDes.innerText = 'DESIGNATION';
    table.appendChild(thDes);

    var thManagerId = document.createElement('th');
    thManagerId.innerText = 'MANAGER_ID';
    table.appendChild(thManagerId);

    var thDoj = document.createElement('th');
    thDoj.innerText = 'DOJ';
    table.appendChild(thDoj);

    var thSal = document.createElement('th');
    thSal.innerText = 'SALARY';
    table.appendChild(thSal);

    var tdCom = document.createElement('th');
    tdCom.innerText = 'COMISSION';
    table.appendChild(tdCom);

    var thDept = document.createElement('th');
    thDept.innerText = 'DEPT_NO';
    table.appendChild(thDept);

    tableDiv.appendChild(table);
}

function loadMangerEmpToDOM(emp) {
    var p = document.createElement('p');
    p.innerText = "Manager: "+emp.name+" ID: "+emp.id;
    tableDiv.appendChild(p);
}