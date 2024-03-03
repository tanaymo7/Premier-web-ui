const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".scrollContainer"),
  smooth: true,
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".scrollContainer", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },

  pinType: document.querySelector(".scrollContainer").style.transform
    ? "transform"
    : "fixed",
});

gsap.to("#page2 #page2Img", {
  width: "55%",
  opacity: "1",
  scrollTrigger: {
    trigger: "#page2",
    scroller: ".scrollContainer",
    start: "top 100%",
    end: "top 0",
    scrub: 2,
  },
});
gsap.to("#page2 #page2Img2", {
  height: "75%",
  opacity: "1",
  scrollTrigger: {
    trigger: "#page2",
    scroller: ".scrollContainer",
    start: "top 70%",
    end: "top 0",
    scrub: 0.8,
  },
});
gsap.to(".page4 img", {
  width: "100%",
  opacity:"1",
  borderRadius: "0%",
  scrollTrigger: {
    trigger: ".page4",
    scroller: ".scrollContainer",
    start: "top 0",
    end: "top -100%",
    scrub: 0.8,
    pin: true,
  },
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// alphabet navbar
function generateAlphabetList() {
  let nav = document.querySelector(".alpha-nav ul");
  for (var i = 65; i <= 90; i++) {
    let li = document.createElement("li");
    li.textContent = String.fromCharCode(i);
    nav.appendChild(li);
  }
}
generateAlphabetList();
