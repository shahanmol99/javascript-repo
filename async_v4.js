function doSomething(input) {
    return new Promise(function(resolve, reject) {
        var result = Math.random() * input;
        console.log(result);
    
        if(result>5) {
            resolve({sucess: result});
            return;
        }
    
        reject({error : "Something is wrong "});
    
    })
}

doSomething(10)
    .then(function(result) {
        console.log("Sucess "+result.sucess);
    })
    .catch(function(error) {
        console.log("Errrr!!! "+error.error);
    })
console.log("End Of Main");