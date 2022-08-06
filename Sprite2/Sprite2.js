/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 140,
        y: 108.33333778381348
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Alpha-Power" },
        this.whenIReceiveAlphaPower
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Alpha-Power" },
        this.whenIReceiveAlphaPower2
      ),
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
    if (this.stage.vars.n > this.stage.vars.reqalphapow) {
      this.stage.vars.alphapower += 1;
      this.stage.vars.reqalphapow =
        this.stage.vars.reqalphapow * this.stage.vars.reqalphapowermul;
    }
  }

  *whenIReceiveAlphaPower() {
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.stage.watchers.reqalphapow.visible = false;
    this.stage.vars.reqalphapow = 100;
  }

  *whenIReceiveAlphaPower2() {
    this.stage.watchers.alphapower.visible = true;
    this.stage.watchers.reqalphapow.visible = true;
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.alphapower = 0;
  }

  *whenIReceiveAlove() {
    this.stage.watchers.alphapower.visible = false;
    this.stage.watchers.reqalphapow.visible = false;
    this.visible = false;
  }

  *whenIReceiveBetaPower() {
    this.stage.watchers.betapower.visible = false;
    this.stage.watchers.reqbetapow.visible = false;
    this.visible = false;
  }

  *whenIReceiveBattery() {
    this.stage.watchers.betapower.visible = false;
    this.stage.watchers.reqbetapow.visible = false;
    this.visible = false;
    this.stage.watchers.alphapower.visible = false;
    this.stage.watchers.reqalphapow.visible = false;
  }

  *whenIReceiveGammaPower() {
    this.stage.watchers.betapower.visible = false;
    this.stage.watchers.reqbetapow.visible = false;
    this.visible = false;
    this.stage.watchers.alphapower.visible = false;
    this.stage.watchers.reqalphapow.visible = false;
  }

  *whenIReceiveClock() {
    this.stage.watchers.alphapower.visible = false;
    this.stage.watchers.reqalphapow.visible = false;
    this.visible = false;
  }

  *whenIReceiveFunctions() {
    this.stage.watchers.alphapower.visible = false;
    this.stage.watchers.reqalphapow.visible = false;
    this.visible = false;
  }
}
