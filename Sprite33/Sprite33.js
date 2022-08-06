/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite33 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite33/costumes/costume1.svg", {
        x: 167.25,
        y: 82.58333572436925
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite33/sounds/pop.wav")];

    this.triggers = [];
  }
}
