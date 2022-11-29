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