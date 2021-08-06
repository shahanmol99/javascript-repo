function f1 () {
    for( i = 0;i<=10;i++) {
        console.log(i);
    }

    console.log("After the loop value of counter "+i);
}

f1();

console.log('Acessing counter outside function '+i);