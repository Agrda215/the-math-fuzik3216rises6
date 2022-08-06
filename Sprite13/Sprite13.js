/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite13 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite13/costumes/costume1.svg", {
        x: 185.74402516990338,
        y: 139.7716160857003
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite13/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Battery" },
        this.whenIReceiveBattery
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
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

  *whenIReceiveBattery() {
    this.stage.watchers.batteryUsed.visible = true;
    this.stage.watchers.batteryUsedLimit.visible = true;
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.batteryUsedLimit = 4;
  }

  *whenIReceiveAlove() {
    this.visible = false;
  }

  *whenIReceiveAlphaPower() {
    this.visible = false;
  }

  *whenIReceiveBetaPower() {
    this.visible = false;
  }

  *whenIReceiveGammaPower() {
    this.visible = false;
  }

  *whenIReceiveClock() {
    this.visible = false;
  }

  *whenIReceiveFunctions() {
    this.visible = false;
  }
}
