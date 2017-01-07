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
                    Ginger and Tom are high school sweethearts who are finally tying the knot this summer!
                    After graduating high school, Ginger and Tom went on to attend college together at Rutgers
                    University. Ginger is now a 3rd grade elementary school teacher and Thomas works in Manhattan
                    as a software engineer. They live together with their long-haired mini dachshund Andie in
                    Red Bank, New Jersey. They are super excited to be getting married this June and look forward
                    to seeing you there!
                  </p>
                  <div class="story-image">
                    <img src="../images/story-image.png"/>
                  </div>
                </div>
              `
      ),
      image: `<span></span>`
    }
  }
}
