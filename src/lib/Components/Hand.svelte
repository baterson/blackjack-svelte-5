<script lang="ts">
	import type { Card as CardType } from '$lib/utils';
	import Card from './Card.svelte';

	const { hand, score }: { hand: CardType[]; score: number } = $props();
</script>

<div class="wrapper">
	<div class="score">{score}</div>
	{#each hand as card}
		<Card name={card.displayName} />
	{/each}
</div>

<style>
	.score {
		position: absolute;
		top: 0;
		right: 0;
		width: 68px;
		height: 42px;
		border-radius: 12px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 28px;
		font-weight: bold;
		color: goldenrod;
	}

	.wrapper {
		position: relative;
		display: flex;
		flex-grow: 1;
		align-items: center;
		justify-content: flex-start;
		padding: 10px 48px;
		border: 2px solid rgba(0, 0, 0, 0.76);
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
		border-radius: 12px;
	}

	@media (max-width: 968px) and (orientation: landscape) {
		.wrapper {
			padding: 4px 8px;
			gap: 10px;
		}
	}
</style>
