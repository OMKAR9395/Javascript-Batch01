document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();

    let userName = document.getElementById("userName").ariaValueMax.trim();
    let email = document.getElementById("email").ariaValueMax.trim();

    let valid = true;

    if(userName.length < 3){
        document.getElementById("userErr").innerText = "UserName Must Be  At Least 3 CHaracter";
        valid = false;
    }else{
        document.getElementById("userErr").innerText = "";
    }
    if(!email.includes("@")||!email.includes(".")){
         document.getElementById("emailErr").innerText = "Enter Valid Email";
        valid = false;
    }else{
        document.getElementById("emailErr").innerText = "";
    }

    if(valid){
        alert("Form Sumbmitted Successfully");
    }
})