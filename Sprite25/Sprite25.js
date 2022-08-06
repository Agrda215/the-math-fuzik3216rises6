/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite25 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite25/costumes/costume1.svg", {
        x: 145,
        y: 100.33333778381349
      }),
      new Costume("costume2", "./Sprite25/costumes/costume2.svg", {
        x: 145,
        y: 100.3333377838135
      }),
      new Costume("costume3", "./Sprite25/costumes/costume3.svg", {
        x: 145,
        y: 100.33333778381352
      }),
      new Costume("costume4", "./Sprite25/costumes/costume4.svg", {
        x: 145,
        y: 100.33333778381353
      }),
      new Costume("costume5", "./Sprite25/costumes/costume5.svg", {
        x: 145,
        y: 100.33333778381355
      }),
      new Costume("costume6", "./Sprite25/costumes/costume6.svg", {
        x: 145,
        y: 100.33333778381356
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite25/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.costume = Math.floor(this.random(1, 6));
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.stage.vars.t += 1;
  }
}
