<script lang="ts">
	const { children } = $props();

	import { inject } from '@vercel/analytics';
</script>

{@render children()}
