<script lang="ts">
	import { cubicOut } from 'svelte/easing';

	export let name: string;

	function flyAndFlip(node, { delay = 0, duration = 1000, easing = cubicOut } = {}) {
		const start = document.querySelector('#deck')?.getBoundingClientRect();
		const end = node.getBoundingClientRect();

		if (!start) return {};

		const dx = start.left - end.left;
		const dy = start.top - end.top;

		console.log('start', start);
		console.log('dx', dx);
		console.log('dy', dy);

		return {
			delay,
			duration,
			easing,
			css: (t) => `
          transform: translate(${dx * (1 - t)}px, ${dy * (1 - t)}px) rotateY(${180 - t * 180}deg);
        `
		};
	}
</script>

<div class="card" in:flyAndFlip>
	<svg class="card__face back">
		<use href="#back" />
	</svg>

	<svg class="card__face front">
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
	}

	.card__face {
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
