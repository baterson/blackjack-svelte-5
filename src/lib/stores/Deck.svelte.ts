const SUITES = ['heart', 'spade', 'diamond', 'club'];
const RANKS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
const SCORES = {
	'1': 11,
	'2': 2,
	'3': 3,
	'4': 4,
	'5': 5,
	'6': 6,
	'7': 7,
	'8': 8,
	'9': 9,
	'10': 10,
	jack: 10,
	queen: 10,
	king: 10
};

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

export class Player {
	hand = $state([]);
	score = $state(0);
	canDraw = $derived(() => this.score < 21);

	draw = (card) => {
		if (this.canDraw) {
			this.hand.push(card);
			this.score += SCORES[card.rank];
		}
	};
}

export class Dealer {
	hand = $state([]);
	score = $state(0);
	shouldDraw = $derived(() => this.score < 17);

	draw = (card) => {
		this.hand.push(card);
		this.score += SCORES[card.rank];
	};
}

export class Game {
	inGame = $state(false);
	currentTurn = $state('player');
	player = $state(new Player());
	dealer = $state(new Dealer());
	deck = $state(new Deck());

	restart = () => {
		this.inGame = false;
		this.currentTurn = 'player';
		this.player = new Player();
		this.dealer = new Dealer();
		this.deck = new Deck();
	};
}
