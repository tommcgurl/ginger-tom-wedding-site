import BridalPartyBio from './BridalPartyBio';
import './BridalParty.css';

const BRIDES_MAIDS = [
  {
    name: 'Lana Berger',
    imagePath: '../images/bridal-party/Lana.jpg',
    bio: 'Placeholder text for now. Fill this in with a short bio about the bridal party memeber. Should be about three to four sentances for now.'
  },
  {
    name: 'Ashley Cutler',
    imagePath: '../images/bridal-party/Ashley.jpg',
    bio: 'Placeholder text for now. Fill this in with a short bio about the bridal party memeber. Should be about three to four sentances for now.'
  },
  {
    name: 'Millie Goldberg',
    imagePath: '../images/bridal-party/Millie.jpg',
    bio: 'Placeholder text for now. Fill this in with a short bio about the bridal party memeber. Should be about three to four sentances for now.'
  },
  {
    name: 'Katie McGurl',
    imagePath: '../images/bridal-party/Katie.jpg',
    bio: 'Placeholder text for now. Fill this in with a short bio about the bridal party memeber. Should be about three to four sentances for now.'
  },
  {
    name: 'Erica Patton',
    imagePath: '../images/bridal-party/Erica.jpg',
    bio: 'Placeholder text for now. Fill this in with a short bio about the bridal party memeber. Should be about three to four sentances for now.'
  },
  {
    name: 'Lindsey Saks',
    imagePath: '../images/bridal-party/Lindsey.jpg',
    bio: 'Placeholder text for now. Fill this in with a short bio about the bridal party memeber. Should be about three to four sentances for now.'
  }
]
const GROOMSMAN = [
  {
    name: 'Jimmy Joe McGurl',
    imagePath: '../images/bridal-party/Lana.jpg',
    bio: 'Placeholder text for now. Fill this in with a short bio about the bridal party memeber. Should be about three to four sentances for now.'
  },
  {
    name: 'Harry Goldberg',
    imagePath: '../images/bridal-party/Ashley.jpg',
    bio: 'Placeholder text for now. Fill this in with a short bio about the bridal party memeber. Should be about three to four sentances for now.'
  },
  {
    name: 'Dan Hall',
    imagePath: '../images/bridal-party/Millie.jpg',
    bio: 'Placeholder text for now. Fill this in with a short bio about the bridal party memeber. Should be about three to four sentances for now.'
  },
  {
    name: 'Todd Messer',
    imagePath: '../images/bridal-party/Katie.jpg',
    bio: 'Placeholder text for now. Fill this in with a short bio about the bridal party memeber. Should be about three to four sentances for now.'
  },
  {
    name: 'Joe Mattheusen',
    imagePath: '../images/bridal-party/Erica.jpg',
    bio: 'Placeholder text for now. Fill this in with a short bio about the bridal party memeber. Should be about three to four sentances for now.'
  },
  {
    name: 'Matt Clawson',
    imagePath: '../images/bridal-party/Lindsey.jpg',
    bio: 'Placeholder text for now. Fill this in with a short bio about the bridal party memeber. Should be about three to four sentances for now.'
  }
];

export default class BridalParty {
  constructor(selector) {
    this.selector = selector;
  }

  renderBios(group) {
    return group.reduce((prev, person) => {
      return prev + BridalPartyBio(person.name, person.imagePath, person.bio);
    }, ``);
  }

  getContent() {
    return {
      main:   (
        `
          <div class="bridal-party-outer-container">
            <div class="brides-maids header-with-decoration">
              <div class="line-decoration"></div>
              <div class="secondary-header">
                Brides Maids
              </div>
              <div class="line-decoration"></div>
            </div>
            <div class="bridal-party-container">
              ${this.renderBios(BRIDES_MAIDS)}
            </div>
            <div class="groomsman header-with-decoration">
              <div class="line-decoration"></div>
              <div class="secondary-header">
                Groomsman
              </div>
              <div class="line-decoration"></div>
            </div>
            <div class="bridal-party-container">
              ${this.renderBios(GROOMSMAN)}
            </div>
          </div>
        `
      ),
      image: ''
    };
  }
}
