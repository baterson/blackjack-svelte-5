<script lang="ts">
	import { Game } from '$lib/gameStore.svelte';
	import Card from '$lib/components/Card.svelte';
	import CardsDefinitions from '$lib/Components/CardsDefinitions.svelte';

	const game = new Game();
</script>

<CardsDefinitions />

<section>
	<button onclick={() => game.start()}>Start</button>

	{#if game.winner}
		<h3>Winner: {game.winner}</h3>
	{:else if game.inGame}
		<button onclick={() => game.playerTurn('draw')}>Draw player</button>
		<button onclick={() => game.playerTurn('stop')}>Stop player</button>
	{/if}

	<div class="scores" style="display: {game.inGame ? 'block' : 'none'}">
		<div>Dealer: {game.dealer.score}</div>
		<div>Player: {game.player.score}</div>
	</div>

	<div class="wrapper">
		<div class="container">
			{#each game.dealer.hand as card}
				<Card name={card.displayName} />
			{/each}
		</div>

		<div class="container">
			{#each game.player.hand as card}
				<Card name={card.displayName} />
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		height: 100vh;
	}

	.scores {
		margin: 20px 0;
	}
	.wrapper {
		margin-top: 20px;
		width: 100%;
		display: flex;
		gap: 40px;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.container {
		display: flex;
	}
</style>
