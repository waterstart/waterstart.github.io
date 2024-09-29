(function () {
    // detect touch
    if ("ontouchstart" in document.documentElement) {
      document.documentElement.className += " touch-device";
    }
  
    const scroller = document.querySelector(".navwrap");
    const dropDown = document.querySelectorAll(".dropdown");
    scroller.addEventListener("scroll", checkScroll);
  
    function checkScroll() {
      document.activeElement.blur();
     scroller.classList.add("isScrolling");
      for (let i = 0; i < dropDown.length; i++) {
        dropDown[i].style.transform =
          "translateX(-" + scroller.scrollLeft + "px)";
      }
     scroller.classList.remove("isScrolling");
    }
  })();
  
  /* 
  SEE Sitepoint Thread: 
  https://www.sitepoint.com/community/t/css-drop-down-menu-hidden-behind-horizontal-scrollbar/367783/16 
  */
  