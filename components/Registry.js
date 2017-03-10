import './Registry.css';

export default class Registry {
  constructor(selector) {
    this.selector = selector;
  }

  getContent() {
    return {
      main: (
        `
          <div class="registry-container-row">
            <div class="header-with-decoration">
              <div class="line-decoration"></div>
              <div class="info-group-heading secondary-header">
                  For our home
              </div>
              <div class="line-decoration"></div>
            </div>
            <div class="registry-vendors-container">
              <div class="vendor-container">
                <div class="brand-logo bbb">
                  <img src="../images/bed-bath-logo.png"/>
                </div>
                <div onClick="ga('send', 'event', 'Bed Bath And Beyond Registry', 'click');" class="grey-button info-group-button">
                  <a target='_blank' href="https://www.bedbathandbeyond.com/store/giftregistry/view_registry_guest.jsp?registryId=543873479&eventType=Wedding&pwsurl=?mcid=EM_triggeredem_emailregistryplural__allpromos">View Registry</a>
                </div>
              </div>
              <div class="vendor-container">
                <div class="brand-logo pb">
                  <img src="../images/pottery-barn-logo.png"/>
                </div>
                <div onClick="ga('send', 'event', 'Pottery Barn Registry', 'click');" class="grey-button info-group-button">
                  <a target='_blank' href="http://www.potterybarn.com/registry/3925810/registry-list.html">View Registry</a>
                </div>
              </div>
            </div>
            <div class="honeymoon-container">
              <div class="header-with-decoration">
                <div class="line-decoration"></div>
                <div class="info-group-heading secondary-header">
                    For our honeymoon
                </div>
                <div class="line-decoration"></div>
              </div>
              <div class="honeymoon-description-container">
                <p class="honeymoon-description">
                  For two weeks following the wedding, Ginger and Tom will be enjoying an amazing Honeymoon in Italy! You can help make this trip even more special.
                  <div onClick="ga('send', 'event', 'Honeymoon Registry', 'click');" class="grey-button info-group-button">
                    <a target='_blank' href="https://myvacationlady.honeymoonwishes.com/Honeymoon-Registry-331286-Italy-Ginger-Hall-Thomas-McGurl.html">View Registry</a>
                  </div>
                </p>
              </div>
            </div>
          </div>
        `
      ),
      image: (
        '<div class="banner-image registry-image"></div>'
      )
    };
  }
}
