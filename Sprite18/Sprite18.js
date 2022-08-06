/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite18 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite18/costumes/costume1.svg", {
        x: 144,
        y: 81.33333778381336
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite18/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "Alove" }, this.whenIReceiveAlove),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Alpha-Power" },
        this.whenIReceiveAlphaPower
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gamma-Power" },
        this.whenIReceiveGammaPower
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Battery" },
        this.whenIReceiveBattery
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Beta-Power" },
        this.whenIReceiveBetaPower
      ),
      new Trigger(Trigger.BROADCAST, { name: "Clock" }, this.whenIReceiveClock)
    ];
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.gammapower > this.stage.vars.upgraderbetareq2 - 1) {
      this.stage.vars.upgradergammareq2 += 24;
      this.stage.vars.upgradergammaeffect2 =
        this.stage.vars.upgradergammaeffect2 * 3;
      this.stage.vars.clockactive = 1;
    }
  }

  *whenGreenFlagClicked() {
    this.stage.vars.upgradergammaeffect2 = 1;
    this.stage.vars.upgradergammareq2 = 12;
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
    this.stage.watchers.upgradergammareq2.visible = false;
  }

  *whenIReceiveAlove() {
    this.visible = false;
    this.stage.watchers.upgradergammareq2.visible = false;
  }

  *whenIReceiveAlphaPower() {
    this.visible = false;
    this.stage.watchers.upgradergammareq2.visible = false;
  }

  *whenIReceiveGammaPower() {
    this.visible = true;
    this.stage.watchers.upgradergammareq2.visible = true;
  }

  *whenIReceiveBattery() {
    this.visible = false;
    this.stage.watchers.upgradergammareq2.visible = false;
  }

  *whenIReceiveBetaPower() {
    this.visible = false;
    this.stage.watchers.upgradergammareq2.visible = false;
  }

  *whenIReceiveClock() {
    this.visible = false;
    this.stage.watchers.upgradergammareq2.visible = false;
  }
}
