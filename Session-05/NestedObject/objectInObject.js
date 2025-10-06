let student = {
    name : "Sunny",
    age : 22,
    adress :{
        city:"pune",
        pincode : 415106
    }

};

for(let key in student){
    if(typeof student[key] === "object"){
        for(let innerkey in student[key]){
            console.log(innerkey + ":",student[key][innerkey]);
        }

    }else{
        console.log(key + ":",student[key]);
    }
}