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
                Where We Are Registered
              </div>
              <div class="line-decoration"></div>
            </div>
            <div class="registry-vendors-container">
              <div class="vendor-container">
                <div class="brand-logo bbb">
                  <img src="../images/bed-bath-logo.png"/>
                </div>
                <div class="grey-button info-group-button">
                  <a target='_blank' href="https://www.bedbathandbeyond.com/store/giftregistry/view_registry_guest.jsp?registryId=543873479&eventType=Wedding&pwsurl=?mcid=EM_triggeredem_emailregistryplural__allpromos">View Registry</a>
                </div>
              </div>
              <div class="vendor-container">
                <div class="brand-logo pb">
                  <img src="../images/pottery-barn-logo.png"/>
                </div>
                <div class="grey-button info-group-button">
                  <a target='_blank' href="http://www.potterybarn.com/registry/3925810/registry-list.html">View Registry</a>
                </div>
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
