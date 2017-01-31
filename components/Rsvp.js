import './Rsvp.css';

export default class Rsvp {
  constructor(selector) {
    this.selector = selector;
  }

  getContent() {
    return {
      main: (
        `
          <div class="rsvp-container">
            <iframe id="rsvp-frame" src="https://docs.google.com/forms/d/e/1FAIpQLSc1bKv-9iCjc6yqsBASQgDFPjH__7Hcl1Bnf9mJLeTddjgIwg/viewform?embedded=true"frameborder="0" marginheight="0" marginwidth="0">
              Loading...
            </iframe>
          </div>
        `
      ),
      image: (
        '<span></span>'
      )
    };
  }
}
