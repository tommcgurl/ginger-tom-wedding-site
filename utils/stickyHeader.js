const setUpStickHeader = (selector, scrollTop) => {
  let element = document.querySelector(selector);
  window.addEventListener('scroll', (e) => {
    if (window.scrollY > scrollTop) {
      // Add the class to make it stick
      element.classList.add('fixed')
    } else {
      // remove the last class which would be fixed.
      let newClassList = [];
      for (let i = 0; i < element.classList.length; i++ ) {
        if(element.classList[i] !== 'fixed') {
          newClassList.push(element.classList[i]);
        }
      }
      element.classList = newClassList;
    }
  })
};

export default setUpStickHeader;
