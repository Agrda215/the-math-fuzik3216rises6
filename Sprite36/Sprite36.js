/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite36 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite36/costumes/costume1.svg", {
        x: 168,
        y: 91.33333778381348
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite36/sounds/pop.wav")];

    this.triggers = [];
  }
}
