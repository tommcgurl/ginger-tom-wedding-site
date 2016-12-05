export default class Location {
  constructor(selector) {
    this.selector = selector;
  }

  getContent() {
    return (
      `
        <div class="location-container">
          <div class="location-container-first-row">
            <div class="location-container-info-group">
              <h3 class="info-group-heading">
                Ceremony
              </h3>
              <div class="info-group-divider"></div>
              <h4 class="info-group-location-name">
                St. James Catholic Church
              </h4>
              <p class="info-group-location-address">
                94 Broad Street,
                Red Bank New Jersey
              </p>
              <div class="grey-button info-group-button">
                View Map
              </div>
            </div>
            <div class="location-container-info-group">
              <h3 class="info-group-heading">
                Reception
              </h3>
              <div class="info-group-divider"></div>
              <h4 class="info-group-location-name">
                The Molly Pitcher Inn
              </h4>
              <p class="info-group-location-address">
                88 Riverside Avenue,
                Red Bank New Jersey
              </p>
              <div class="grey-button info-group-button">
                View Map
              </div>
            </div>
          </div>
          <div class="location-container-second-row">
            <div class="header-with-decoration">
              <div class="line-decoration"></div>
              <div class="info-group-heading secondary-header">
                Where To Stay
              </div>
              <div class="line-decoration"></div>

            </div>
            <p class="info-group-location-address">
              We have rooms blocked off for wedding guests at our recption lcation, The Molly Pitcher Inn. Mention the Hall–McGurl wedding when you book your room to get the group discount.
            </p>
          </div>
        </div>
      `
    );
  }

}
