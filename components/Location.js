export default class Location {
  constructor(selector) {
    this.selector = selector;
  }

  getContent() {
    return (
      `
        <div class="location-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.522100913622!2d-74.07541398460597!3d40.3529462793726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2304a436163f1%3A0xe9ec5a64a1ed6134!2sMolly+Pitcher+Inn!5e0!3m2!1sen!2sus!4v1474855361987"
            width="600"
            height="450"
            frameborder="0"
            style="border:0"
            allowfullscreen>
          </iframe>
        </div>
      `
    );
  }

}
