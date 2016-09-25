const HOME = 'HOME';
const PHOTOS = 'PHOTOS';
const LOCATION = 'LOCATION';
const BRIDAL_PARTY = 'BRIDALPARTY';
const REGISTRY = 'REGISTRY';

export default class Content {
  constructor(selector, topImageSelector, bottomImageSelector,currentTab) {
    this.selector = selector;
    this.topImageSelector = topImageSelector;
    this.bottomImageSelector =bottomImageSelector;
    this.currentTab = currentTab;
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
    let bottomImageSource;
    let topImageClass;
    switch(this.currentTab) {
      case HOME:
        mainContent = `<h1 class="second-header">Website coming soon    :)</h1>`;
        topImageSource = "images/main1.jpg";
        topImageClass = "main-image"
        bottomImageSource = "images/main3.jpg";
        break;
      case PHOTOS:
        mainContent = `<h1 class="second-header">Website coming soon    :)</h1>`
        topImageSource = "images/main1.jpg";
        topImageClass = "main-image";
        bottomImageSource = "images/main3.jpg";
        break;
      case LOCATION:
        mainContent = `<h1 class="second-header">Website coming soon    :)</h1>`
        topImageSource = "images/mpinn.jpg";
        topImageClass = "location-image";
        bottomImageSource = "images/main3.jpg";
        break;
      case BRIDAL_PARTY:
        mainContent = `<h1 class="second-header">Website coming soon    :)</h1>`
        topImageSource = "images/main1.jpg";
        topImageClass = "main-image";
        bottomImageSource = "images/main3.jpg";
        break;
      case REGISTRY:
        mainContent = `<h1 class="second-header">Website coming soon    :)</h1>`
        topImageSource = "images/main1.jpg";
        topImageClass = "main-image";
        bottomImageSource = "images/main3.jpg";
        break;
    }

    mainContent = (
      `
      <div class="section white">
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
      bottomImageSource,
      topImageClass
    };
  }

  render() {
    const {
      mainContent,
      topImageSource,
      bottomImageSource,
      topImageClass
    } = this.getContent();
    let topImageElement = document.getElementById(this.topImageSelector);
    topImageElement.src = topImageSource;
    topImageElement.classList = [topImageClass];
    document.getElementById(this.selector).innerHTML = mainContent;
    document.getElementById(this.topImageSelector).src = topImageSource;
    document.getElementById(this.bottomImageSelector).src = bottomImageSource;
    // Re-start parallax
    $('.parallax').parallax();
  }
}
