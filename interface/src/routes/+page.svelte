<script lang="ts">
  import { onMount } from "svelte";
  import { type Note, playChord, playMelodyNote, stopMelodyNote, type ChordType, type Chord } from "$lib/sound";
  import Key from "$lib/components/Key.svelte";

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
  let keyNoteDict = new Map<string, Note>();
  
  let keyChordDict = new Map<string, Chord>();

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
      chordType = "9";
    } else if (isHeld("h")) {
      chordType = "6";
    } else if (isHeld("v")) {
      chordType = "maj7";
    } else if (isHeld("c")) {
      chordType = "min";
    } else if (isHeld("x")) {
      chordType = "maj";
    } 
    // else if (isHeld("z")) {
    //   chordType = "maj";
    // }

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
      if (isFirstPress("g")) {
        let note: Note = { freq: "Ab", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("f")) {
        let note: Note = { freq: "Bb", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("d")) {
        let note: Note = { freq: "C", octave: chordOctave + 1 };
        playChord(note, chordType);
      }
      if (isFirstPress("s")) {
        let note: Note = { freq: "Db", octave: chordOctave + 1 };
        playChord(note, chordType);
      }
    } // FLAT
    else if (isHeld("a")) {
      if (isFirstPress("t")) {
        // playMelodyNote({ freq: "B", octave: currentOctave - 1 });
        let note: Note = { freq: "B", octave: chordOctave - 1 };
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
      if (isFirstPress("g")) {
        // playMelodyNote({ freq: "Gb", octave: currentOctave });
        let note: Note = { freq: "Gb", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("f")) {
        // playMelodyNote({ freq: "Ab", octave: currentOctave });
        let note: Note = { freq: "Ab", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("d")) {
        // playMelodyNote({ freq: "Bb", octave: currentOctave });
        let note: Note = { freq: "Bb", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("s")) {
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
      if (isFirstPress("g")) {
        // playMelodyNote({ freq: "G", octave: currentOctave });
        let note: Note = { freq: "G", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("f")) {
        // playMelodyNote({ freq: "A", octave: currentOctave });
        let note: Note = { freq: "A", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("d")) {
        // playMelodyNote({ freq: "B", octave: currentOctave });
        let note: Note = { freq: "B", octave: chordOctave };
        playChord(note, chordType);
      }
      if (isFirstPress("s")) {
        // playMelodyNote({ freq: "C", octave: currentOctave + 1 });
        let note: Note = { freq: "C", octave: chordOctave + 1 };
        playChord(note, chordType);
      }
    }

    prevKeys = new Set(keys);

    // UPDATE STATE
    keyNoteDict = keyNoteDict;
    keyChordDict = keyChordDict;
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

<div class="flex w-full flex-row justify-center bg-orange-200">
  <div class="flex h-screen flex-col justify-center">
    <main class="my-4 flex flex-col gap-2 rounded-xl border-2 border-black bg-white">
      <h1 class="px-6 pt-8 text-center font-badscript text-6xl z-10">jazzboard</h1>

      <div
        class="flex w-full flex-row bg-gradient-to-r from-pink-200 via-white to-blue-200 px-3 text-lg -translate-y-2">
        <span class="invisible w-0">filler</span>
        
        <span class="flex flex-row gap-2">
          {#each keyChordDict.entries() as [, chord]}
            <span>{chord}</span>
          {/each}
        </span>
        <span class="ml-auto flex flex-row gap-2">
          {#each keyNoteDict.entries() as [, note]}
            <span>{note.freq}<span class="text-xs">{note.octave}</span></span>
            
          {/each}
        </span>
      </div>


      <!-- QWER ROW -->
      <div class="flex flex-row gap-2 px-4">
        <Key char="q" content={"♯"} type="chord-modifier"/>
        <Key char="w" content={"F"} type="chord"/>
        <Key char="e" content={"E"} type="chord"/>
        <Key char="r" content={"D"} type="chord"/>
        <Key char="t" content={"C"} type="chord"/>
        <Key char="y" content={"9th"} type="chord-modifier"/>
        <Key char="u" content={"C"} type="note"/>
        <Key char="i" content={"D"} type="note"/>
        <Key char="o" content={"E"} type="note"/>
        <Key char="p" content={"F"} type="note"/>
        <Key char="[" content={"♯"} type="note-modifier"/>
      </div>

      <!-- ASDF ROW -->
      <div class="flex flex-row gap-2 px-4 ml-4">
        <Key char="a" content={"♭"} type="chord-modifier"/>
        <Key char="s" content={"C^"} type="chord"/>
        <Key char="d" content={"B"} type="chord"/>
        <Key char="f" content={"A"} type="chord"/>
        <Key char="g" content={"G"} type="chord"/>
        <Key char="h" content={"6th"} type="chord-modifier"/>
        <Key char="j" content={"G"} type="note"/>
        <Key char="k" content={"A"} type="note"/>
        <Key char="l" content={"B"} type="note"/>
        <Key char=";" content={"C^"} type="note"/>
        <Key char="'" content={"♭"} type="note-modifier"/>
      </div>

      <!-- ZXCV ROW -->
      <div class="flex flex-row gap-2 px-4 ml-28">
        <Key char="x" content={"maj"} type="chord-modifier"/>
        <Key char="c" content={"min"} type="chord-modifier"/>
        <Key char="v" content={"maj7"} type="chord-modifier"/>
        <Key char="b" content={"--8"} type="note-modifier"/>
        <Key char="n" content={"-8"} type="note-modifier"/>
        <Key char="m" content={"+8"} type="note-modifier"/>
        <Key char="," content={"++8"} type="note-modifier"/>
      </div>



      <div
        class="mt-auto flex w-full flex-row flex-wrap gap-2 rounded-b-[0.6rem] bg-slate-300 px-3 text-lg">
        <span>keys down:</span>
        {#each keys as key}
          <span>{key}</span>
        {/each}
      </div>
    </main>
  </div>
</div>
