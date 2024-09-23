const SUITES = ['heart', 'spade', 'diamond', 'club'];
const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

export class Deck {
	cards = $state([]);

	constructor() {
		this.init();
		this.shuffle();
	}

	init = () => {
		for (const suit of SUITES) {
			for (const rank of RANKS) {
				this.cards.push({ suit, rank, displayName: `${suit}_${rank}` });
			}
		}
	};

	shuffle = () => {
		this.cards = this.cards.sort(() => Math.random() - 0.5);
	};
}
