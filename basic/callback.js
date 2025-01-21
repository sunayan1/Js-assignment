// console.log("first log");

// setTimeout(function cb(){
//     console.log("second log");
// }, 2000);

// console.log("third log");

// function fetchdata(){
//     setTimeout(()=>{
//         console.log("data fetched from the server");
//         callback();
//     }, 2000);
// }

// function callback(){
//     console.log("processing data");
// }

// fetchdata();

// function simulateAsyncTask(myfunction){
//     setTimeout(()=>{
//         const randomNumber=Math.random();
//         console.log(randomNumber);
//         if(randomNumber>0.5){
//             myfunction(null,"Task completeted successfully")
//         }
//         else{
//             myfunction(new Error("Task failed", null));
//         }
//     }, 2000)
// }simulateAsyncTask((error,message)=>{
//     if(error){
//         console.error("Task failed");

//     }
//     else{
//         console.log(message);
//     }
// })

function myfunction(callback){
    console.log("My function");
    callback();
}

function myfunction2(callback){
    console.log("My function 2");
    callback();
}

function myfunction3(callback){
    console.log("My function 3");
    callback();
}

myfunction(()=>{
    myfunction2(()=>{
        myfunction3(()=>{
            console.log("all the callbackfucntions are done");
        })
    })
})

myfunction();