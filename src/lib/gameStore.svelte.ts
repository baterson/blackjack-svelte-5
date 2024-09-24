import { buildDeck, calculateScore } from '$lib/utils';
import type { Card } from '$lib/utils';

export class Deck {
	cards = $state(buildDeck());

	constructor() {
		this.shuffle();
	}

	deal = () => {
		const card = this.cards.pop();

		if (!card) {
			throw new Error('Deck is empty');
		}

		return card;
	};

	shuffle = () => {
		this.cards = this.cards.sort(() => Math.random() - 0.5);
	};
}

export class Player {
	hand = $state<Card[]>([]);
	score = $derived(calculateScore(this.hand));
	canDraw = $derived(this.score < 21);

	draw = (card: Card) => {
		if (this.canDraw) {
			this.hand.push(card);
		}
	};
}

export class Dealer {
	hand = $state<Card[]>([]);
	score = $derived(calculateScore(this.hand));
	shouldDraw = $derived(this.score < 17);

	draw = (card: Card) => {
		this.hand.push(card);
	};
}

export class Game {
	winner = $state<null | 'player' | 'dealer' | 'draw'>(null);
	player = $state(new Player());
	dealer = $state(new Dealer());
	deck = $state(new Deck());
	inGame = $derived(this.player.hand.length);

	start = () => {
		this.player = new Player();
		this.dealer = new Dealer();
		this.deck = new Deck();
		this.winner = null;

		this.dealer.draw(this.deck.deal());
		this.player.draw(this.deck.deal());
		this.player.draw(this.deck.deal());

		this.checkBlackjack();
	};

	checkBlackjack = () => {
		if (this.player.score === 21) {
			this.winner = 'player';
		}
	};

	checkBust = () => {
		if (this.player.score > 21) {
			this.winner = 'dealer';
		}
	};
	π;
	calculateWinner = () => {
		if (this.dealer.score > 21) {
			this.winner = 'player';
		} else if (this.player.score > this.dealer.score) {
			this.winner = 'player';
		} else if (this.player.score < this.dealer.score) {
			this.winner = 'dealer';
		} else {
			this.winner = 'draw';
		}
	};

	playerTurn = (option: 'draw' | 'stop') => {
		if (option === 'draw') {
			this.player.draw(this.deck.deal());
			this.checkBust();
		} else {
			this.dealerTurn();
		}
	};

	dealerTurn = () => {
		while (this.dealer.shouldDraw) {
			this.dealer.draw(this.deck.deal());
		}
		this.calculateWinner();
	};
}
