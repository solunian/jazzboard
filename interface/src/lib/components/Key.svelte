<script lang="ts">
  import type { KeyType } from "$lib/types";
  

  export let char: string;
  export let content: string;
  export let type: KeyType;

  let typeStyling = "";
  switch (type) {
    case "chord-modifier":
      typeStyling = "bg-gradient-to-br from-rose-50 to-white";
      break;
    case "note-modifier":
      typeStyling = "bg-gradient-to-br from-sky-100 to-white";
      break;
    case "chord":
      typeStyling = "bg-pink-100";
      break;
    case "note":
      typeStyling = "bg-blue-100";
      break;
  }
</script>

<div class={`relative w-14 h-14 rounded-lg border-slate-300 border-2 select-none ${typeStyling}`}>
  <span class="absolute text-xs top-0.5 left-1 text-slate-500">{char}</span>
  <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-lg whitespace-nowrap">
    {content}
    <!-- {"♯♭"} -->
  </span>
</div>
