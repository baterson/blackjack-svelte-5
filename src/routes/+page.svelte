<script lang="ts">
	import './global.css';
	import { Game } from '$lib/gameStore.svelte';
	import Card from '$lib/Components/Card.svelte';
	import GameControlls from '$lib/Components/GameControlls.svelte';
	import CardsDefinitions from '$lib/Components/CardsDefinitions.svelte';
	import Deck from '$lib/Components/Deck.svelte';

	const game = new Game();
</script>

<CardsDefinitions />

<section>
	<Deck />
	<div class="gameArea">
		<div class="hand">
			{#each game.dealer.hand as card}
				<Card name={card.displayName} />
			{/each}
		</div>

		<GameControlls
			winner={game.winner}
			inGame={game.inGame}
			draw={() => game.playerTurn('draw')}
			stop={() => game.playerTurn('stop')}
			start={() => game.start()}
		/>

		<div class="hand">
			{#each game.player.hand as card}
				<Card name={card.displayName} />
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		height: 100vh;
		width: 100vw;
		background: radial-gradient(circle at center, #007f0e, #004d00 50%, #001a00);
	}

	.gameArea {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 20px;
		gap: 20px;
	}

	.hand {
		display: flex;
		flex-grow: 1;
		align-items: center;
		justify-content: flex-start;
		padding: 10px;
		border: 2px solid rgba(0, 0, 0, 0.76);
		/* overflow: hidden; */
	}
	/* section {
		background: radial-gradient(circle at center, #007f0e, #004d00 50%, #001a00);
		height: 100%;
		width: 100%;

		gap: 20px;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	#deck {
		display: flex;
		justify-self: center;
		align-items: center;
	}

	.gameArea {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 30px;
		flex: 1;
	}

	.hand {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 0 10px;
		gap: 6px;
		width: 100%;
		height: 280px;
		border: 2px solid rgba(0, 0, 0, 0.76);
	} */
</style>
