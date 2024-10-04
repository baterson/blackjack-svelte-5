import { buildDeck, calculateScore, wait } from '$lib/utils';
import type { Card } from '$lib/utils';
import { tick } from 'svelte';

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
	winner = $state<null | 'Player' | 'Dealer' | 'Draw'>(null);
	player = $state(new Player());
	dealer = $state(new Dealer());
	deck = $state(new Deck());
	turn = $state<null | 'Player' | 'Dealer'>(null);
	inGame = $derived(this.turn !== null);
	drawSound: HTMLAudioElement | null = null;

	start = async (restart = false) => {
		this.deck = new Deck();
		this.player = new Player();
		this.dealer = new Dealer();
		this.winner = null;
		this.turn = 'Player';

		if (restart) {
			// Wait one tick to trigger the animation on restart
			await tick();
		}

		this?.drawSound?.play();
		this.dealer.draw(this.deck.deal());
		this.player.draw(this.deck.deal());
		this.player.draw(this.deck.deal());

		this.checkBlackjack();
	};

	checkBlackjack = () => {
		if (this.player.score === 21) {
			this.winner = 'Player';
		}
	};

	checkBust = () => {
		if (this.player.score > 21) {
			this.winner = 'Dealer';
		}
	};

	calculateWinner = () => {
		if (this.dealer.score > 21) {
			this.winner = 'Player';
		} else if (this.player.score > this.dealer.score) {
			this.winner = 'Player';
		} else if (this.player.score < this.dealer.score) {
			this.winner = 'Dealer';
		} else {
			this.winner = 'Draw';
		}
	};

	playerTurn = (option: 'draw' | 'stop') => {
		if (option === 'draw') {
			this.playDrawSound();
			this.player.draw(this.deck.deal());
			this.checkBust();
		} else {
			this.dealerTurn();
		}
	};

	dealerTurn = async () => {
		this.turn = 'Dealer';

		while (this.dealer.shouldDraw) {
			this.playDrawSound();
			this.dealer.draw(this.deck.deal());

			// Wait to animate card dealing one by one
			await wait(500);
		}

		this.calculateWinner();
	};

	setAudio(audio: HTMLAudioElement) {
		this.drawSound = audio;
	}

	playDrawSound = () => {
		if (this.drawSound) {
			this.drawSound.currentTime = 0;
			this.drawSound.play();
		}
	};
}
