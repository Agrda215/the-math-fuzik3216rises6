/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite28 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite28/costumes/costume1.svg", {
        x: 108.195,
        y: 71.45808106939904
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite28/sounds/pop.wav")];

    this.triggers = [];
  }
}
