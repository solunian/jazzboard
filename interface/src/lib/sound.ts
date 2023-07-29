import { Howl, Howler } from "howler";

type Note = "A" | "Ab" | "B" | "Bb" | "C" | "D" | "Db" | "E" | "Eb" | "F" | "G" | "Gb";

export function playNote(note: Note, octave: number) {
  let audioNote = new Howl({
    src: [`/edited-sounds/${note}${octave}.wav`],
    html5: true,
  });

  audioNote.play();
}
