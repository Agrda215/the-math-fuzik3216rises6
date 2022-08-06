/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite26 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite26/costumes/costume1.svg", {
        x: 212.95945945945942,
        y: 95.59210736615513
      })
    ];

    this.sounds = [new Sound("Meow", "./Sprite26/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (!(this.stage.vars.gammapower > 18)) {
        this.visible = false;
      } else {
        this.visible = true;
      }
      yield;
    }
  }
}
