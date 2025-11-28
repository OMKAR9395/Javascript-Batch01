function wakeUp(num){
    console.log("In Function Wake up");
    num();

}
function breakFast(sub){
    console.log("In Function Breakfast");
    sub();
}
function goToCollege(roti){
    console.log("In Function Go To College");
    roti();
}
function lunchBreak(){
    console.log("In Colege Lunch Break");
}
wakeUp(()=>breakFast(()=>goToCollege(()=>lunchBreak())));
