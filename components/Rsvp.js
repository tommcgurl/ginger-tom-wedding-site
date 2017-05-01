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
            <div class="rsvp-issues">
              <h3> If you are having trouble viewing this form please <a href="https://docs.google.com/forms/d/e/1FAIpQLSc1bKv-9iCjc6yqsBASQgDFPjH__7Hcl1Bnf9mJLeTddjgIwg/viewform"> click here </a> </h3>
            </div>
          </div>
        `
      ),
      image: (
        '<span></span>'
      )
    };
  }
}
