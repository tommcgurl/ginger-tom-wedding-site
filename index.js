import MainContent from './components/MainContent';
import setUpStickHeader from './utils/stickyHeader';
import Tabs from './components/Tabs';

// Get the initial route
const bootStrapApp = () => {
  const currentTab = window.location.hash ? window.location.hash.toUpperCase().substring(1) : 'HOME';

  // Set the intial active tab
  let tabs = document.getElementsByClassName('tab-item');
  // We cannot use for each since tabs is not a traditional array
  for (let i = 0; i < tabs.length; i ++) {
    const innerText = tabs[i].innerText.replace(/\W/g, '');
    if (innerText === currentTab) {
      // Grab the 'a' tag under the 'li' tag
      tabs[i].children[0].classList.add('active');
    } else {
      tabs[i].children[0].classList.remove('active');
    }
  }

  const ContentComponent = new MainContent('content','top-image', currentTab);
  ContentComponent.render();

  // Create event listener on the tabs
  const tabList = document.getElementById('tab-list');
  const mainContainerHeight = document.getElementById('main-header').getBoundingClientRect().height;
  setUpStickHeader('.tab-container', mainContainerHeight);
  tabList.addEventListener("click", e => ContentComponent.handleTabChange(e));
}

bootStrapApp();
