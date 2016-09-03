import MainContent from './components/MainContent';
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
      tabs[i].children[0].classList = ['active'];
    } else {
      tabs[i].children[0].classList = [];
    }
  }

  const ContentComponent = new MainContent('content','top-image','bottom-image', currentTab);
  ContentComponent.render();

  // Create event listener on the tabs
  const tabList = document.getElementById('tab-list');
  tabList.addEventListener("click", e => ContentComponent.handleTabChange(e));
}

bootStrapApp();
