<script lang="ts">
	import { Deck } from '$lib/stores/Deck.svelte';
	import Card from '$lib/components/Card.svelte';
	import CardsDefinitions from '$lib/Components/CardsDefinitions.svelte';

	const deck = new Deck();
</script>

<CardsDefinitions />

<div class="container">
	<div class="row">
		<div class="col-12">
			<h1>Cards</h1>
		</div>
	</div>

	{#each deck.cards as card}
		<Card name={card.displayName} />
	{/each}
</div>

<style>
	.container {
		padding: 2rem;
	}
</style>
