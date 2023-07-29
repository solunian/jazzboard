<script lang="ts">
  import { onMount } from "svelte";
  import { playNote } from "$lib/sound";

  let keys: Set<string> = new Set();

  onMount(() => {
    window.addEventListener("keypress", (event) => {
      keys.add(event.key);
      keys = keys;
      if (event.key === "i") {
        playNote("C", 4);
      }
    });

    window.addEventListener("keyup", (event) => {
      keys.delete(event.key);
      keys = keys;
    });
  });

  setInterval(() => {
    for (let i of keys) {
    }
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
