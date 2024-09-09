let segmR = Array.from(document.getElementsByClassName("segmR"));
segmR.forEach((segm, i) => {
  let deg = 30 * i;
  segm.style.transform = "rotate(" + deg + "deg)";
  segm.style.transformOrigin = "bottom left";
  i++;
});

let segmL = Array.from(document.getElementsByClassName("segmL"));
segmL.forEach((segm, i) => {
  let deg = -30 * (i + 1);
  segm.style.transform = "rotate(" + deg + "deg)";
  segm.style.transformOrigin = "bottom left";
  i++;
});

let rings = Array.from(document.getElementsByClassName("ring"));
rings.forEach((ring, i) => {
  ring.style.width = 200 - 50 * i + "px";
  ring.style.height = 40 - 10 * i + "px";
  ring.style.margin = 10 - 10 * i + "px";
  i++;
});

let tl1 = gsap.timeline({
  repeat: -1,
  yoyo: true,
});

let tl2 = gsap.timeline({
  repeat: -1,
  yoyo: true,
});

tl1
  .to(".segmR", {
    scale: 0.5,
    rotate: 0,
    mixBlendMode: "darken",
    //now slightly faster ;)
    duration: 4,
    ease: "sine.inOut",
  })
  .to(
    ".corolla",
    {
      xPercent: -49,
      yPercent: 49,
      duration: 4,
      ease: "sine.inOut",
    },
    "<"
  );

tl2
  .to(".segmL", {
    scale: 0.5,
    rotate: 0,
    mixBlendMode: "darken",
    duration: 4,
    ease: "sine.inOut",
  })
  .to(
    ".corolla",
    {
      xPercent: -49,
      yPercent: 49,
      duration: 4,
      ease: "sine.inOut",
    },
    "<"
  );
