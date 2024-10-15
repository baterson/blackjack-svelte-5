import { cubicOut } from 'svelte/easing';

export const flyAndFlip = (
	node: HTMLElement,
	{ delay = 0, duration = 1000, easing = cubicOut } = {}
) => {
	// Deck node
	const start = document.querySelector('#deck')?.getBoundingClientRect();
	// Node to animate
	const end = node.getBoundingClientRect();

	if (!start) return {};

	const dx = start.left - end.left;
	const dy = start.top - end.top;

	return {
		delay,
		duration,
		easing,
		css: (t: number) =>
			`transform: translate(${dx * (1 - t)}px, ${dy * (1 - t)}px) rotateY(${180 - t * 180}deg);`
	};
};
