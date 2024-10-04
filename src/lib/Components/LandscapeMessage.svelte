<script>
	import Landscape from '$lib/assets/landscape.svg?raw';
</script>

<section>
	{@html Landscape}
	<p>Please use landscape mode</p>
</section>

<style>
	section {
		display: none;
	}

	/* Основные стили модального окна */
	@media (max-width: 968px) and (orientation: portrait) {
		section {
			position: fixed;
			width: 100dvw;
			height: 100dvh;
			background-color: rgba(0, 0, 0, 0.9);
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			z-index: 100;
			color: #e8eaed;
			font-size: 28px;
		}
	}
</style>
