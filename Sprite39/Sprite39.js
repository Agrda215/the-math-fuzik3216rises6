/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite39 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite39/costumes/costume1.svg", {
        x: 157.25,
        y: 73.91667175292969
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite39/sounds/pop.wav")];

    this.triggers = [];
  }
}
