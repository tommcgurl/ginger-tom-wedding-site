export default class Location {
  constructor(selector) {
    this.selector = selector;
  }

  getContent() {
    return {
      main: (
              `
                <div class="home-container">
                  <div class="header-with-decoration">
                    <div class="line-decoration"></div>
                    <div class="secondary-header">
                      Our Story
                    </div>
                    <div class="line-decoration"></div>
                  </div>
                  <p class="section-paragraph">
                    This is just some example placeholder text for now.
                    It doesn't mean anything it's just used for the purpose of filling space.
                    Eventually I will put real text here but for now this helps to see what things will look like.
                    The final paragraph will contain infromation about the Bride and the Groom.
                  </p>
                </div>
              `
      ),
      image: `<span></span>`
    }
  }
}
