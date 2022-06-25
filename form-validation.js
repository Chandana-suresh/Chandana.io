function register(){
    console.log("calling register function")
    var username=document.getElementById("username");
    console.log(username);
    console.log(username.value)
    console.log(username.value.length)
    if(username.value.length == "")
    {
        console.log("Please Enter User Name")
        var errorUserName =document.getElementById("errorUserName")
        console.log(errorUserName)
        errorUserName.innerHTML="Please Enter User Name"
    }
}
function display() {
    console.log("calling display function")
    var email=document.getElementById("email");
    console.log(email)
    console.log(email.value)
    console.log(email.value.length)
    if(email.value.length == "")
    {
        console.log("Please Enter User email")
        var erroruseremail =document.getElementById("erroruseremail")
        console.log(erroruseremail)
        erroruseremail.innerHTML="Please Enter User email"
    }
    
}
function call() {
    console.log("calling call function")
    var password=document.getElementById("password");
    console.log(password)
    console.log(password.value)
    console.log(password.value.length)
    if(password.value.length == "")
    {
        console.log("Please Enter User email")
        var erroruserpassword =document.getElementById("erroruserpassword")
        console.log(erroruserepassword)
        erroruserpassword.innerHTML="Please Enter User password"
    }
}