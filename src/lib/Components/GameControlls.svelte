<script>
	const { winner, inGame, draw, stop, start } = $props();
</script>

<div>
	{#if winner}
		<h3>Winner: {winner}</h3>
	{:else if inGame}
		<button onclick={draw}>Draw player</button>
		<button onclick={stop}>Stop player</button>
	{:else}
		<button onclick={start}>Start</button>
	{/if}
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
