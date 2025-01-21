let globalVar="I am global";

function demoscope(){
    let localVar="I am local";

    if(true){
        let blockVar="I am block"
        console.log(blockVar);
    }
    console.log(localVar);
    console.log(globalVar);
}

console.log("outside the funtion"+ globalVar);
// console.log("outside the funtion"+ localVar); //error

demoscope();