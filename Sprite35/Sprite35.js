/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite35 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite35/costumes/costume1.svg", {
        x: 170.58333334326744,
        y: -1.0833282470703125
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite35/sounds/pop.wav")];

    this.triggers = [];
  }
}
