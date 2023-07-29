<script lang="ts">
	import { onMount } from 'svelte';

	let keys: Set<string> = new Set();

	onMount(() => {
		window.addEventListener('keypress', (event) => {
			keys.add(event.key);
			keys = keys;
		});

		window.addEventListener('keyup', (event) => {
			keys.delete(event.key);
			keys = keys;
		});
	});
</script>

<div class="flex w-full flex-row justify-center">
	<div class="flex h-screen flex-col justify-center">
		<div class="flex flex-row flex-wrap gap-8 p-4 text-4xl">
			{#each keys as key}
				<span>{key}</span>
			{/each}
		</div>
	</div>
</div>
