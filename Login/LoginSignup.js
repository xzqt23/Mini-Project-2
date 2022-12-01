//you can change the text, but you need to keep same format [yourtext, color];
let yourtext = [
    ["Learn from Zero to Hero?", "#ffd166"],
    ["Enroll now! Pay later!", "#7DE2D1"],
    ["Be a Cyber Defender!", "#DE3C4B"]
  ];
  
  let x = 0;
  let y = 0;
  //how fast typing is
  let wait = 100;
  //how long you want to text stay before overwriting
  let additionalwait = 5;
  let txt = yourtext[0][0].split("");
  let out = "";
  let retyping = setInterval(function () {
    document.getElementById("changingText").innerHTML = out;
    if (x > txt.length - 1) {
    } else {
      out += txt[x];
    }
    x++;
    if (x == txt.length + 2 + additionalwait) {
      if (y == yourtext.length - 1) {
        y = 0;
        txt = yourtext[y][0].split("");
        out = "";
        document.getElementById("changingText").innerHTML = out;
        document.getElementById("changingText").style.color = yourtext[y][1];
        x = 0;
      } else {
        y += 1;
        txt = yourtext[y][0].split("");
        out = "";
        document.getElementById("changingText").innerHTML = out;
        document.getElementById("changingText").style.color = yourtext[y][1];
        x = 0;
      }
    }
  }, wait);


  // These area below contain the JavaScript code for Login and Signup switching...

  function mySignUp() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signUpForm").style.display = "block";
  }
  
  function myLogin() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signUpForm").style.display = "none";
  }


  
  //email and password validation

  function validation(){
    const emailBorder = document.getElementById('email')
    const passwordBorder=document.getElementById('password')
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailtxt = document.getElementById("emailtxt");
    const passwordtxt = document.getElementById("passwordtxt");
    const mailFormat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    
  if(password ==''&& email==''){
      emailBorder.style.borderColor = "red";
      emailBorder.style.borderWidth = "thick"
      emailtxt.innerHTML='Enter email'
      emailtxt.style.color='red'
  
      passwordBorder.style.borderColor = "red";
      passwordBorder.style.borderWidth = "thick"
      passwordtxt.innerHTML='Enter valid password'
      passwordtxt.style.color='red'
    
    }
  
  else if (email == ''){
   
      emailBorder.style.borderColor = "red";
      emailBorder.style.borderWidth = "thick"
      emailtxt.innerHTML='Enter email'
      emailtxt.style.color='red'
    
    }
    else if (password==''){
      passwordBorder.style.borderColor = "red";
      passwordBorder.style.borderWidth = "thick"
      passwordtxt.innerHTML='Enter valid password'
      passwordtxt.style.color='red'
    }
    
    else if(!email.match(mailFormat)){
      emailtxt.innerHTML='Please enter valid email'
      emailtxt.style.color='red'
  
    }
  
   
  } 


  // Signup validation

  function Signup(){
    const username = document.getElementById('username').value
    const usernametxt = document.getElementById('userName')
    const emailSignup= document.getElementById('emailSignup').value
    const emailTxt = document.getElementById('emailTxt')
    const passwordSignup = document.getElementById('passwordSignup').value
    const passwordTxt = document.getElementById('passwordTxt')
    if(username==''&&emailSignup ==''&&passwordSignup=='' ){
      usernametxt.innerHTML='Username cannot be blank'
      usernametxt.style.color='Red'

      emailTxt.innerHTML='Email cannot be blank'
      emailTxt.style.color='Red'

      passwordTxt.innerHTML='Password cannot be blank'
      passwordTxt.style.color='Red'

    }

    else if (passwordSignup.length < 8){
      passwordTxt.innerHTML='Password must be at least 8 characters'
      passwordTxt.style.color='Red'
    }
  
  }

  // show password
  function myPassword(){
    const show= document.getElementById("passwordSignup");
  if (show.type === "password") {
    show.type = "text";
  } else {
    show.type = "password";
  }
}
  

function onSuccess(googleUser) {
  console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
}
function onFailure(error) {
  console.log(error);
}
function renderButton() {
  gapi.signin2.render('my-signin2', {
    'scope': 'profile email',
    'width': 240,
    'height': 50,
    'longtitle': true,
    'theme': 'dark',
    'onsuccess': onSuccess,
    'onfailure': onFailure
  });
}