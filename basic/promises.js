
// function simulateAsyntask(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const randomNumber=Math.random();
//             console.log(randomNumber);
//             if(randomNumber>0.5){
//                 resolve("Task completed successfully");
//             }
//             else{
//                 reject(new Error("task failed"));
//             }
//         },2000)
//     })
// }

// simulateAsyntask()
//     .then((message)=>{
//         console.log(message);
//     })
//     .catch ((error)=>{
//         console.error(error);
//     });


async function fetchdata(){
    try {
        const response=await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");

        if(response.ok){
            const data= await response.json();
            console.log(data);
        }
        else{
             throw new Error("error");
        }
    
    } catch(error){
        console.error(error);
    }
};

fetchdata();