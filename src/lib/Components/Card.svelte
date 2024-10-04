<script lang="ts">
	import { flyAndFlip } from '$lib/animation';

	const { name }: { name: string } = $props();
</script>

<div class="card" in:flyAndFlip>
	<svg class="back">
		<use href="#back" />
	</svg>

	<svg class="front">
		<use href={`#${name}`} />
	</svg>
</div>

<style>
	.card {
		position: relative;
		width: 200px;
		height: 250px;
		transform-style: preserve-3d;
		perspective: 1000px;
		z-index: 20;
	}

	svg {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.back {
		z-index: 1;
	}

	.front {
		backface-visibility: hidden;
		z-index: 2;
	}
</style>
