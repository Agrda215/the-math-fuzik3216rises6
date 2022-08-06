/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GlowA extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow-A", "./GlowA/costumes/Glow-A.svg", { x: 36, y: 37 })
    ];

    this.sounds = [new Sound("pop", "./GlowA/sounds/pop.wav")];

    this.triggers = [];
  }
}
