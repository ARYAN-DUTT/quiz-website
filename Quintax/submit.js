
document.getElementById('submit-btn').addEventListener('click', function() {

let userName = document.getElementById("username").value;
let passWord = document.getElementById("password").value;
specificUsername = "aryan";
specificPassWord = "aryan123";

if(userName===specificUsername && passWord===specificPassWord){
    window.location.assign("choose.html");
}else{
    window.location.assign("password.html");
}
});