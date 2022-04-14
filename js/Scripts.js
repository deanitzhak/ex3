document.getElementById("first").setAttribute("style","opacity:0.3; -moz-opacity:0.3; filter:alpha(opacity=30)");
document.getElementById("second").setAttribute("style","opacity:0.5; -moz-opacity:0.5; filter:alpha(opacity=50)");
document.getElementById("third").setAttribute("style","opacity:0.7; -moz-opacity:0.7; filter:alpha(opacity=70)");
document.getElementById("fourth").setAttribute("style","opacity:1; -moz-opacity:1; filter:alpha(opacity=100)");
let counter = 1;
let loopCounter = 0;
let rot = 0;
/* hover  */
document.getElementById("third").onmousemove = function (){moveIn("third")};
document.getElementById("third").onmouseout = function (){moveOut("third")};

document.getElementById("second").onmousemove = function (){moveIn("second")};
document.getElementById("second").onmouseout = function (){moveOut("second")};

document.getElementById("first").onmousemove = function (){moveIn("first")};
document.getElementById("first").onmouseout = function (){moveOut("first")};

document.getElementById("fourth").onmousemove = function (){moveIn("fourth")};
document.getElementById("fourth").onmouseout = function (){moveOut("fourth")};

document.getElementById("h1Plus").onmousemove = function (){moveInText("h1Plus")};
document.getElementById("h1Plus").onmouseout = function (){moveOutText("h1Plus")};

function moveInText(a){
  document.getElementById(a).style.opacity = '70%';
}
function moveOutText(a){
  document.getElementById(a).style.opacity = '100%';
}

function moveIn(a){
  document.getElementById(a).style.background = 'darksalmon';
}
function moveOut(a){
  document.getElementById(a).style.background = '';
}
/* hover  */
document.getElementById("h1Plus").addEventListener('click',function(){
  let text = document.getElementById("h1Plus").innerHTML;
  if(text == "+"){
    rotateImage();
  }else{
    loadHome();
  }

})
let number = getRndInteger(10,100);
loopCounter = number;
for(let i=0;i<=number;i++){
    let numberOP = getRndInteger(2,8)*0.1;
    let BoxDive = document.createElement('div');
    BoxDive.id = 'box'+i;
    BoxDive.className = 'topBoxes';
    BoxDive.style.opacity = numberOP;
    BoxDive.onmousemove = function(){
      BoxDive.style.background = 'darksalmon';
    }
    BoxDive.onmouseout = function(){
      BoxDive.style.background = "";
    }
    BoxDive.style.transition = "transform 0.5s";
    BoxDive.addEventListener('click',function (){
      let bool = 0;
      if(bool == 0){
        BoxDive.style.background = "#FEB4C9";
        bool = 1;
      }else {
        BoxDive.style.background = "#white";
      }
    });
    document.getElementsByTagName('main')[0].getElementsByTagName('section')[0].appendChild(BoxDive);
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function rotateImage() 
{
  if(counter == 5)
  {
    let ang = 0;
    setBoxtranstransition();
    for(let i = 0; i<8;i++){
      resetRotait(i,ang);
      ang +=360;
    }
    document.getElementById("h1Plus").innerHTML = "Hey enough it's enough the time has come for you to stop. for Reset press on me"
    document.getElementById("h1Plus").style.fontSize = "25px";
    document.getElementById("h1Plus").style.color = "#1eff61";
  }else{
    rot += 72;
    counter++;
    for(let i = 0; i<8; i++){
      rotaitBox(i,rot);
    }
  }
}
function rotaitBox(number,rot){
  document.querySelector('#box'+number).style.transform = 'rotate(' + rot + 'deg)';
}
function setBoxtranstransition(i){
  for(let i = 0; i<8;i++){
    document.getElementById("box"+i).transition = "transform 0.20s";
  }
}
function resetRotait(number,rot){
  document.querySelector('#box'+number).style.transform = 'rotate(' + rot + 'deg)';

}
function loadHome() {
  location.href = "Layout3.html";
};

