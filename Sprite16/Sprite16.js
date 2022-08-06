/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite16 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite16/costumes/costume1.svg", {
        x: 140,
        y: 108.33333778381345
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite16/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Alpha-Power" },
        this.whenIReceiveAlphaPower
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.BROADCAST, { name: "Alove" }, this.whenIReceiveAlove),
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
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gamma-Power" },
        this.whenIReceiveGammaPower
      ),
      new Trigger(Trigger.BROADCAST, { name: "Clock" }, this.whenIReceiveClock)
    ];
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.aloveLevel > this.stage.vars.reqgammapow - 1) {
      this.stage.vars.gammapower += 1;
      this.stage.vars.reqgammapow += 7;
    }
  }

  *whenIReceiveAlphaPower() {
    this.stage.watchers.betapower.visible = false;
    this.stage.watchers.reqbetapow.visible = false;
    this.visible = false;
    this.stage.watchers.alphapower.visible = true;
    this.stage.watchers.reqalphapow.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.stage.watchers.reqalphapow.visible = false;
    this.stage.vars.reqalphapow = 100;
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.betapower = 0;
  }

  *whenIReceiveAlove() {
    this.stage.watchers.alphapower.visible = false;
    this.stage.watchers.reqalphapow.visible = false;
    this.stage.watchers.betapower.visible = false;
    this.stage.watchers.reqbetapow.visible = false;
    this.stage.watchers.gammapower.visible = false;
    this.stage.watchers.reqgammapow.visible = false;
    this.visible = false;
  }

  *whenIReceiveBetaPower() {
    this.stage.watchers.reqbetapow.visible = false;
    this.stage.watchers.betapower.visible = false;
    this.stage.watchers.alphapower.visible = false;
    this.stage.watchers.reqalphapow.visible = false;
    this.stage.watchers.reqgammapow.visible = false;
    this.stage.watchers.gammapower.visible = false;
    this.visible = false;
  }

  *whenIReceiveBattery() {
    this.stage.watchers.betapower.visible = false;
    this.stage.watchers.reqbetapow.visible = false;
    this.visible = false;
    this.stage.watchers.gammapower.visible = false;
    this.stage.watchers.reqgammapow.visible = false;
  }

  *whenGreenFlagClicked4() {
    this.stage.vars.batteryactive = 0;
    this.stage.vars.gammapower = 0;
    this.stage.vars.reqgammapow = 25;
  }

  *whenIReceiveGammaPower() {
    this.stage.watchers.gammapower.visible = true;
    this.stage.watchers.reqgammapow.visible = true;
    this.visible = true;
  }

  *whenIReceiveClock() {
    this.stage.watchers.alphapower.visible = false;
    this.stage.watchers.reqalphapow.visible = false;
    this.stage.watchers.betapower.visible = false;
    this.stage.watchers.reqbetapow.visible = false;
    this.stage.watchers.gammapower.visible = false;
    this.stage.watchers.reqgammapow.visible = false;
    this.visible = false;
  }
}
