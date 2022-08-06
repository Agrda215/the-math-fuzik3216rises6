/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite22 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite22/costumes/costume1.svg", {
        x: 212.95945945945942,
        y: 95.59210736615515
      })
    ];

    this.sounds = [new Sound("Meow", "./Sprite22/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("Functions");
  }

  *whenGreenFlagClicked() {
    this.stage.watchers.functions.visible = false;
    this.stage.watchers.reqfunction.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (!(this.stage.vars.t > 97104)) {
        this.visible = false;
      } else {
        this.visible = true;
      }
      yield;
    }
  }
}
