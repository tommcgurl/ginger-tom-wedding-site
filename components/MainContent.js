const HOME = 'HOME';
const PHOTOS = 'PHOTOS';
const LOCATION = 'LOCATION';
const BRIDAL_PARTY = 'BRIDALPARTY';
const REGISTRY = 'REGISTRY';
import Location from './Location.js';
import Home from './Home.js';

export default class Content {
  constructor(selector, topImageSelector, currentTab) {
    this.selector = selector;
    this.topImageSelector = topImageSelector;
    this.currentTab = currentTab || HOME;
  }

  changeHashHistory() {
    window.location.hash = `#${this.currentTab.toLowerCase().replace(/\W/g, '')}`;
  }

  handleTabChange(e) {
    if (!e.target || !e.target.innerText) {
      return;
    }
    this.currentTab = e.target.innerText.replace(/\W/g, '');
    this.changeHashHistory()
    this.render();
  }

  getContent() {
    let mainContent;
    let topImageSource;
    let topImageClass;
    let mainContainerClass;
    let LocationComponent;
    let HomeComponent;
    switch(this.currentTab) {
      case HOME:
        if (!HomeComponent) {
          HomeComponent = new Home();
        }
        mainContent = HomeComponent.getContent();
        topImageSource = "images/main1.jpg";
        topImageClass = "main-image";
        mainContainerClass = "home";
        break;
      case PHOTOS:
        mainContent = `<h1 class="second-header">Website coming soon    :)</h1>`
        topImageSource = "images/main1.jpg";
        topImageClass = "main-image";
        mainContainerClass = "photos";
        break;
      case LOCATION:
        if (!LocationComponent) {
          LocationComponent = new Location();
        }
        mainContent = LocationComponent.getContent();
        topImageSource = "images/mpinn.jpg";
        topImageClass = "location-image";
        mainContainerClass = "location";
        break;
      case BRIDAL_PARTY:
        mainContent = `<h1 class="second-header">Website coming soon    :)</h1>`
        topImageSource = "images/main1.jpg";
        topImageClass = "main-image";
        mainContainerClass = "bridal-party";
        break;
      case REGISTRY:
        mainContent = `<h1 class="second-header">Website coming soon    :)</h1>`
        topImageSource = "images/main1.jpg";
        topImageClass = "main-image";
        mainContainerClass = "registry";
        break;
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
      mainContent,
      topImageSource,
      topImageClass,
      mainContainerClass
    };
  }

  render() {
    const {
      mainContent,
      topImageSource,
      topImageClass,
      mainContainerClass
    } = this.getContent();
    let topImageElement = document.getElementById(this.topImageSelector);
    topImageElement.src = topImageSource;
    // Set Top image class.
    topImageElement.className = topImageClass;
    // Append to main container class
    let mainContainer = document.getElementById('main-container');
    mainContainer.className = `section header-container ${mainContainerClass}`;
    document.getElementByTagName('body').className = mainContainerClass;
    // Render the content.
    document.getElementById(this.selector).innerHTML = mainContent;
    document.getElementById(this.topImageSelector).src = topImageSource;
  }
}
