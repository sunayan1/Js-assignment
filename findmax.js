const arr=[2, 43, 65, 56, 34]
let max=arr[0];
function findMax(arr){
    for (let i=1; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    console.log(max);
}
findMax(arr);