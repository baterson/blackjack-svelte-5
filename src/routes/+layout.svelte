<script lang="ts">
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	const { children } = $props();

	inject({ mode: dev ? 'development' : 'production' });
</script>

{@render children()}
