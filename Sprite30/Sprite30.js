/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite30 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite30/costumes/costume1.svg", {
        x: 167.25,
        y: 84.21900572436928
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite30/sounds/pop.wav")];

    this.triggers = [];
  }
}
