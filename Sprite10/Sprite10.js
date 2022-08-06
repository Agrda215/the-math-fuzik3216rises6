/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite10 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite10/costumes/costume1.svg", {
        x: 144,
        y: 81.33333778381343
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite10/sounds/pop.wav")];

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
        { name: "Beta-Power" },
        this.whenIReceiveBetaPower
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Battery" },
        this.whenIReceiveBattery
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gamma-Power" },
        this.whenIReceiveGammaPower
      ),
      new Trigger(Trigger.BROADCAST, { name: "Clock" }, this.whenIReceiveClock),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Functions" },
        this.whenIReceiveFunctions
      )
    ];
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.betapower > this.stage.vars.upgraderbetareq1 - 1) {
      this.stage.vars.upgraderbetareq1 += 2;
      this.stage.vars.upgradebetaeffect1 =
        this.stage.vars.upgradebetaeffect1 * 14;
    }
  }

  *whenGreenFlagClicked() {
    this.stage.vars.upgradebetaeffect1 = 1;
    this.stage.vars.upgraderbetareq1 = 2;
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
    this.stage.watchers.upgraderbetareq1.visible = false;
  }

  *whenIReceiveAlove() {
    this.visible = false;
    this.stage.watchers.upgraderbetareq1.visible = false;
  }

  *whenIReceiveAlphaPower() {
    this.visible = false;
    this.stage.watchers.upgraderbetareq1.visible = false;
  }

  *whenIReceiveBetaPower() {
    this.visible = true;
    this.stage.watchers.upgraderbetareq1.visible = true;
  }

  *whenIReceiveBattery() {
    this.visible = false;
    this.stage.watchers.upgraderbetareq1.visible = false;
  }

  *whenIReceiveGammaPower() {
    this.visible = false;
    this.stage.watchers.upgraderbetareq1.visible = false;
  }

  *whenIReceiveClock() {
    this.visible = false;
    this.stage.watchers.upgraderbetareq1.visible = false;
  }

  *whenIReceiveFunctions() {
    this.visible = false;
    this.stage.watchers.upgraderbetareq1.visible = false;
  }
}
