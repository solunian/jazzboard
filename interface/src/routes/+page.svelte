<script lang="ts">
  import { onMount } from "svelte";
  import { playChord, playNote } from "$lib/sound";

  let keys: Set<string> = new Set();

  onMount(() => {
    window.addEventListener("keydown", (event) => {
      keys.add(event.key);
      keys = keys;
    });

    window.addEventListener("keyup", (event) => {
      keys.delete(event.key);
      keys = keys;
    });
  });

  let prevKeys: Set<string> = new Set();
  const middleOctave = 4;

  const inKeys = (...keyVals: string[]) => {
    for (let val of keyVals) {
      if (!keys.has(val)) return false;
    }
    return true;
  };
  const inPrevKeys = (...keyVals: string[]) => {
    for (let val of keyVals) {
      if (!prevKeys.has(val)) return false;
    }
    return true;
  };
  const isHeld = (...keyVals: string[]) => {
    for (let val of keyVals) {
      if (!inKeys(val) || !inPrevKeys(val)) return false;
    }
    return true;
  };
  const isFirstPress = (...keyVals: string[]) => {
    for (let val of keyVals) {
      if (!inKeys(val) || inPrevKeys(val)) return false;
    }
    return true;
  };

  setInterval(() => {
    let currentOctave = middleOctave;
    // OCTAVE SHIFTS
    if (isHeld("b")) {
      currentOctave -= 2;
    } else if (isHeld("n")) {
      currentOctave -= 1;
    } else if (isHeld("m")) {
      currentOctave += 1;
    } else if (isHeld(",")) {
      currentOctave += 2;
    }


    // SHARP
    if (isHeld("[")) {
      if (isFirstPress("u")) {
        playNote({ freq: "Db", octave: currentOctave });
      }
      if (isFirstPress("i")) {
        playNote({ freq: "Eb", octave: currentOctave });
      }
      if (isFirstPress("o")) {
        playNote({ freq: "F", octave: currentOctave });
      }
      if (isFirstPress("p")) {
        playNote({ freq: "Gb", octave: currentOctave });
      }
      if (isFirstPress("j")) {
        playNote({ freq: "Ab", octave: currentOctave });
      }
      if (isFirstPress("k")) {
        playNote({ freq: "Bb", octave: currentOctave });
      }
      if (isFirstPress("l")) {
        playNote({ freq: "C", octave: currentOctave + 1 });
      }
      if (isFirstPress(";")) {
        playNote({ freq: "Db", octave: currentOctave + 1 });
      }
    } // FLAT
    else if (isHeld("'")) {
      if (isFirstPress("u")) {
        playNote({ freq: "B", octave: currentOctave - 1 });
      }
      if (isFirstPress("i")) {
        playNote({ freq: "Db", octave: currentOctave });
      }
      if (isFirstPress("o")) {
        playNote({ freq: "Eb", octave: currentOctave });
      }
      if (isFirstPress("p")) {
        playNote({ freq: "E", octave: currentOctave });
      }
      if (isFirstPress("j")) {
        playNote({ freq: "Gb", octave: currentOctave });
      }
      if (isFirstPress("k")) {
        playNote({ freq: "Ab", octave: currentOctave });
      }
      if (isFirstPress("l")) {
        playNote({ freq: "Bb", octave: currentOctave });
      }
      if (isFirstPress(";")) {
        playNote({ freq: "B", octave: currentOctave });
      }
    } // NATURAL
    else {
      if (isFirstPress("u")) {
        playNote({ freq: "C", octave: currentOctave });
      }
      if (isFirstPress("i")) {
        playNote({ freq: "D", octave: currentOctave });
      }
      if (isFirstPress("o")) {
        playNote({ freq: "E", octave: currentOctave });
      }
      if (isFirstPress("p")) {
        playNote({ freq: "F", octave: currentOctave });
      }
      if (isFirstPress("j")) {
        playNote({ freq: "G", octave: currentOctave });
      }
      if (isFirstPress("k")) {
        playNote({ freq: "A", octave: currentOctave });
      }
      if (isFirstPress("l")) {
        playNote({ freq: "B", octave: currentOctave });
      }
      if (isFirstPress(";")) {
        playNote({ freq: "C", octave: currentOctave + 1 });
      }
    }

    prevKeys = new Set(keys);
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
