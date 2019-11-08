var tlAbout1 = new TimelineMax();
var tlAbout2 = new TimelineMax({ onUpdate: updatePercentage });
var tlProject1 = new TimelineMax({ onUpdate: updatePercentage });
var tlProject1a = new TimelineMax({ onUpdate: updatePercentage });
var tlProject2 = new TimelineMax({ onUpdate: updatePercentage });
var tlSun = new TimelineMax();
var tlSun2 = new TimelineMax();
var tlContact2 = new TimelineMax({ onUpdate: updatePercentage });
const controller = new ScrollMagic.Controller();
var tlProject3 = new TimelineMax({ onUpdate: updatePercentage });
var rellax = new Rellax(".rellax");
//-------------typing ---------------------
const texts = ["student", "developer", "gamer", "dreamer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  } else if (count === 1) {
    document.querySelector(".typing").style.color = "blue";
  } else if (count === 2) {
    document.querySelector(".typing").style.color = "red";
  } else if (count === 3) {
    document.querySelector(".typing").style.color = "purple";
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  console.log(index);
  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 400);
})();

function removeTyping() {
  letter = currentText.slice(text.length, --index);
  document.querySelector(".typing").textContent = letter;
}
//refer to https://stackoverflow.com/questions/37360616/how-to-create-a-side-menu-that-the-active-item-follow-the-page-content-locatio
// window.onscroll = function() {
//   var navElement = document.querySelectorAll("a");
//   //Function to remove active
//   var removeActive = function(element) {
//     for (var i = navElement.length - 1; i >= 0; --i) {
//       element[i].classList.remove("active");
//     }
//   };
//   var previousElement = null;
//   for (var i = navElement.length - 1; i >= 0; i--) {
//     //Get the element name
//     console.log(i);
//     var currentElement = document.getElementsByClassName(
//       navElement[i].getAttribute("href").substring(1)
//     )[0];
//     var currentRefElementTop = currentElement.getBoundingClientRect().top;
//     console.log(currentRefElementTop);
//     if (currentRefElementTop <= 0) {
//       //if the browser's top line haven't touched the second elemet
//       previousElement = navElement[i];
//       if (i == 0) {
//         //when it is at the last section
//         removeActive(navElement);
//         navElement[i].classList.add("active");
//       }
//     } else {
//       removeActive(navElement);
//       previousElement.classList.add("active");
//       break;
//     }
//   }
// };

//-------------Scroll function---------------------
function scrollToFunction(section) {
  //console.log(x);
  TweenMax.to(window, 2, {
    scrollTo: {
      y: section,
      offsetY: "-" + window.innerHeight * 0.8,
      autoKill: false
    }
  });
  //console.log("-"+window.innerHeight);
}

//-----------Sun------------------
//tlAbout2.to(".sun", 2,{x:200, y:-250, width:100, height:100,scale:1});
// tlProject2.to(".sun", 2, {
//   x: 0,
//   y: -50,
//   zIndex: 10,
//   width: 250,
//   height: 250,
//   scale: 1
// });
tlSun
  // .fromTo(
  //   ".sun",
  //   3,
  //   {
  //     top: "50%",
  //     left: "50%",
  //     x: "30%",
  //     y: "-88%",
  //     zIndex: 10,
  //     width: 250,
  //     height: 250,
  //     scale: 1
  //   },
  //   {
  //     top: "50%",
  //     left: "50%",
  //     x: "-50%",
  //     y: "-88%",
  //     zIndex: 10,
  //     width: 250,
  //     height: 250,
  //     scale: 1
  //   }
  // )
  // .fromTo(".sticky3b", 1, { background: "white" }, { background: "black" })
  .fromTo(".picmymedlogo", 0.8, { opacity: 0 }, { opacity: 1 })
  .fromTo(
    [".picmymedtitle", ".picmymeddes"],
    0.3,
    { opacity: 0 },
    { opacity: 1 }
  );

tlSun2
  .fromTo(".sfologo", 0.3, { opacity: 0 }, { opacity: 1 })
  .fromTo([".sfotitle", ".sfodes"], 0.1, { opacity: 0 }, { opacity: 1 });
// .fromTo(
//   ".innerCircle",
//   0.3,
//   {},
//   {
//     // boxShadow:
//     //   " 0px 0px 60px #3180B9, inset 20px 20px 60px #234368, inset 20px 20px 50px #234368,inset -20px -20px 30px #3180B9, inset -20px 20px 30px #234368, inset 20px -20px 30px #234368"
//   }
// );

