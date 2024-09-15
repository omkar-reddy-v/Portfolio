let darkmode = document.querySelector("#darkmode");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let header = document.querySelector("header");
let image = document.getElementById("image");
let image1 = document.getElementById("image1");
let btn = document.querySelector(".btn");
let resume  = document.querySelector("#resume");
let send = document.querySelector('#send');
let changecolor1 = document.querySelector('.changecolor1');
let changecolor2 = document.querySelector('.changecolor2');
let changecolor3 = document.querySelector('.changecolor3');
let p1 = document.querySelector('p1');
let p2 = document.querySelector('p2');



window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

darkmode.addEventListener("click", modechange);
function modechange() {
  if (darkmode.classList.contains("bx-moon")) {
    document.body.classList.add("active");
    darkmode.classList.replace("bx-moon", "bx-sun");
    btn.style.border = '3px solid rgb(44, 210, 240)';
    btn.style.boxShadow = '0 0 1.5rem rgb(44, 210, 240)';
    resume.style.border = '3px solid rgb(44, 210, 240)';
    resume.style.boxShadow = '0 0 1.5rem rgb(44, 210, 240)';
    send.style.border = '3px solid rgb(44, 210, 240)';
    send.style.boxShadow = '0 0 1.5rem rgb(44, 210, 240)';
    image.style.border = '4px solid rgb(44, 210, 240)';
    image.style.boxShadow = '0 0 2rem rgb(44, 210, 240)';
    image1.style.border = '5px solid rgb(44, 210, 240)';
    image1.style.boxShadow = '0 0 2rem rgb(44, 210, 240)';
    changecolor1.style.color="greenyellow";
    changecolor2.style.color="greenyellow";
    changecolor3.style.color="greenyellow";
    p1.style.color=' #75b8c8';
    p2.style.color=' #75b8c8';

  } else {
    document.body.classList.remove("active");
    darkmode.classList.replace("bx-sun", "bx-moon");
    image.style.border = "none";
    image.style.boxShadow = "none";
    image1.style.border = "none";
    image1.style.boxShadow = "none";
    btn.style.border = 'none';
    btn.style.boxShadow = 'none';
    resume.style.border = 'none';
    resume.style.boxShadow = 'none';
    send.style.border = 'none';
    send.style.boxShadow = 'none';
    changecolor1.style.color="black";
    changecolor2.style.color="black";
    changecolor3.style.color="black";
    p1.style.color=' #b56576';
    p2.style.color=' #b56576';

  }
}





// This functions is used to animate the text 
const text= document.getElementById('animatedText3');
const originalText = text.textContent;
text.textContent = ''; // Clear the original text 

let index = 0;
const interval = 200; // Time interval between letters (adjust as needed)

function animateText() {
    if (index < originalText.length) {
        text.textContent += originalText[index];
        index++;
        setTimeout(animateText, interval);
    }
}

window.onload=animateText(); // Start the animation 