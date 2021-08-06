var data;
function getCustomer(details){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log(details)
            if(details.isGold){
                data=details;
                resolve("Promise 1 resolved");
                return;
            }
        reject("Error at Promise 1");
        },3000);
        
    })
}
function getTopMovies(movies){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log(movies)
            if(movies.length!=0){
                resolve("promise 2 resolved");
                return;
            }
        reject("Error at promise 2");
        },4000)
    })
}
function sendEmail(data){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(data.email!=null){ 
                resolve(data.email);
                return;
            }
            reject("Error at promise 3");
        },4000)
    })
}
getCustomer({
    id:101,
    name:"Anmol",
    isGold : true,
    email : "abcd@sample.com"
})

  .then(function(message){
    console.log(message)
    return getTopMovies(["movie1","movie2"]);
  })
  
  .then(function(messgae){
    console.log(messgae);
    return sendEmail(data);
  })

  .then(function(email){
    console.log("email sent to "+email);
  })