//----------NEW-------------------
var tl = new TimelineMax();
tl.fromTo(
  ".i",
  0.8,
  { textShadow: "" },
  {
    textShadow:
      "70px 0px rgba(49, 47, 47, 0.85),140px 0px rgba(49, 47, 47, 0.79), 210px 0px rgba(49, 47, 47, 0.62),280px 0px rgba(49, 47, 47, 0.43), 350px 0px rgba(49, 47, 47, 0.38),420px 0px rgba(49, 47, 47, 0.3);"
  }
)
  .fromTo(
    ".a",
    1.2,
    { opacity: 0, textShadow: "" },
    { opacity: 1, textShadow: "20px 30px 7px rgba(0, 0, 0, 0.16)" }
  )
  .fromTo(
    ".n",
    0.8,
    { textShadow: "" },
    {
      textShadow:
        "50px 0px rgba(245, 215, 56, 0.81), 100px 0px rgba(49, 47, 47, 0.59),150px 0px rgba(245, 215, 56, 0.47), 200px 0px rgba(49, 47, 47, 0.28),250px 0px rgba(49, 47, 47, 0.28), 300px 0px rgba(245, 215, 56, 0.32),350px 0px rgba(49, 47, 47, 0.19), 400px 0px rgba(245, 215, 56, 0.15)"
    }
  )
  .fromTo(
    ".innerl",
    0.8,
    { textShadow: "" },
    {
      textShadow:
        "0px -50px rgba(49, 47, 47, 0.77),0px -110px rgba(49, 47, 47, 0.73), 0px -180px rgba(49, 47, 47, 0.51),0px -270px rgba(245, 215, 56, 0.4), 0px -400px rgba(49, 47, 47, 0.22);"
    }
  )
  .fromTo(".ianseng", 2, { opacity: 0 }, { opacity: 1 });
//----------NEW-------------------
//tlAbout1.from("#about-header", 1, { x: -600, opacity: 0 });
tlAbout2.from("#myself2", 0.5, { x: 200, opacity: 0 });

tlProject2.from(".project2", 0.5, { x: -200, opacity: 0 });
tlProject1.to(".project1a", 1, { x: -200 }).to(".project1", 1, { x: -350 });

//tlProject1.to(".project1", 0.5, { x: 100, opacity: 0 });

//tlContact2.from(".contact2", 0.5, { x: -200, opacity: 0 });
//tlContact1.from(".contact1", 0.5, { x: 200, opacity: 0 });
tlContact2
  .from(".contact1", 2, { opacity: 0 })
  .from(".emaillink", 1, { opacity: 0 })
  .from(".footer", 1, { opacity: 0 });
//tlAbout2.to(".sun", 2,{x:200, y:-250, scale:1});
tlProject3
  .from("#lineimg", 1, { x: -1000 })
  .to("#sticky3amore", 2, { x: -3100 }, 0)
  .from("#githubSign", 1, { x: 500 });

//to("#sticky3amore", 2, { x: -800},0);
//-------------scene-----------------
let scene1 = new ScrollMagic.Scene({
  triggerElement: ".sticky2"
})
  .setTween(tlAbout1)
  .addTo(controller);

let scene2 = new ScrollMagic.Scene({
  triggerElement: ".sticky2",
  triggerHook: "onLeave",
  duration: "100%"
})
  //.setPin(".sticky2")
  .setTween(tlAbout2)
  .addTo(controller);

let scene3 = new ScrollMagic.Scene({
  triggerElement: ".sticky3",
  duration: "100%"
})
  .setTween(tlProject1)
  .addTo(controller);

let scene3a = new ScrollMagic.Scene({
  triggerElement: ".picmymedlogo"
})
  .setTween(tlSun)
  .addTo(controller);

let scene3b = new ScrollMagic.Scene({
  triggerElement: ".sfotitle"
})
  .setTween(tlSun2)
  .addTo(controller);

// let scene4 = new ScrollMagic.Scene({
//   triggerElement: ".sticky3",
//   triggerHook: 0.4,
//   duration: "100%"
// })
//   .setPin(".sticky3")
//   .setTween(tlProject2)
//   .addTo(controller);

// let scene5 = new ScrollMagic.Scene({
//   triggerElement: ".sticky4"
// })
//   .setTween(tlContact1)
//   .addTo(controller);

let scene6 = new ScrollMagic.Scene({
  triggerElement: ".sticky4",
  triggerHook: "onLeave",
  duration: "100%"
})
  .setPin(".sticky4")
  .setTween(tlContact2)
  .addTo(controller);

let scene7 = new ScrollMagic.Scene({
  triggerElement: ".sticky3a",
  triggerHook: "onLeave",
  duration: "100%"
})
  //.setPin(".sticky3a")
  .setTween(tlProject3)
  .addTo(controller);

function updatePercentage() {
  tlAbout2.progress();
}
