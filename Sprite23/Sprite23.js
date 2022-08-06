/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite23 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite23/costumes/costume1.svg", {
        x: 140,
        y: 108.33333778381343
      })
    ];

    this.sounds = [
      new Sound("Cave", "./Sprite23/sounds/Cave.wav"),
      new Sound("Cave2", "./Sprite23/sounds/Cave2.wav"),
      new Sound("Cave3", "./Sprite23/sounds/Cave3.wav"),
      new Sound("Cave4", "./Sprite23/sounds/Cave4.wav"),
      new Sound("Cave5", "./Sprite23/sounds/Cave5.wav"),
      new Sound("Cave6", "./Sprite23/sounds/Cave6.wav"),
      new Sound("Cave7", "./Sprite23/sounds/Cave7.wav"),
      new Sound("Cave8", "./Sprite23/sounds/Cave8.wav"),
      new Sound("Cave9", "./Sprite23/sounds/Cave9.wav"),
      new Sound("Cave10", "./Sprite23/sounds/Cave10.wav"),
      new Sound("Crunch", "./Sprite23/sounds/Crunch.wav")
    ];

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
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      )
    ];
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.t > this.stage.vars.reqfunction - 1) {
      this.stage.vars.functions += 1;
      this.stage.vars.reqfunction =
        this.stage.vars.reqfunction * this.stage.vars.reqfunctionmul;
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
    this.stage.vars.functions = 0;
    this.stage.vars.reqfunction = 100000;
    this.stage.vars.reqfunctionmul = 10;
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

  *whenIReceiveFunctions() {
    this.stage.watchers.alphapower.visible = false;
    this.stage.watchers.reqalphapow.visible = false;
    this.stage.watchers.betapower.visible = false;
    this.stage.watchers.reqbetapow.visible = false;
    this.stage.watchers.gammapower.visible = false;
    this.stage.watchers.reqgammapow.visible = false;
    this.visible = true;
    this.stage.watchers.functions.visible = true;
    this.stage.watchers.reqfunction.visible = true;
  }

  *whenGreenFlagClicked5() {
    while (!(this.stage.vars.t > 97104)) {
      yield;
    }
    yield* this.playSoundUntilDone("Cave");
    yield* this.playSoundUntilDone("Cave2");
    yield* this.playSoundUntilDone("Cave3");
    yield* this.playSoundUntilDone("Cave4");
    yield* this.playSoundUntilDone("Cave5");
    yield* this.playSoundUntilDone("Cave6");
    yield* this.playSoundUntilDone("Cave7");
    yield* this.playSoundUntilDone("Cave8");
    yield* this.playSoundUntilDone("Cave9");
    yield* this.playSoundUntilDone("Cave10");
  }

  *whenKeySpacePressed() {
    yield* this.startSound("Crunch");
  }
}
