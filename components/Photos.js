import './Photos.css'

export default class Photos {
  constructor(selector) {
    this.selector = selector;
  }

  getContent() {
    return {
      main:   (
        `
          <div class="photos-container">
            <img class="photo" src="../images/photos/1.jpg" />
            <img class="photo" src="../images/photos/2.jpg" />
            <img class="photo" src="../images/photos/3.jpg" />
            <img class="photo" src="../images/photos/4.jpg" />
            <img class="photo" src="../images/photos/5.jpg" />
            <img class="photo" src="../images/photos/6.jpg" />
            <img class="photo" src="../images/photos/7.jpg" />
            <img class="photo" src="../images/photos/8.jpg" />
            <img class="photo" src="../images/photos/9.jpg" />
            <img class="photo" src="../images/photos/10.jpg" />
            <img class="photo" src="../images/photos/11.jpg" />
            <img class="photo" src="../images/photos/12.jpg" />
          </div>
        `
      ),
      image: ''
    };
  }
}
