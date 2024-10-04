<div class="wrapper">
	<div id="deck">
		{#each Array(5) as _, i}
			<svg style="transform: translate({i * 2}px, {-i * 2}px); z-index: {5 - i};">
				<use href="#back" />
			</svg>
		{/each}
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 10;
	}

	#deck {
		position: relative;
		width: 200px;
		height: 250px;

		flex-shrink: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px;
	}

	svg {
		padding-left: 24px;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
