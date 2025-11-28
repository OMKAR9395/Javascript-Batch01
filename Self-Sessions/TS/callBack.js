// function add(){
//     return 10+20;
// }

// function print(res){
//     console.log(res)
// }

// let result = add();
// print(result);






// console.log(add());


// Callback
function result(Res){
    console.log("In Callback Function")
    console.log(Res);
}


function add(num1,num2,Callback){
    let sum = num1 + num2;
    console.log("In function but not called Callback Funnction");

    Callback(sum);

    console.log("Callback Returned");

}
add(30,40,result);

// let sub = (function(){

// })



