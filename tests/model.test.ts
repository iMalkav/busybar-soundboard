import assert from "node:assert/strict";
import test from "node:test";
import schema from "../src/appmeta/settings.json" with { type: "json" };
import { AppModel } from "../src/model.ts";
import { schemaDefaults, type Settings } from "../src/lib.ts";
const NOW = 1700000000000;
const make = (values: Settings = {}, saved: Settings = {}, now = NOW) =>
  new AppModel({ ...schemaDefaults(schema.fields), ...values }, saved, now);

test("rapid replay keeps the latest sound request", () => {
  const a = make();
  a.key("ok", 0, NOW);
  a.key("wheel", 1, NOW);
  a.key("ok", 0, NOW);
  assert.equal(a.effects.length, 1);
  assert.equal(a.effects[0].sound, "pop");
});
test("mute suppresses sound and Back stops before exiting", () => {
  const a = make({ sound: false });
  a.key("ok", 0, NOW);
  assert.equal(a.effects.length, 0);
  assert.equal(a.key("back", 0, NOW), true);
  assert.equal(a.effects[0].stopAudio, true);
});
