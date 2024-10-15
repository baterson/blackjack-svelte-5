import { buildDeck, calculateScore, shuffle } from '$lib/utils';
import type { Card } from '$lib/utils';

// todo: define game store

export class Game {}

export type Winner = null | 'Player' | 'Dealer' | 'Draw';
export type Turn = null | 'Player' | 'Dealer';
