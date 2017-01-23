import './BridalPartyBio.css';

const BridalPartyBio = (name, imagePath, bio) => {
  return (
    `
      <div class="bridal-party-bio-container">
        <div class="bio-image-container">
          <img class="bio-image" src="${imagePath}"/>
        </div>
        <div class="bio-name-container">
          <div class="header-with-decoration">
            <div class="line-decoration"></div>
            <div class="secondary-header">
              ${name}
            </div>
            <div class="line-decoration"></div>
          </div>
        </div>
        <div class="bio-description-container">
          ${bio}
        </div>
      </div>
    `
  );
}

export default BridalPartyBio;
