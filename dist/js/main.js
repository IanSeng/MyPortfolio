var tlAbout1 = new TimelineMax();
var tlAbout2 = new TimelineMax({ onUpdate: updatePercentage });
var tlProject1 = new TimelineMax();
var tlProject2 = new TimelineMax({ onUpdate: updatePercentage });
var tlContact1 = new TimelineMax();
var tlContact2 = new TimelineMax({ onUpdate: updatePercentage });
const controller = new ScrollMagic.Controller();

//refer to https://stackoverflow.com/questions/37360616/how-to-create-a-side-menu-that-the-active-item-follow-the-page-content-locatio
window.onscroll = function() {
  var navElement = document.querySelectorAll("a");
  //Function to remove active 
  var removeActive = function(element) {
    for (var i = navElement.length-1; i >= 0 ; --i) {
      element[i].classList.remove("active");
    }
  };
  var previousElement = null;
  for (var i = navElement.length-1; i >= 0 ; i--) {
    //Get the element name 
    console.log(i);
    var currentElement = document.getElementsByClassName(navElement[i].getAttribute("href").substring(1))[0];
    var currentRefElementTop = currentElement.getBoundingClientRect().top;
    console.log(currentRefElementTop);
    if (currentRefElementTop <= 0) {
      //if the browser's top line haven't touched the second elemet
      previousElement = navElement[i];
      if (i == 0) {
        //when it is at the last section 
        removeActive(navElement);
        navElement[i].classList.add("active");
      }
    } else {
      removeActive(navElement);
      previousElement.classList.add("active");
      break;
    }
  }
};

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

//-----------------------------
//tlAbout2.to(".sun", 2,{x:200, y:-250, width:100, height:100,scale:1});
tlAbout2.to(".sun", 2, { x: 200, y: -50, width: 100, height: 100, scale: 1 });
tlProject2.to(".sun", 2, {
  x: 0,
  y: -50,
  zIndex: 10,
  width: 250,
  height: 250,
  scale: 1
});
tlContact2.to(".sun", 2, {
  x: -200,
  y: -50,
  width: 100,
  height: 100,
  scale: 1
});
tlContact2.to(".sun", 2, {
  x: -70,
  y: -50,
  zIndex: -30,
  width: 100,
  height: 100,
  scale: 1
});

tlAbout2.from(".about2", 0.5, { x: -200, opacity: 0 });
tlAbout1.from(".about1", 0.5, { x: 200, opacity: 0 });

tlProject2.from(".project2", 0.5, { x: -200, opacity: 0 });
tlProject1.from(".project1", 0.5, { x: 200, opacity: 0 });

tlContact2.from(".contact2", 0.5, { x: -200, opacity: 0 });
tlContact1.from(".contact1", 0.5, { x: 200, opacity: 0 });
tlContact1.to(".innerCircle", 0.5, {
  boxShadow:
    "0px 0px 60px #3180B9, inset -5px 5px 15px #3180B9, inset -25px 8px 50px #FEFEF3, inset -80px 40px 50px #3180B9, inset -40px 80px 90px #3180B9, inset -500px 200px 70px #172140"
});
//tlAbout2.to(".sun", 2,{x:200, y:-250, scale:1});

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
  .setPin(".sticky2")
  .setTween(tlAbout2)
  .addTo(controller);

let scene3 = new ScrollMagic.Scene({
  triggerElement: ".sticky3"
})
  .setTween(tlProject1)
  .addTo(controller);

let scene4 = new ScrollMagic.Scene({
  triggerElement: ".sticky3",
  triggerHook: "onLeave",
  duration: "100%"
})
  .setPin(".sticky3")
  .setTween(tlProject2)
  .addTo(controller);

let scene5 = new ScrollMagic.Scene({
  triggerElement: ".sticky4"
})
  .setTween(tlContact1)
  .addTo(controller);

let scene6 = new ScrollMagic.Scene({
  triggerElement: ".sticky4",
  triggerHook: "onLeave",
  duration: "100%"
})
  .setPin(".sticky4")
  .setTween(tlContact2)
  .addTo(controller);

function updatePercentage() {
  tlAbout2.progress();
}

