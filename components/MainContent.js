const HOME = 'HOME';
const PHOTOS = 'PHOTOS';
const LOCATION = 'LOCATION';
const BRIDAL_PARTY = 'BRIDALPARTY';
const REGISTRY = 'REGISTRY';

export default class Content {
  constructor(selector, currentTab) {
    this.selector = selector;
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
    switch(this.currentTab) {
      case HOME:
        mainContent = `<h1 class="second-header">Website coming soon    :)</h1>`
        break;
      case PHOTOS:
        mainContent = `<h1 class="second-header">PHOTOS</h1>`
        break;
      case LOCATION:
        mainContent = `<h1 class="second-header">LOCATION</h1>`
        break;
      case BRIDAL_PARTY:
        mainContent = `<h1 class="second-header">BRIDAL_PARTY</h1>`
        break;
      case REGISTRY:
        mainContent = `<h1 class="second-header">REGISTRY</h1>`
        break;
    }

    return (
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
  }

  render() {
    document.getElementById(this.selector).innerHTML = this.getContent();
  }
}
