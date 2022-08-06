/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite6/costumes/costume1.svg", {
        x: 167.6606606606606,
        y: 67.81081081081076
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite6/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Alove" }, this.whenIReceiveAlove),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Alpha-Power" },
        this.whenIReceiveAlphaPower
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
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

  *whenGreenFlagClicked() {
    this.visible = false;
    this.stage.watchers.aloveLevel.visible = false;
  }

  *whenIReceiveAlove() {
    this.visible = true;
    this.stage.watchers.aloveLevel.visible = true;
  }

  *whenIReceiveAlphaPower() {
    this.visible = false;
    this.stage.watchers.aloveLevel.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching("mouse")) {
        this.say("" + "Req:" + this.stage.vars.aloveReq);
      } else {
        this.say("");
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.aloveReq = 75 * 10 ** 5;
  }

  *whenIReceiveBetaPower() {
    this.visible = false;
    this.stage.watchers.aloveLevel.visible = false;
  }

  *whenIReceiveBattery() {
    this.visible = false;
    this.stage.watchers.aloveLevel.visible = false;
  }

  *whenIReceiveGammaPower() {
    this.visible = false;
    this.stage.watchers.aloveLevel.visible = false;
  }

  *whenIReceiveClock() {
    this.visible = false;
    this.stage.watchers.aloveLevel.visible = false;
  }

  *whenIReceiveFunctions() {
    this.visible = false;
    this.stage.watchers.aloveLevel.visible = false;
  }
}
