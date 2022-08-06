/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite42 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite42/costumes/costume1.svg", {
        x: 166.25,
        y: 122.58333778381348
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite42/sounds/pop.wav")];

    this.triggers = [];
  }
}
