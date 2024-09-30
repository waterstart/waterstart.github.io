document.addEventListener('DOMContentLoaded', function()
{

  const dropBtns = document.querySelectorAll('.DropDown button');
// iterate over the nodelist 
dropBtns.forEach(btn => {
  // add a mouseover eventListener and pass the event
  btn.addEventListener('mouseover', (e) => {
    // query the Categories within the eventListeners parent element
    // using closest()
    const category = btn.closest('.DropDown').querySelector('.Categories');
    // get the height of the NAV so the dropdowns top position 
    // nca be placed just below the scroller for the NAV buttons
    const navHeight = e.target.closest('.CategoryBlock').getBoundingClientRect().height;
    // skip the elements (buttons) without a dropdown
    if (category) {
      // buffer for elements on the edge of the windows page
      const buffer = 8;
      // get the boundingClientRect for the eventTarget
      const categoryRect = e.target.getBoundingClientRect();
      // get the boundingClientRect for the dropdown elements
      const dropdownWidth = category.getBoundingClientRect().width
      // set the initial left position for elements
      let categoryPosition = categoryRect.left;
      // conditional to check for overflowing dropdown elements
      // is the dropdown elements width overflowing past 
      // the left edge of the window?
      if (window.innerWidth < categoryRect.left + dropdownWidth) {
        // if true, set the right edge of the dropdown element to a
        // buffer set to the left of windows innerWidth
        categoryPosition = window.innerWidth - dropdownWidth - buffer;
        // move any nav buttons overflowed element into view
        btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
        // else if the scrolled button is left of the windows fold
      } else if (categoryRect.left < 0) {
        // set the left of the dropdown to the buffer
        categoryPosition = buffer;
        // move any nav buttons overflowed element into view
        btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" })
      }
      // pass the left position to a CSS variable using the root 
      // this will be used in CSS to set the .Categories left position
      // var(--scrolled-left)
      document.documentElement.style.setProperty('--scrolled-left', `${categoryPosition}px`);
      // set the position of the top of the dropdown
      // to below the scrollbar on the nav section
      document.documentElement.style.setProperty('--top-pos', `${navHeight - buffer+150}px`);
    }
  })
})

});
// ai did not make this, some guy on stackoverflow thankkkkk you!