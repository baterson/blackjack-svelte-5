<script lang="ts">
	const { name } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<use href={`#${name}`} />
</svg>

<style>
	svg {
		width: 200px;
		height: 250px;
	}
</style>
