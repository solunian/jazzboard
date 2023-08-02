import { Howl, Howler } from "howler";
import { fade } from "svelte/transition";

type Freq = "A" | "Ab" | "B" | "Bb" | "C" | "D" | "Db" | "E" | "Eb" | "F" | "G" | "Gb";
const ordering: Freq[] = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

export interface Note {
  freq: Freq;
  octave: number;
}

export interface Chord {
  tonic: Note,
  
}

// INIT ALLNOTES WITH ORDERING
let allNotes: Note[] = [
  { freq: "A", octave: 0 },
  { freq: "Bb", octave: 0 },
  { freq: "B", octave: 0 },
];
for (let oct = 1; oct <= 7; oct++) {
  for (let note of ordering) {
    allNotes.push({ freq: note, octave: oct });
  }
}
allNotes = [...allNotes, { freq: "C", octave: 8 }];
// ===========================

const initNote = (note: Note) => {
  return new Howl({
    src: [`/edited-sounds-mp3/${note.freq}${note.octave}.mp3`],
  });
};

const melodyNotes = allNotes.map((note) => initNote(note)); // copy
export function playMelodyNote(note: Note) {
  melodyNotes[getPianoIndex(note)].play();
  console.log(note.freq, note.octave);
}
export function stopMelodyNote(note: Note | undefined) {
  if (note === undefined) {
    return;
  }
  melodyNotes[getPianoIndex(note)].stop();

  console.log(melodyNotes[getPianoIndex(note)].seek());
  // let fadeDuration = 2000;
  // if (melodyNotes[getPianoIndex(note)].seek() < 0.7) {
  //   setTimeout(() => {
  //     melodyNotes[getPianoIndex(note)].fade(1, 0, fadeDuration);

  //     melodyNotes[getPianoIndex(note)].on("fade", () => {
  //       if (!melodyNotes[getPianoIndex(note)].playing())
  //         melodyNotes[getPianoIndex(note)].stop();
  //     })
  //     melodyNotes[getPianoIndex(note)].volume(1);
  //   }, 100);

  // } else {
  //   melodyNotes[getPianoIndex(note)].fade(1, 0, fadeDuration);

  //   melodyNotes[getPianoIndex(note)].on("fade", () => {
  //     melodyNotes[getPianoIndex(note)].stop();
  //   })
  //   melodyNotes[getPianoIndex(note)].volume(1);
  // }
}

export function playNote(note: Note) {
  let audioNote = new Howl({
    src: [`/edited-sounds-mp3/${note.freq}${note.octave}.mp3`],
  });

  audioNote.play();
  console.log(note.freq, note.octave);
}

// index from 0-87 for 88 piano keys (starts at A0, ends at C8)
function getPianoIndex(note: Note) {
  return 12 * note.octave + ordering.indexOf(note.freq) - 9;
}

export type ChordType = "maj" | "min" | "7" | "maj7" | "6" | "min6" | "9";

export function playChord(tonic: Note, chordType?: ChordType) {
  if (chordType === undefined) {
    chordType = "7";
  }
  let index = getPianoIndex(tonic);

  switch (chordType) {
    case "maj":
      playNote(allNotes[index]);
      playNote(allNotes[index + 4]);
      playNote(allNotes[index + 7]);
      break;
    case "min":
      playNote(allNotes[index]);
      playNote(allNotes[index + 3]);
      playNote(allNotes[index + 7]);
      break;
    case "7":
      playNote(allNotes[index]);
      playNote(allNotes[index + 4]);
      playNote(allNotes[index + 7]);
      playNote(allNotes[index + 10]);
      break;
    case "maj7":
      playNote(allNotes[index]);
      playNote(allNotes[index + 4]);
      playNote(allNotes[index + 7]);
      playNote(allNotes[index + 11]);
      break;
    case "6":
      playNote(allNotes[index]);
      playNote(allNotes[index + 4]);
      playNote(allNotes[index + 7]);
      playNote(allNotes[index + 9]);
      break;
    case "9":
      playNote(allNotes[index]);
      playNote(allNotes[index + 4]);
      playNote(allNotes[index + 7]);
      playNote(allNotes[index + 10]);
      playNote(allNotes[index + 14]);
      break;
  }

  // playNote(allNotes[index + 11]);
}
