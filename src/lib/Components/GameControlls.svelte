<script lang="ts">
	import type { Turn, Winner } from '$lib/gameStore.svelte';
	import Button from './Button.svelte';

	const {
		winner,
		inGame,
		turn,
		draw,
		stop,
		start,
		restart
	}: {
		winner: Winner;
		inGame: boolean;
		turn: Turn;
		draw: () => void;
		stop: () => void;
		start: () => void;
		restart: () => void;
	} = $props();

	const winnerText = $derived(winner === 'Draw' ? 'Draw' : `${winner} won!`);
</script>

<div>
	{#if winner}
		<Button variant="deal" onclick={restart}>
			{winnerText}
			Start again
		</Button>
	{:else if inGame}
		<Button variant="draw" disabled={turn === 'Dealer'} onclick={draw}>Draw</Button>
		<Button variant="stop" disabled={turn === 'Dealer'} onclick={stop}>Stop</Button>
	{:else}
		<Button variant="deal" onclick={start}>Start game</Button>
	{/if}
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
		height: 36px;
	}
</style>
