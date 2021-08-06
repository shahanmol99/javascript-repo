function doSomething(input, successFun, errFun) {
    setTimeout(function(){
        var result = Math.random() * input;
        console.log(result);
    
        if(result>5) {
            successFun({sucess: result});
            return;
        }
    
        errFun({error : "Something is wrong "});
    
    }, 0);
}

 doSomething((7), function(data) {
    console.log("sucess happend "+data.sucess)
}, function(err) {
    console.log("errr "+err.error);
});
console.log("End Of Main");