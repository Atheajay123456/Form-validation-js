

function valid(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let pancard = document.getElementById("pancard").value;
    let adhar = document.getElementById("adhar").value;

    if(username.trim() === "" || password.trim() === "" || email.trim() === "" || mobile.trim() === "" || pancard.trim() === "" || adhar.trim() === ""){
        alert("Please fill in all the fields.");
        return false;
    }
    else{
        alert("Form submitted successfully!");
        return true;
    }
}