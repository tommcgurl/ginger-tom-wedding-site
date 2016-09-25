const setUpStickHeader = (selector, scrollTop) => {
  let element = document.querySelector(selector);
  window.addEventListener('scroll', (e) => {
    if (window.scrollY > scrollTop) {
      // Add the class to make it stick
      element.classList.add('fixed')
    } else {
      // remove the last class which would be fixed.
      element.classList.remove('fixed');
    }
  })
};

export default setUpStickHeader;
