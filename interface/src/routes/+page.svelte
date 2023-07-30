<script lang="ts">
  import { onMount } from "svelte";
  import { type Note, playChord, playMelodyNote, stopMelodyNote, type ChordType } from "$lib/sound";

  let keys: Set<string> = new Set();

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

  // CUTTING NOTES SHORT
  const keyNoteDict = new Map<string, Note>();

  // THE WATCHER!
  setInterval(() => {
    // ======== //
    // MELODY!! //
    // ======== //

    let currentOctave = middleOctave + 1;
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
        let note: Note = { freq: "Db", octave: currentOctave };
        playMelodyNote(note);
        keyNoteDict.set("u", note);
      }
      if (isFirstPress("i")) {
        let note: Note = { freq: "Eb", octave: currentOctave };
        playMelodyNote(note);
        keyNoteDict.set("i", note);
      }
      if (isFirstPress("o")) {
        let note: Note = { freq: "F", octave: currentOctave };
        playMelodyNote(note);
        keyNoteDict.set("o", note);
      }
      if (isFirstPress("p")) {
        let note: Note = { freq: "Gb", octave: currentOctave };
        playMelodyNote(note);
        keyNoteDict.set("p", note);
      }
      if (isFirstPress("j")) {
        let note: Note = { freq: "Ab", octave: currentOctave };
        playMelodyNote(note);
        keyNoteDict.set("j", note);
      }
      if (isFirstPress("k")) {
        let note: Note = { freq: "Bb", octave: currentOctave };
        playMelodyNote(note);
        keyNoteDict.set("k", note);
      }
      if (isFirstPress("l")) {
        let note: Note = { freq: "C", octave: currentOctave + 1 };
        playMelodyNote(note);
        keyNoteDict.set("l", note);
      }
      if (isFirstPress(";")) {
        let note: Note = { freq: "Db", octave: currentOctave + 1 };
        playMelodyNote(note);
        keyNoteDict.set(";", note);
      }
    } // FLAT
    else if (isHeld("'")) {
      if (isFirstPress("u")) {
        // playMelodyNote({ freq: "B", octave: currentOctave - 1 });
        let note: Note = { freq: "B", octave: currentOctave - 1 };
        playMelodyNote(note);
        keyNoteDict.set("u", note);
      }
      if (isFirstPress("i")) {
        // playMelodyNote({ freq: "Db", octave: currentOctave });
        let note: Note = { freq: "Db", octave: currentOctave };
        playMelodyNote(note);
        keyNoteDict.set("i", note);
      }
      if (isFirstPress("o")) {
        // playMelodyNote({ freq: "Eb", octave: currentOctave });
        let note: Note = { freq: "Eb", octave: currentOctave };
        playMelodyNote(note);
        keyNoteDict.set("o", note);
      }
      if (isFirstPress("p")) {
        // playMelodyNote({ freq: "E", octave: currentOctave });
        let note: Note = { freq: "E", octave: currentOctave };
        playMelodyNote(note);
        keyNoteDict.set("p", note);
      }
      if (isFirstPress("j")) {
        // playMelodyNote({ freq: "Gb", octave: currentOctave });
        let note: Note = { freq: "Gb", octave: currentOctave };
        playMelodyNote(note);
        keyNoteDict.set("j", note);
      }
      if (isFirstPress("k")) {
        // playMelodyNote({ freq: "Ab", octave: currentOctave });
        let note: Note = { freq: "Ab", octave: currentOctave };
        playMelodyNote(note);
        keyNoteDict.set("k", note);
      }
      if (isFirstPress("l")) {
        // playMelodyNote({ freq: "Bb", octave: currentOctave });
        let note: Note = { freq: "Bb", octave: currentOctave };
        playMelodyNote(note);
        keyNoteDict.set("l", note);
      }
      if (isFirstPress(";")) {
        // playMelodyNote({ freq: "B", octave: currentOctave });
        let note: Note = { freq: "B", octave: currentOctave };
        playMelodyNote(note);
        keyNoteDict.set(";", note);
      }
    } // NATURAL
    else {
      if (isFirstPress("u")) {
        // playMelodyNote({ freq: "C", octave: currentOctave });
        let note: Note = { freq: "C", octave: currentOctave };
        playMelodyNote(note);
        keyNoteDict.set("u", note);
      }
      if (isFirstPress("i")) {
        // playMelodyNote({ freq: "D", octave: currentOctave });
        let note: Note = { freq: "D", octave: currentOctave };
        playMelodyNote(note);
        keyNoteDict.set("i", note);
      }
      if (isFirstPress("o")) {
        // playMelodyNote({ freq: "E", octave: currentOctave });
        let note: Note = { freq: "E", octave: currentOctave };
        playMelodyNote(note);
        keyNoteDict.set("o", note);
      }
      if (isFirstPress("p")) {
        // playMelodyNote({ freq: "F", octave: currentOctave });
        let note: Note = { freq: "F", octave: currentOctave };
        playMelodyNote(note);
        keyNoteDict.set("p", note);
      }
      if (isFirstPress("j")) {
        // playMelodyNote({ freq: "G", octave: currentOctave });
        let note: Note = { freq: "G", octave: currentOctave };
        playMelodyNote(note);
        keyNoteDict.set("j", note);
      }
      if (isFirstPress("k")) {
        // playMelodyNote({ freq: "A", octave: currentOctave });
        let note: Note = { freq: "A", octave: currentOctave };
        playMelodyNote(note);
        keyNoteDict.set("k", note);
      }
      if (isFirstPress("l")) {
        // playMelodyNote({ freq: "B", octave: currentOctave });
        let note: Note = { freq: "B", octave: currentOctave };
        playMelodyNote(note);
        keyNoteDict.set("l", note);
      }
      if (isFirstPress(";")) {
        // playMelodyNote({ freq: "C", octave: currentOctave + 1 });
        let note: Note = { freq: "C", octave: currentOctave + 1 };
        playMelodyNote(note);
        keyNoteDict.set(";", note);
      }
    }

    // ======== //
    // CHORDS!! //
    // ======== //
    const chordOctave = middleOctave - 1;
    let chordType: ChordType = "7";
    if (isHeld("y")) {
      chordType = "maj";
    } else if (isHeld("h")) {
      chordType = "min";
    } else if (isHeld("v")) {
      chordType = "maj7";
    } else if (isHeld("c")) {
      chordType = "6";
    } else if (isHeld("x")) {
      chordType = "9";
    }

    // SHARP
    if (isHeld("q")) {
      if (isFirstPress("t")) {
        let note: Note = { freq: "Db", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("r")) {
        let note: Note = { freq: "Eb", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("e")) {
        let note: Note = { freq: "F", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("w")) {
        let note: Note = { freq: "Gb", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("s")) {
        let note: Note = { freq: "Ab", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("d")) {
        let note: Note = { freq: "Bb", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("f")) {
        let note: Note = { freq: "C", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("g")) {
        let note: Note = { freq: "Db", octave: chordOctave };
        playChord(note, chordType);
      }
    } // FLAT
    else if (isHeld("a")) {
      if (isFirstPress("t")) {
        // playMelodyNote({ freq: "B", octave: currentOctave - 1 });
        let note: Note = { freq: "B", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("r")) {
        // playMelodyNote({ freq: "Db", octave: currentOctave });
        let note: Note = { freq: "Db", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("e")) {
        // playMelodyNote({ freq: "Eb", octave: currentOctave });
        let note: Note = { freq: "Eb", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("w")) {
        // playMelodyNote({ freq: "E", octave: currentOctave });
        let note: Note = { freq: "E", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("s")) {
        // playMelodyNote({ freq: "Gb", octave: currentOctave });
        let note: Note = { freq: "Gb", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("d")) {
        // playMelodyNote({ freq: "Ab", octave: currentOctave });
        let note: Note = { freq: "Ab", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("f")) {
        // playMelodyNote({ freq: "Bb", octave: currentOctave });
        let note: Note = { freq: "Bb", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("g")) {
        // playMelodyNote({ freq: "B", octave: currentOctave });
        let note: Note = { freq: "B", octave: chordOctave };
        playChord(note, chordType);
      }
    } // NATURAL
    else {
      if (isFirstPress("t")) {
        // playMelodyNote({ freq: "C", octave: currentOctave });
        let note: Note = { freq: "C", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("r")) {
        // playMelodyNote({ freq: "D", octave: currentOctave });
        let note: Note = { freq: "D", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("e")) {
        // playMelodyNote({ freq: "E", octave: currentOctave });
        let note: Note = { freq: "E", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("w")) {
        // playMelodyNote({ freq: "F", octave: currentOctave });
        let note: Note = { freq: "F", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("s")) {
        // playMelodyNote({ freq: "G", octave: currentOctave });
        let note: Note = { freq: "G", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("d")) {
        // playMelodyNote({ freq: "A", octave: currentOctave });
        let note: Note = { freq: "A", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("f")) {
        // playMelodyNote({ freq: "B", octave: currentOctave });
        let note: Note = { freq: "B", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("g")) {
        // playMelodyNote({ freq: "C", octave: currentOctave + 1 });
        let note: Note = { freq: "C", octave: chordOctave };
        playChord(note, chordType);
      }
    }

    prevKeys = new Set(keys);
  });

  onMount(() => {
    window.addEventListener("keydown", (event) => {
      keys.add(event.key);
      keys = keys;
    });

    window.addEventListener("keyup", (event) => {
      keys.delete(event.key);
      keys = keys;
      stopMelodyNote(keyNoteDict.get(event.key));
      keyNoteDict.delete(event.key);
    });
  });
</script>

<div class="flex w-full flex-row justify-center">
  <div class="flex h-screen flex-col justify-center">
    <main class="my-4 flex flex-col gap-2 rounded-xl border-2 border-black">
      <h1 class="text-5xl">Jazzboard</h1>
      <div
        class="mt-auto flex w-full flex-row flex-wrap gap-4 rounded-b-xl bg-slate-300 px-4 text-lg">
        <span>keys down: </span>
        {#each keys as key}
          <span>{key}</span>
        {/each}
      </div>
    </main>
  </div>
</div>
