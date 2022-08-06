/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite41 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite41/costumes/costume1.svg", {
        x: 175.25,
        y: 106.58333778381348
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite41/sounds/pop.wav")];

    this.triggers = [];
  }
}
