import { str, cycle, App, type Settings, type View } from "./lib.ts";

export class AppModel extends App {
  sounds = ["chime", "pop", "bell", "tick", "accent", "notify"];
  selected = 0;
  playing = false;
  constructor(s: Settings, saved: Settings, now: number) {
    super(s, saved, now);
    this.selected = Math.max(
      0,
      this.sounds.indexOf(str(s, "selected", "chime")),
    );
  }
  key(key: string, delta: number, _now: number): boolean {
    if (key === "wheel") {
      this.selected = cycle(this.selected, delta, this.sounds.length);
      this.playing = false;
    }
    if (key === "ok") {
      this.effects.length = 0;
      this.notify(this.sounds[this.selected]);
      this.playing = true;
    }
    if (key === "back" && this.playing) {
      this.stopSound();
      this.playing = false;
      return true;
    }
    return false;
  }
  view(_now: number): View {
    return {
      title: "Soundboard",
      value: this.sounds[this.selected].toUpperCase(),
      rows: [
        this.selected + 1 + " / " + this.sounds.length,
        this.error || "Original synthesized sound",
      ],
      hint: this.playing ? "OK replay / Back stop" : "Wheel select / OK play",
    };
  }
}
