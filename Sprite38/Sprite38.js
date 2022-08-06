/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite38 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite38/costumes/costume1.svg", {
        x: 139.25,
        y: 63.91667175292969
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite38/sounds/pop.wav")];

    this.triggers = [];
  }
}
