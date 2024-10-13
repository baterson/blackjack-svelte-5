<script lang="ts">
	// todo: define props
</script>

<!-- todo: add animation on enter -->
<div class="card">
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
		z-index: 10;
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
