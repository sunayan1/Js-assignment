const array=[1,2,3,4,5,6];

const arraymap=array.map(x=>x*x);
console.log(arraymap);

const arrayfilter=array.filter(x=> x%2 ==0);
console.log("Even numbers are: " +arrayfilter);