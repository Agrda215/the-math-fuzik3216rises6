/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite8/costumes/costume1.svg", {
        x: 140,
        y: 108.33333778381346
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite8/sounds/pop.wav")];

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
      new Trigger(Trigger.BROADCAST, { name: "Clock" }, this.whenIReceiveClock),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Functions" },
        this.whenIReceiveFunctions
      )
    ];
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.aloveLevel > this.stage.vars.reqbetapow - 1) {
      this.stage.vars.betapower += 1;
      this.stage.vars.reqbetapow += 2;
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
    this.visible = false;
  }

  *whenIReceiveBetaPower() {
    this.stage.watchers.betapower.visible = true;
    this.stage.watchers.reqbetapow.visible = true;
    this.visible = true;
    this.stage.watchers.alphapower.visible = false;
    this.stage.watchers.reqalphapow.visible = false;
  }

  *whenIReceiveBattery() {
    this.stage.watchers.betapower.visible = false;
    this.stage.watchers.reqbetapow.visible = false;
    this.visible = false;
  }

  *whenGreenFlagClicked4() {
    this.stage.vars.batteryactive = 0;
  }

  *whenIReceiveGammaPower() {
    this.stage.watchers.betapower.visible = false;
    this.stage.watchers.reqbetapow.visible = false;
    this.stage.watchers.alphapower.visible = false;
    this.stage.watchers.reqalphapow.visible = false;
    this.visible = false;
  }

  *whenIReceiveClock() {
    this.stage.watchers.betapower.visible = false;
    this.stage.watchers.reqbetapow.visible = false;
    this.visible = false;
  }

  *whenIReceiveFunctions() {
    this.stage.watchers.betapower.visible = false;
    this.stage.watchers.reqbetapow.visible = false;
    this.stage.watchers.alphapower.visible = false;
    this.stage.watchers.reqalphapow.visible = false;
    this.visible = false;
  }
}
