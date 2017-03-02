import './Photos.css'

export default class Photos {
  constructor(selector) {
    this.selector = selector;
  }

  getOlides() {
    // Create a range from 0 -> 40
    // const emptyArray = Array.apply("test", Array(42));
    // const range = emptyArray.map((_, index) => index + 1);
    // return range.reduce((acc, next) => {
    //   if (next < 16) {
    //     return `${acc}<img class="photo verticle" src="../images/photos/oldies/${next}.jpg" />`
    //   } else {
    //     return `${acc}<img class="photo" src="../images/photos/oldies/${next}.jpg" />`
    //   }
    // },'');
    return '';
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
            <img class="photo verticle" src="../images/photos/13.jpg" />
            <img class="photo verticle" src="../images/photos/14.jpg" />
            <img class="photo verticle" src="../images/photos/15.jpg" />
            <img class="photo verticle" src="../images/photos/16.jpg" />
            <img class="photo verticle" src="../images/photos/17.jpg" />
            <img class="photo verticle" src="../images/photos/18.jpg" />
            <img class="photo verticle" src="../images/photos/19.jpg" />
            <img class="photo verticle" src="../images/photos/20.jpg" />
          </div>
          <div class="photos-container oldies">
            ${this.getOlides()}
          </div>

        `
      ),
      image: ''
    };
  }
}
