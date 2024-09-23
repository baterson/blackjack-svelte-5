<script lang="ts">
	import { Deck, Player, Dealer, Game } from '$lib/stores/Deck.svelte';
	import Card from '$lib/components/Card.svelte';
	import CardsDefinitions from '$lib/Components/CardsDefinitions.svelte';

	const game = new Game();
</script>

<CardsDefinitions />

<button onclick={() => game.restart()}>Restart</button>

<button disabled={!game.player.canDraw} onclick={() => game.player.draw(game.deck.cards.pop())}
	>Draw Player</button
>
<button onclick={() => game.dealer.draw(game.deck.cards.pop())}>Draw Dealer</button>

<div class="wrapper">
	Player hand: {game.player.score}
	<div class="container">
		{#each game.player.hand as card}
			<Card name={card.displayName} />
		{/each}
	</div>

	Dealer hand: {game.dealer.score}
	<div class="container">
		{#each game.dealer.hand as card}
			<Card name={card.displayName} />
		{/each}
	</div>
</div>

<style>
	.wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.container {
		display: flex;
	}
</style>
