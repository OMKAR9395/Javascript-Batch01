/*
*
**
***
****
*/


let i,j;
let pattern = "";

for(i=1;i<=5;i++){

    for(j=1;j<=5;j++){
        if(i>=j){
            pattern = pattern + " *";
        }
    }
    console.log(pattern);
    pattern="";
}