<script lang="ts">
	import './global.css';
	import audioPath from '$lib/assets/draw.mp3';
	import { Game } from '$lib/gameStore.svelte';
	import LandscapeMessage from '$lib/Components/LandscapeMessage.svelte';
	import GameControlls from '$lib/Components/GameControlls.svelte';
	import CardsDefinitions from '$lib/Components/CardsDefinitions.svelte';
	import Deck from '$lib/Components/Deck.svelte';
	import Hand from '$lib/Components/Hand.svelte';
	import { onMount } from 'svelte';

	const game = new Game();

	onMount(() => {
		// Setting audio in onMount since Audio is not present on the server
		game.setAudio(new Audio(audioPath));
	});
</script>

<LandscapeMessage />
<CardsDefinitions />

<section>
	<Deck />
	<div>
		<Hand hand={game.dealer.hand} score={game.dealer.score} />

		<GameControlls
			winner={game.winner}
			inGame={game.inGame}
			turn={game.turn}
			draw={() => game.playerTurn('draw')}
			stop={() => game.playerTurn('stop')}
			start={() => game.start()}
			restart={() => game.start(true)}
		/>

		<Hand hand={game.player.hand} score={game.player.score} />
	</div>
</section>

<style>
	section {
		display: flex;
		height: 100dvh;
		width: 100dvw;
		background: radial-gradient(circle at center, #007f0e, #004d00 50%, #001a00);
	}

	div {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 48px;
		gap: 20px;
	}

	@media (max-width: 968px) and (orientation: landscape) {
		div {
			padding: 8px;
		}
	}
</style>
