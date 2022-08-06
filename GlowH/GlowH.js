/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GlowH extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow-H", "./GlowH/costumes/Glow-H.svg", { x: 35, y: 46 })
    ];

    this.sounds = [new Sound("pop", "./GlowH/sounds/pop.wav")];

    this.triggers = [];
  }
}
