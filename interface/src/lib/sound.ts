import { Howl, Howler } from "howler";

type Freq = "A" | "Ab" | "B" | "Bb" | "C" | "D" | "Db" | "E" | "Eb" | "F" | "G" | "Gb";
const ordering: Freq[] = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

interface Note {
  freq: Freq;
  octave: number;
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

export function playNote(note: Note) {
  let audioNote = new Howl({
    src: [`/edited-sounds/${note.freq}${note.octave}.wav`],
    html5: true,
  });

  audioNote.play();
  console.log(note);
}

// index from 0-87 for 88 piano keys (starts at A0, ends at C8)
function getPianoIndex(note: Note) {
  return 12 * note.octave + ordering.indexOf(note.freq) - 9;
}

export function playChord(tonic: Note) {
  let index = getPianoIndex(tonic);
  playNote(allNotes[index]);
  playNote(allNotes[index + 4]);
  playNote(allNotes[index + 7]);
  // playNote(allNotes[index + 11]);
}
