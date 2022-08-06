/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite40 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite40/costumes/costume1.svg", {
        x: 168.25,
        y: 128.58333778381348
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite40/sounds/pop.wav")];

    this.triggers = [];
  }
}
