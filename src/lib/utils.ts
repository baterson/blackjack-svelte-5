const SUITES = ['heart', 'spade', 'diamond', 'club'];
const RANKS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
const SCORES: Record<(typeof RANKS)[number], number> = {
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

export type Card = {
	suit: (typeof SUITES)[number];
	rank: (typeof RANKS)[number];
	displayName: string;
};

export type Winner = null | 'Player' | 'Dealer' | 'Draw';
export type Turn = null | 'Player' | 'Dealer';

export const buildDeck = (): Card[] => {
	const deck = [];
	for (const suit of SUITES) {
		for (const rank of RANKS) {
			deck.push({ suit, rank, displayName: `${suit}_${rank}` } as Card);
		}
	}
	return deck;
};

export const shuffle = (cards: Card[]): Card[] => {
	return cards.sort(() => Math.random() - 0.5);
};

export const calculateScore = (cards: Card[]): number => {
	let score = 0;
	for (const card of cards) {
		score += SCORES[card.rank];
	}
	return score;
};

export let calculateWinner = (playerScore: number, dealerScore: number) => {
	if (dealerScore > 21) {
		return 'Player';
	} else if (playerScore > dealerScore) {
		return 'Player';
	} else if (playerScore < dealerScore) {
		return 'Dealer';
	} else {
		return 'Draw';
	}
};
