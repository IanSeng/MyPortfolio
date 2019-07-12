//Select DOM (document object model) Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuIndex = document.querySelector(".menu-index");
const menuAbout = document.querySelector(".menu-about");
const menuWork = document.querySelector(".menu-work");
//Home page 
var outter = document.getElementsByClassName("outter");
var sun = document.getElementsByClassName("sun");
var innerCircle = document.getElementsByClassName("innerCircle");
var body = document.getElementsByTagName("body");
//Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuIndex.classList.add("show");
    menuAbout.classList.add("show");
    menuWork.classList.add("show");

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuIndex.classList.remove("show");
    menuAbout.classList.remove("show");
    menuWork.classList.remove("show");

    // Set Menu State
    showMenu = false;
  }
}

//Home Page MoonSun animation 
document.onmousemove = function() {
  var x = event.clientX * 100 / window.innerWidth;
  
  if (x > 50 && get() == 0) {
    body[0].style.background = "black";
    body[0].style.animation = "whiteToBlack 5s";
    outter[0].style.transform = "rotate(120deg)";
    outter[0].style.animation = "move-sun 5s";
    sun[0].style.boxShadow ="0px 0px 60px #62c6eb, inset 0px 0px 20px #fefef5,inset 0px 0px 50px #fefbc4";
    sun[0].style.animation = "toMoonColor 4s";
    innerCircle[0].style.animation = "toMoon 5s";
    innerCircle[0].style.boxShadow = "0px 0px 60px #3180B9,inset -5px 5px 15px #3180B9 ,inset -25px 8px 50px #FEFEF3, inset -80px 40px 50px #3180B9, inset -40px 80px 90px #3180B9, inset -500px 200px 70px #172140";
   
  } else if (x < 50 && get()==120) {
    body[0].style.background = "white";
    body[0].style.animation = "blackToWhite 5s";
    outter[0].style.transform = "rotate(0deg)";
    outter[0].style.animation = "move-sun-back 5s";
    sun[0].style.boxShadow =
      "0px 0px 60px #feed5b, inset 0px 0px 60px #fdb940, inset 0px 0px 50px #fdb940";
    sun[0].style.animation = "toSunColor 4s";
    innerCircle[0].style.boxShadow = "0px 0px 60px #feed5b, inset 15px 15px 50px #fffebb,inset 70px 150px 50px #f4d26d, inset 80px 180px 50px #d7944e, inset 600px 400px 50px #c26337";
    innerCircle[0].style.animation = "toSun 5s";
    
  }
};

//function to find degree
function get() {
  //console.log(document.styleSheets[2]);
  var el = document.getElementById("outter");
  var st = window.getComputedStyle(el, null);
  var tr =
    st.getPropertyValue("-webkit-transform") ||
    st.getPropertyValue("-moz-transform") ||
    st.getPropertyValue("-ms-transform") ||
    st.getPropertyValue("-o-transform") ||
    st.getPropertyValue("transform") ||
    "FAIL";

  // With rotate(30deg)...
  // matrix(0.866025, 0.5, -0.5, 0.866025, 0px, 0px)
  //console.log("Matrix: " + tr);

  // rotation matrix - http://en.wikipedia.org/wiki/Rotation_matrix

  var values = tr
    .split("(")[1]
    .split(")")[0]
    .split(",");
  var a = values[0];
  var b = values[1];
  var c = values[2];
  var d = values[3];

  var scale = Math.sqrt(a * a + b * b);

  //console.log("Scale: " + scale);

  // arc sin, convert from radians to degrees, round
  var sin = b / scale;
  // next line works for 30deg but not 130deg (returns 50);
  // var angle = Math.round(Math.asin(sin) * (180/Math.PI));
  var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));

  return angle;
}

// search through CSSOM for keyframes
function findKeyframesRule(rule) {
  // gather all stylesheets into an array
  var ss = document.styleSheets;

  // loop through the stylesheets
  for (var i = 0; i < ss.length; ++i) {
    // loop through all the rules
    for (var j = 0; j < ss[i].cssRules.length; ++j) {
      // find the -webkit-keyframe rule whose name matches our passed over parameter and return that rule
      if (
        ss[i].cssRules[j].type == window.CSSRule.KEYFRAMES_RULE &&
        ss[i].cssRules[j].name == rule
      )
        return ss[i].cssRules[j];
    }
  }

  // rule not found
  console.log("Error");
}


