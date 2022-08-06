/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite21 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite21/costumes/costume1.svg", {
        x: 216.46096096096093,
        y: 42.03654321893916
      }),
      new Costume("costume2", "./Sprite21/costumes/costume2.svg", {
        x: 216.46096096096093,
        y: 42.03654321893916
      }),
      new Costume("costume3", "./Sprite21/costumes/costume3.svg", {
        x: 216.46096096096093,
        y: 42.03654321893916
      }),
      new Costume("costume4", "./Sprite21/costumes/costume4.svg", {
        x: 216.46096096096093,
        y: 42.03654321893916
      }),
      new Costume("costume5", "./Sprite21/costumes/costume5.svg", {
        x: 216.46096096096093,
        y: 42.03654321893916
      }),
      new Costume("costume6", "./Sprite21/costumes/costume6.svg", {
        x: 216.46096096096093,
        y: 42.03654321893916
      }),
      new Costume("costume7", "./Sprite21/costumes/costume7.svg", {
        x: 216.46096096096093,
        y: 42.03654321893916
      }),
      new Costume("costume8", "./Sprite21/costumes/costume8.svg", {
        x: 216.46096096096093,
        y: 42.03654321893916
      }),
      new Costume("costume9", "./Sprite21/costumes/costume9.svg", {
        x: 216.46096096096093,
        y: 42.03654321893916
      }),
      new Costume("costume10", "./Sprite21/costumes/costume10.svg", {
        x: 216.46096096096093,
        y: 42.03654321893916
      }),
      new Costume("costume11", "./Sprite21/costumes/costume11.svg", {
        x: 216.46096096096093,
        y: 42.03654321893916
      }),
      new Costume("costume12", "./Sprite21/costumes/costume12.svg", {
        x: 216.46096096096093,
        y: 42.03654321893916
      }),
      new Costume("costume13", "./Sprite21/costumes/costume13.svg", {
        x: 216.46096096096093,
        y: 42.03654321893916
      }),
      new Costume("costume14", "./Sprite21/costumes/costume14.svg", {
        x: 216.46096096096093,
        y: 42.03654321893916
      }),
      new Costume("costume15", "./Sprite21/costumes/costume15.svg", {
        x: 216.46096096096093,
        y: 42.03654321893916
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite21/sounds/pop.wav")];

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
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Functions" },
        this.whenIReceiveFunctions
      )
    ];
  }

  *whenIReceiveAlove() {
    this.visible = false;
  }

  *whenIReceiveAlphaPower() {
    this.visible = false;
  }

  *whenIReceiveBattery() {
    this.visible = false;
  }

  *whenIReceiveBetaPower() {
    this.visible = false;
  }

  *whenIReceiveGammaPower() {
    this.visible = false;
  }

  *whenIReceiveClock() {
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.stage.vars.clockactive == 1) {
        if (this.stage.vars.daysStart == 1) {
          if (this.stage.vars.seconds > 10 ** -21) {
            this.costume = "costume1";
          }
          if (this.stage.vars.seconds > 10 ** -15) {
            this.costume = "costume2";
          }
          if (this.stage.vars.seconds > 10 ** -3) {
            this.costume = "costume3";
          }
          if (this.stage.vars.seconds > 10 ** -2) {
            this.costume = "costume4";
          }
          if (this.stage.vars.seconds > 10 ** -1) {
            this.costume = "costume5";
          }
          if (this.stage.vars.seconds > 10 ** 0) {
            this.costume = "costume6";
          }
          if (this.stage.vars.seconds > 10 ** 1) {
            this.costume = "costume7";
          }
          if (this.stage.vars.seconds > 60) {
            this.costume = "costume8";
          }
          if (this.stage.vars.seconds > 60 * 10 ** 1) {
            this.costume = "costume9";
          }
          if (this.stage.vars.seconds > 3600 * 10 ** 0) {
            this.costume = "costume10";
          }
          if (this.stage.vars.seconds > 3600 * 10 ** 1) {
            this.costume = "costume11";
          }
          if (this.stage.vars.days > 0) {
            this.costume = "costume12";
          }
          if (this.stage.vars.days > 6) {
            this.costume = "costume13";
          }
          if (this.stage.vars.days > 29) {
            this.costume = "costume14";
          }
          if (this.stage.vars.days > 365) {
            this.costume = "costume15";
          }
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.clockactive == 1) {
        if (this.stage.vars.daysStart == 1) {
          if (this.stage.vars.seconds > 10 ** -21) {
            this.stage.vars.secondShow = this.stage.vars.seconds * 10 ** -21;
          }
          if (this.stage.vars.seconds > 10 ** -15) {
            this.stage.vars.secondShow = this.stage.vars.seconds * 10 ** -15;
          }
          if (this.stage.vars.seconds > 10 ** -3) {
            this.stage.vars.secondShow = this.stage.vars.seconds * 10 ** -3;
          }
          if (this.stage.vars.seconds > 10 ** -2) {
            this.stage.vars.secondShow = this.stage.vars.seconds * 10 ** -2;
          }
          if (this.stage.vars.seconds > 10 ** -1) {
            this.stage.vars.secondShow = this.stage.vars.seconds * 10 ** -1;
          }
          if (this.stage.vars.seconds > 10 ** 0) {
            this.stage.vars.secondShow = this.stage.vars.seconds * 10 ** 0;
          }
          if (this.stage.vars.seconds > 10 ** 1) {
            this.stage.vars.secondShow = this.stage.vars.seconds / 10 ** 1;
          }
          if (this.stage.vars.seconds > 60) {
            this.stage.vars.secondShow = this.stage.vars.seconds / 60;
          }
          if (this.stage.vars.seconds > 60 * 10 ** 1) {
            this.stage.vars.secondShow = this.stage.vars.seconds / 600;
          }
          if (this.stage.vars.seconds > 3600 * 10 ** 0) {
            this.stage.vars.secondShow = this.stage.vars.seconds / 3600;
          }
          if (this.stage.vars.seconds > 3600 * 10 ** 1) {
            this.stage.vars.secondShow = this.stage.vars.seconds / 86400;
          }
          if (this.stage.vars.days > 0) {
            this.stage.vars.secondShow = this.stage.vars.days / 1;
          }
          if (this.stage.vars.days > 6) {
            this.stage.vars.secondShow = this.stage.vars.days / 7;
          }
          if (this.stage.vars.days > 29) {
            this.stage.vars.secondShow = this.stage.vars.days / 30;
          }
          if (this.stage.vars.days > 365) {
            this.stage.vars.secondShow = this.stage.vars.days / 365;
          }
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.stage.vars.daysStart == 1) {
        this.stage.vars.seconds += 36 * this.stage.vars.daysEffect;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.stage.vars.daysStart == 1) {
        this.stage.vars.daysEffect = Math.sqrt(this.stage.vars.days + 1);
      }
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    while (true) {
      if (this.stage.vars.daysStart == 1) {
        if (this.stage.vars.seconds > 86400 - 1) {
          this.stage.vars.seconds = 0;
          this.stage.vars.days += 1;
          this.broadcast("Get Day");
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked6() {
    this.visible = false;
  }

  *whenIReceiveFunctions() {
    this.visible = false;
  }
}
