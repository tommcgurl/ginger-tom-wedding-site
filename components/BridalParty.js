import BridalPartyBio from './BridalPartyBio';
import './BridalParty.css';

const BRIDAL_PARTY = [
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
  },
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

  renderBios() {
    return BRIDAL_PARTY.reduce((prev, person) => {
      return prev + BridalPartyBio(person.name, person.imagePath, person.bio);
    }, ``);
  }

  getContent() {
    return {
      main:   (
        `
          <div class="bridal-party-container">
            ${this.renderBios()}
          </div>
        `
      ),
      image: ''
    };
  }
}
