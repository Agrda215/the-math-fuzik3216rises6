/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite20 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite20/costumes/costume1.svg", {
        x: 193.20995448291055,
        y: 144.53535836885226
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite20/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Alove" }, this.whenIReceiveAlove),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Alpha-Power" },
        this.whenIReceiveAlphaPower
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
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gamma-Power" },
        this.whenIReceiveGammaPower
      ),
      new Trigger(Trigger.BROADCAST, { name: "Clock" }, this.whenIReceiveClock),
      new Trigger(Trigger.KEY_PRESSED, { key: "2" }, this.whenKey2Pressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Functions" },
        this.whenIReceiveFunctions
      )
    ];
  }

  *whenIReceiveAlove() {
    this.goto(-6, -25);
    this.visible = false;
    this.stage.watchers.secondShow.visible = false;
    this.stage.watchers.days.visible = false;
    this.stage.watchers.daysEffect.visible = false;
  }

  *whenIReceiveAlphaPower() {
    this.goto(-6, -25);
    this.visible = false;
    this.stage.watchers.secondShow.visible = false;
    this.stage.watchers.days.visible = false;
    this.stage.watchers.daysEffect.visible = false;
  }

  *whenIReceiveBattery() {
    this.goto(-6, -25);
    this.visible = false;
    this.stage.watchers.secondShow.visible = false;
    this.stage.watchers.days.visible = false;
    this.stage.watchers.daysEffect.visible = false;
  }

  *whenIReceiveBetaPower() {
    this.goto(-6, -25);
    this.visible = false;
    this.stage.watchers.secondShow.visible = false;
    this.stage.watchers.days.visible = false;
    this.stage.watchers.daysEffect.visible = false;
  }

  *whenIReceiveGammaPower() {
    this.goto(-6, -25);
    this.visible = false;
    this.stage.watchers.secondShow.visible = false;
    this.stage.watchers.days.visible = false;
    this.stage.watchers.daysEffect.visible = false;
  }

  *whenIReceiveClock() {
    this.goto(-6, -25);
    this.visible = true;
    this.stage.watchers.secondShow.visible = true;
    this.stage.watchers.days.visible = true;
    this.stage.watchers.daysEffect.visible = true;
  }

  *whenKey2Pressed() {
    this.stage.vars.daysStart = 1;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.daysStart = 0;
    this.goto(-6, -25);
    this.visible = false;
    this.stage.watchers.secondShow.visible = false;
    this.stage.watchers.days.visible = false;
    this.stage.watchers.daysEffect.visible = false;
  }

  *whenIReceiveFunctions() {
    this.goto(-6, -25);
    this.visible = false;
    this.stage.watchers.secondShow.visible = false;
    this.stage.watchers.days.visible = false;
    this.stage.watchers.daysEffect.visible = false;
  }
}
