//variable to hold modal
var modal = document.querySelector('.modal');
//hide modal on initial load
modal.style.display="none";

//variable to hold form
var loginForm = document.querySelector("#login-form");

loginForm.addEventListener('submit', function(e){
  e.preventDefault();
})

//function to validate credentials when logging in
function validateLogin(){
  var unameField = document.querySelector("#uname");
  var pwdField = document.querySelector("#pwd");

//if credentials are incorrect, reject login and display modal
  if(unameField.value!="Admin"||pwdField.value!="123456"){
    modal.style.display="block";
  }
//else allow successful login with correct credentials and redirect user to home page
  else if (unameField.value=="Admin"||pwdField.value=="123456")
   {
     alert("You are now logged in!");
    window.location.href = "index.html"
  }

}

function dismissModal(){
  modal.style.display="none";
}
