(function(){
    console.log("This Is IIFE function");
})();





let sum = (function(a,b){
    return a+b;
})(10,20);

console.log(sum);


console.log((function(a,b){
    return a+b;
})(10,30))
