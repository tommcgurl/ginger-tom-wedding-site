import BridalPartyBio from './BridalPartyBio';
import './BridalParty.css';

const BRIDES_MAIDS = [
  {
    name: 'LanaRose Berger',
    imagePath: '../images/bridal-party/Lana.jpg',
    bio: 'Ginger and Lana met in third grade and have been best friends ever since. Over the years they\'ve made countless memories and built a life long friendship. Lana is a Co-Maid Of Honor.'
  },
  {
    name: 'Ashley Cutler',
    imagePath: '../images/bridal-party/Ashley.jpg',
    bio: 'Ginger and Ashley are long time family friends. One of their favorite traditions is watching the Bachelor together on Monday nights. Ashley is also a Co-Maid Of Honor.'
  },
  {
    name: 'Millie Goldberg',
    imagePath: '../images/bridal-party/Millie.jpg',
    bio: 'Ginger had the pleasure of meeting Millie when she started dating Tom\'s best friend Harry. They have been the best of friends ever since then.'
  },
  {
    name: 'Katie McGurl',
    imagePath: '../images/bridal-party/Katie.jpg',
    bio: 'Katie is Ginger\'s future sister-in-law. Ginger and Katie were friends from the beginning and Ginger can\'t wait to officially call her a sister.'
  },
  {
    name: 'Erica Patton',
    imagePath: '../images/bridal-party/Erica.jpg',
    bio: 'Ginger met Erica during her first year at Rutgers University. After spending many nights together at Old Queens, Ginger and Erica quickly became best friends.'
  },
  {
    name: 'Lindsey Sacks',
    imagePath: '../images/bridal-party/Lindsey.jpg',
    bio: 'Lindsey was Ginger\'s college roomate. They met at Rutgers University and immediately hit it off. When they get together it is guaranteed  to be a fun time filled with 90s music and lots of laughs.'
  }
]
const GROOMSMAN = [
  {
    name: 'Jimmy Joe McGurl',
    imagePath: '../images/bridal-party/Lana.jpg',
    bio: 'Placeholder text for now. Fill this in with a short bio about the bridal party memeber. Should be about three to four sentences for now.'
  },
  {
    name: 'Harry Goldberg',
    imagePath: '../images/bridal-party/Ashley.jpg',
    bio: 'Placeholder text for now. Fill this in with a short bio about the bridal party memeber. Should be about three to four sentences for now.'
  },
  {
    name: 'Dan Hall',
    imagePath: '../images/bridal-party/Millie.jpg',
    bio: 'Placeholder text for now. Fill this in with a short bio about the bridal party memeber. Should be about three to four sentences for now.'
  },
  {
    name: 'Todd Messer',
    imagePath: '../images/bridal-party/Katie.jpg',
    bio: 'Placeholder text for now. Fill this in with a short bio about the bridal party memeber. Should be about three to four sentences for now.'
  },
  {
    name: 'Joe Mattheusen',
    imagePath: '../images/bridal-party/Erica.jpg',
    bio: 'Placeholder text for now. Fill this in with a short bio about the bridal party memeber. Should be about three to four sentences for now.'
  },
  {
    name: 'Matt Clawson',
    imagePath: '../images/bridal-party/Lindsey.jpg',
    bio: 'Placeholder text for now. Fill this in with a short bio about the bridal party memeber. Should be about three to four sentences for now.'
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
    // return {
    //   main:   (
    //     `
    //       <div class="bridal-party-outer-container">
    //         <div class="brides-maids header-with-decoration">
    //           <div class="line-decoration"></div>
    //           <div class="secondary-header">
    //             Brides Maids
    //           </div>
    //           <div class="line-decoration"></div>
    //         </div>
    //         <div class="bridal-party-container">
    //           ${this.renderBios(BRIDES_MAIDS)}
    //         </div>
    //         <div class="groomsman header-with-decoration">
    //           <div class="line-decoration"></div>
    //           <div class="secondary-header">
    //             Groomsman
    //           </div>
    //           <div class="line-decoration"></div>
    //         </div>
    //         <div class="bridal-party-container">
    //           ${this.renderBios(GROOMSMAN)}
    //         </div>
    //       </div>
    //     `
    //   ),
    //   image: ''
    // };
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
          </div>
        `
      ),
      image: ''
    }
  }
}
