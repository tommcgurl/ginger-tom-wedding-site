import BridalPartyBio from './BridalPartyBio';
import './BridalParty.css';

const BRIDES_MAIDS = [
  {
    name: 'Ashley Cutler',
    imagePath: '../images/bridal-party/Ashley.jpg',
    bio: 'Ginger and Ashley are long time best friends. One of their favorite traditions is watching the Bachelor together on Monday nights with a bottle (or two) of wine and some Trader Joe\'s goodies. Ashley is a Co-Maid Of Honor.'
  },
  {
    name: 'LanaRose Berger',
    imagePath: '../images/bridal-party/Lana.jpg',
    bio: 'Ginger and Lana met in third grade and have been best friends ever since. After almost two decades of friendship, they have created countless memories together. Lana is a Co-Maid Of Honor.'
  },
  {
    name: 'Katie McGurl',
    imagePath: '../images/bridal-party/Katie.jpg',
    bio: 'Katie is Ginger\'s future sister-in-law. From Savannah, to Red Bank, to Austin, they always have a great time when they are together. Ginger can\'t wait to officially call her a sister!'
  },
  {
    name: 'Millie Goldberg',
    imagePath: '../images/bridal-party/Millie.jpg',
    bio: 'Ginger was introduced to Millie when she started dating Tom\'s best friend Harry. They have been the best of friends ever since and bonded over their love of food, alcohol, and cheese.'
  },
  {
    name: 'Lindsey Sacks',
    imagePath: '../images/bridal-party/Lindsey.jpg',
    bio: 'Lindsey was Ginger\'s college roomate. They met at Rutgers University and immediately hit it off. When they get together it is guaranteed  to be a fun time filled with 90s music, lots of laughs, and of course drinks.'
  },
  {
    name: 'Erica Patton',
    imagePath: '../images/bridal-party/Erica.jpg',
    bio: 'Ginger met Erica during her first year at Rutgers University. After spending many nights together at Old Queens, Ginger and Erica quickly became best friends and have been ever since.'
  }
]
const GROOMSMAN = [
  {
    name: 'Jimmy Joe McGurl',
    imagePath: '../images/bridal-party/JimmyJoe.jpg',
    bio: 'If you couldn\'t tell by the last name, Jimmmy Joe is Tom\'s older brother. He tought him how to play video games and let him tag along with his friends growing up. Jimmy Joe is a best friend, a brother, and a Co-Best Man.'
  },
  {
    name: 'Harry Goldberg',
    imagePath: '../images/bridal-party/Harry.jpg',
    bio: 'Harry and Tom have been best friends ever since they met as chubby little kids at basketball trieouts in sixth grade. Since then they have had have had many an adventure together as well as some wild parties. Harry is a Co-Best Man.'
  },
  {
    name: 'Todd Messer',
    imagePath: '../images/bridal-party/Todd.jpg',
    bio: 'Tom and Todd have been best friends since kindergarten. They grew up across the street from eachother and have graduated every school together from Wayside elementary to Rutgers University. They continue to soak the lane together in the Nexus.'
  },
  {
    name: 'Dan Hall',
    imagePath: '../images/bridal-party/Dan.jpg',
    bio: 'Dan is Tom\'s future brother-in-law. Tom actually knew Dan before he knew Ginger when Dan was friends with Tom\'s cousin. Tom is excited to be able to call Dan a brother in a few months.'
  },
  {
    name: 'Joe Mattheusen',
    imagePath: '../images/bridal-party/Joe.jpg',
    bio: 'Joe and Tom met in college where they ended up living together. Tom and Joe spent many nights playing Halo and drinking beers. You might say nothing has changed. You may also know them from their famous 90s dance moves.'
  },
  {
    name: 'Matt Clawson',
    imagePath: '../images/bridal-party/Matt.jpg',
    bio: 'Matt and Tom met in the fires of mount doom ... I mean, Verizon Wireless Corperate IT headquarters. After working together for a short time they quickly became great friends. To this day they enjoy late night video games and beers.'
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
