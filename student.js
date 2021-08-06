
class Student {
    constructor(name, cgpa) {
        this.name = name;
        this.cgpa = cgpa;
    }
}

var  sum = 0, max = 0, min = 99, max = 0;
var studentArray = [];

studentArray[0] = new Student("Abc", 6.2);
studentArray[1] = new Student("Pqr", 7.47);
studentArray[2] = new Student("Xyz", 9.04);
studentArray[3] = new Student("Yyy", 8.85);
studentArray[4] = new Student("bbb", 6.34);


for(var i=0;i<5;i++) {
    console.log(studentArray[i].name+" "+studentArray[i].cgpa)
}

console.log();

for(var i=0;i<5;i++) {
    sum = (sum + studentArray[i].cgpa);

    if(max<studentArray[i].cgpa) {
        max = studentArray[i].cgpa;
    }

    if(min>studentArray[i].cgpa) {
        min = studentArray[i].cgpa;
    }
}

var avg = sum/5

console.log("Sum = "+sum.toFixed(2));
console.log("Avg = "+avg.toFixed(2));
console.log("Max = "+max);
console.log("Min = "+min);

