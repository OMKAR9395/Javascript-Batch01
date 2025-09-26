let obj = {name: "Harry",age:20,city:"Pune"};
let i;
        for(i in obj){
            console.log(i,"=",obj[i]);
        }


let numArray = [10,20,30,40];

for(let num in numArray){
        console.log("Index",num,"Value",numArray[num]);
}

console.log("Array Terminated");