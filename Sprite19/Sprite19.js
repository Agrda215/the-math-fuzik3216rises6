/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite19 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite19/costumes/costume1.svg", {
        x: 212.95945945945942,
        y: 95.59210736615516
      })
    ];

    this.sounds = [new Sound("Meow", "./Sprite19/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("Clock");
  }

  *whenGreenFlagClicked() {
    this.stage.watchers.score.visible = false;
    this.stage.watchers.days.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (!(this.stage.vars.clockactive == 1)) {
        this.visible = false;
      } else {
        this.visible = true;
      }
      yield;
    }
  }
}
