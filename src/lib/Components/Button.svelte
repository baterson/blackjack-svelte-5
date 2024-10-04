<script lang="ts">
	import type { Snippet } from 'svelte';

	const {
		disabled,
		onclick,
		children,
		variant
	}: {
		disabled?: boolean;
		onclick: () => void;
		children: Snippet;
		variant: string;
	} = $props();
</script>

<button class={variant} {onclick} {disabled}>{@render children()}</button>

<style>
	button {
		padding: 12px 28px;
		font-size: 16px;
		font-weight: bold;
		border-radius: 8px;
		border: 2px solid transparent;
		background-color: #2e2e38;
		color: #c4c4cc;
		cursor: pointer;
		transition:
			background-color 0.3s ease,
			border 0.3s ease,
			transform 0.1s ease;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
	}

	button:hover {
		background-color: #3a3a46;
		transform: translateY(-2px);
	}

	button:active {
		background-color: #1c1c25;
		transform: translateY(1px);
	}

	button:disabled {
		background-color: #4d4d58;
		color: #b0b0ba;
		cursor: not-allowed;
		box-shadow: none;
	}

	.deal {
		background-color: #2c5846;
		color: #c1d8cc;
	}

	.deal:hover {
		background-color: #34685b;
	}

	.draw {
		background-color: #253b61;
		color: #ccd1e6;
	}

	.draw:hover {
		background-color: #314b79;
	}

	.stop {
		background-color: #5b2a2a;
		color: #e6c6c6;
	}

	.stop:hover {
		background-color: #793737;
	}

	@media (max-width: 968px) and (orientation: landscape) {
		button {
			padding: 10px 20px;
			font-size: 14px;
			border-radius: 6px;
		}
	}
</style>
