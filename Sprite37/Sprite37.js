/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite37 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite37/costumes/costume1.svg", {
        x: 124.49953036624501,
        y: 126.83333778381348
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite37/sounds/pop.wav")];

    this.triggers = [];
  }
}
