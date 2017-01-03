const HOME = 'HOME';
const PHOTOS = 'PHOTOS';
const LOCATION = 'LOCATION';
const BRIDAL_PARTY = 'BRIDALPARTY';
const REGISTRY = 'REGISTRY';
import Location from './Location.js';
import Home from './Home.js';
import Registry from './Registry.js';

export default class Content {
  constructor(selector, topImageSelector, currentTab) {
    this.selector = selector;
    this.topImageSelector = topImageSelector;
    this.currentTab = currentTab || HOME;
    this.homeComponent = '';
    this.locationComponent = '';
    this.registryComponent = '';
  }

  changeHashHistory() {
    window.location.hash = `#${this.currentTab.toLowerCase().replace(/\W/g, '')}`;
  }

  // Adds the "active" class to the current tab.
  setActiveTab() {
    let tabs = document.getElementsByClassName('tab-item');
    // We cannot use for each since tabs is not a traditional array.
    // It does not have a forEach/Map
    for (let i = 0; i < tabs.length; i ++) {
      const innerText = tabs[i].innerText.replace(/\W/g, '');
      if (innerText === this.currentTab) {
        tabs[i].classList.add('active');
      } else {
        tabs[i].classList.remove('active');
      }
    }
  }

  handleTabChange(e) {
    if (!e.target || !e.target.innerText) {
      return;
    }
    this.currentTab = e.target.innerText.replace(/\W/g, '');
    this.changeHashHistory();
    this.setActiveTab();
    this.render();
  }

  getContent() {
    let mainContent;
    let imageContent;
    let mainContainerClass;
    let contentObj;
    switch(this.currentTab) {
      case HOME: {
        // Create the component if we haven't already.
        // We only want to create them as needed.
        if (!this.homeComponent) {
          this.homeComponent = new Home();
        }
        contentObj = this.homeComponent.getContent()
        mainContent = contentObj.main;
        imageContent = contentObj.image;
        mainContainerClass = "home";
        break
      }
      // case PHOTOS:
      //   mainContent = `<h1 class="second-header">Website coming soon    :)</h1>`
      //   imageContent = `<span></span>`;
      //   mainContainerClass = "photos";
      //   break;
      case LOCATION: {
        // Create the component if we haven't already.
        if (!this.locationComponent) {
          this.locationComponent = new Location();
        }
        contentObj = this.locationComponent.getContent();
        mainContent = contentObj.main;
        imageContent = contentObj.image;
        mainContainerClass = "location";
        break;
      }
      // case BRIDAL_PARTY:
      //   mainContent = `<h1 class="second-header">Website coming soon    :)</h1>`
      //   imageContent = `<span></span>`
      //   mainContainerClass = "bridal-party";
      //   break;
      case REGISTRY:
        // Creat the registry component if we haven't already.
        if (!this.registryComponent) {
          this.registryComponent = new Registry();
        }
        contentObj = this.registryComponent.getContent();
        mainContent = contentObj.main;
        imageContent = contentObj.image;
        mainContainerClass = "registry";
        break;
      default: {
        // Create the component if we haven't already.
        // We only want to create them as needed.
        if (!this.homeComponent) {
          this.homeComponent = new Home();
        }
        contentObj = this.homeComponent.getContent()
        mainContent = contentObj.main;
        imageContent = contentObj.image;
        mainContainerClass = "home";
        break;
      }
    }

    mainContent = (
      `
      <div class="content-container white ${mainContainerClass}">
        <div class="row container">
          <div class="centered-col">
            ${mainContent}
          </div>
        </div>
      </div>
      `
    );

    return {
      imageContent,
      mainContent,
      mainContainerClass
    };
  }

  render() {
    const {
      imageContent,
      mainContent,
      mainContainerClass
    } = this.getContent();

    // Append to main container class
    let mainContainer = document.getElementById('main-container');
    mainContainer.className = `section header-container ${mainContainerClass}`;
    document.getElementsByTagName('body')[0].className = mainContainerClass;
    // Render the content.
    document.getElementById(this.selector).innerHTML = mainContent;
    document.getElementById(this.topImageSelector).innerHTML = imageContent;
  }
}
