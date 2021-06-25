let div1 = document.getElementsByClassName('option')[0];

// what?


document.addEventListener("scroll", () => {
  let scrollPosition = (window.pageYOffset !== undefined) ?
  window.pageYOffset : 
  (document.documentElement || document.body.parentNode || document.body).scrollTop;
  // 292 max

  /* screen height */
  let windowHeight = window.innerHeight;
  // 812 constant;

  /* div 1 Y offset */
  let div_1_OffsetPositon = div1.getBoundingClientRect().y;
  // 146 to -146

  /* screen covered with scroll */
  let scrollDistance = scrollPosition - div_1_OffsetPositon;

  if (-100 < scrollDistance < 100) {
    div1.classList.add('hovering');
  } else {
    div1.classList.remove('hovering');
  }
}, false)

