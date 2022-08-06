/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [
      new Sound("pop", "./Stage/sounds/pop.wav"),
      new Sound("Video Game 1", "./Stage/sounds/Video Game 1.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Alpha-Power" },
        this.whenIReceiveAlphaPower
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Goal List" },
        this.whenIReceiveGoalList
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7),
      new Trigger(Trigger.KEY_PRESSED, { key: "g" }, this.whenKeyGPressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked8),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked9),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked10),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked11)
    ];

    this.vars.myVariable = 0;
    this.vars.n = 815566.8000000059;
    this.vars.t = 409.7000000000255;
    this.vars.nShow = "n(410) = 815567";
    this.vars.reqalphapow = 300;
    this.vars.alphapower = 1;
    this.vars.reqalphapowermul = 3;
    this.vars.goals2 = 0;
    this.vars.aloveLevel = 0;
    this.vars.aloveReq = 7500000;
    this.vars.score = 2.955729769127924;
    this.vars.scorecom = 0;
    this.vars.scoreShow = "Score:3 / 0";
    this.vars.betapower = 0;
    this.vars.reqbetapow = 3;
    this.vars.reqbetapowmul = 0;
    this.vars.upgraderbetareq1 = 2;
    this.vars.upgradebetaeffect1 = 1;
    this.vars.upgraderbetaeffect2 = 0;
    this.vars.upgraderbetareq2 = 3;
    this.vars.batteryactive = 0;
    this.vars.batteryUsed = 0;
    this.vars.batteryUsedLimit = 4;
    this.vars.battery1effect = 350;
    this.vars.battery1active = 1;
    this.vars.gammapower = 0;
    this.vars.reqgammapow = 25;
    this.vars.upgradergammareq1 = 2;
    this.vars.upgradergammaeffect1 = 1;
    this.vars.upgradergammareq2 = 12;
    this.vars.upgradergammaeffect2 = 1;
    this.vars.seconds = 6274.7429001260425;
    this.vars.days = 75;
    this.vars.daysEffect = 8.717797887081348;
    this.vars.clockactive = 1;
    this.vars.daysStart = 0;
    this.vars.secondShow = 2.5;
    this.vars.functions = 0;
    this.vars.reqfunction = 100000;
    this.vars.reqfunctionmul = 10;
    this.vars.goals = [
      "Open this get g this generate for Close goals.",
      "You Are Completed 0 Goals.",
      "Your Are Played! (Reach 2 alpha-power Reward:Alpha Req Mulit Descreasing by 1.) (Completed)",
      "What when! (Reach 6 alpha-power Reward:Alpha Req Mulit Descreasing by 0.25.) (Completed)",
      "Ten A-POW (Reach 10 alpha-power) (Completed)",
      "Cool (Reach 13 alpha-power) (Completed)",
      "Alove Start (Reach 1 alove level) (Completed)",
      "Alove 2 (Reach 2 alove level) (Completed)",
      0,
      0
    ];

    this.watchers.nShow = new Watcher({
      label: "n show",
      style: "large",
      visible: true,
      value: () => this.vars.nShow,
      x: 240,
      y: -156
    });
    this.watchers.reqalphapow = new Watcher({
      label: "reqAlphaPow",
      style: "large",
      visible: false,
      value: () => this.vars.reqalphapow,
      x: 465,
      y: 80
    });
    this.watchers.alphapower = new Watcher({
      label: "AlphaPower",
      style: "large",
      visible: false,
      value: () => this.vars.alphapower,
      x: 249,
      y: 126
    });
    this.watchers.aloveLevel = new Watcher({
      label: "alove level",
      style: "large",
      visible: false,
      value: () => this.vars.aloveLevel,
      x: 560,
      y: 107
    });
    this.watchers.scoreShow = new Watcher({
      label: "score show",
      style: "large",
      visible: true,
      value: () => this.vars.scoreShow,
      x: 240,
      y: -131
    });
    this.watchers.betapower = new Watcher({
      label: "BetaPower",
      style: "large",
      visible: false,
      value: () => this.vars.betapower,
      x: 247,
      y: 130
    });
    this.watchers.reqbetapow = new Watcher({
      label: "reqBetaPow",
      style: "large",
      visible: false,
      value: () => this.vars.reqbetapow,
      x: 380,
      y: 84
    });
    this.watchers.upgraderbetareq1 = new Watcher({
      label: "upgraderBetaReq1",
      style: "large",
      visible: false,
      value: () => this.vars.upgraderbetareq1,
      x: 284,
      y: 5
    });
    this.watchers.upgraderbetareq2 = new Watcher({
      label: "upgraderBetaReq2",
      style: "large",
      visible: false,
      value: () => this.vars.upgraderbetareq2,
      x: 413,
      y: -1
    });
    this.watchers.batteryUsed = new Watcher({
      label: "Battery Used",
      style: "large",
      visible: false,
      value: () => this.vars.batteryUsed,
      x: 522,
      y: 90
    });
    this.watchers.batteryUsedLimit = new Watcher({
      label: "Battery Used Limit",
      style: "large",
      visible: false,
      value: () => this.vars.batteryUsedLimit,
      x: 593,
      y: 88
    });
    this.watchers.gammapower = new Watcher({
      label: "GammaPower",
      style: "large",
      visible: false,
      value: () => this.vars.gammapower,
      x: 245,
      y: 133
    });
    this.watchers.reqgammapow = new Watcher({
      label: "reqGammaPow",
      style: "large",
      visible: false,
      value: () => this.vars.reqgammapow,
      x: 435,
      y: 84
    });
    this.watchers.upgradergammareq1 = new Watcher({
      label: "upgraderGammaReq1",
      style: "large",
      visible: false,
      value: () => this.vars.upgradergammareq1,
      x: 292,
      y: 6
    });
    this.watchers.upgradergammareq2 = new Watcher({
      label: "upgraderGammaReq2",
      style: "large",
      visible: false,
      value: () => this.vars.upgradergammareq2,
      x: 427,
      y: 7
    });
    this.watchers.days = new Watcher({
      label: "days",
      style: "large",
      visible: false,
      value: () => this.vars.days,
      x: 369,
      y: 90
    });
    this.watchers.daysEffect = new Watcher({
      label: "Days Effect",
      style: "large",
      visible: false,
      value: () => this.vars.daysEffect,
      x: 473,
      y: 56
    });
    this.watchers.secondShow = new Watcher({
      label: "second show",
      style: "large",
      visible: false,
      value: () => this.vars.secondShow,
      x: 427,
      y: -40
    });
    this.watchers.functions = new Watcher({
      label: "Functions",
      style: "large",
      visible: true,
      value: () => this.vars.functions,
      x: 246,
      y: 127
    });
    this.watchers.reqfunction = new Watcher({
      label: "reqFunction",
      style: "large",
      visible: true,
      value: () => this.vars.reqfunction,
      x: 450,
      y: 70
    });
    this.watchers.goals = new Watcher({
      label: "Goals",
      style: "normal",
      visible: false,
      value: () => this.vars.goals,
      x: 245,
      y: 175,
      width: 454,
      height: 356
    });
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.vars.nShow =
        "" +
        "n(" +
        ("" +
          Math.round(this.vars.t) +
          ("" + ") = " + Math.round(this.vars.n)));
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.vars.t = 0;
    this.vars.n = 0;
    this.watchers.nShow.visible = false;
  }

  *whenGreenFlagClicked3() {
    while (true) {
      yield* this.wait(0.1);
      this.vars.t +=
        0.1 * this.vars.upgradergammaeffect2 * Math.E ** this.vars.functions;
      if (this.vars.alphapower > 4) {
        this.vars.n +=
          this.vars.t *
          Math.E **
            (this.vars.betapower +
              this.vars.gammapower * 1.8 +
              (this.vars.upgraderbetaeffect2 +
                Math.cos(this.degToRad(this.vars.daysEffect)) +
                this.vars.functions)) *
          this.vars.battery1effect *
          (this.vars.alphapower *
            this.vars.upgradebetaeffect1 *
            this.vars.upgradergammaeffect1);
      } else {
        this.vars.n += this.vars.t;
      }
      yield;
    }
  }

  *whenIReceiveAlphaPower() {
    this.watchers.nShow.visible = true;
  }

  *whenGreenFlagClicked4() {
    this.vars.goals = [];
    this.vars.goals.push("Open this get g this generate for Close goals.");
    for (let i = 0; i < 9; i++) {
      this.vars.goals.push("");
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    while (true) {
      this.vars.goals.splice(
        2 - 1,
        1,
        "" + "You Are Completed " + ("" + this.vars.goals2 + " Goals.")
      );
      if (this.vars.alphapower > 1) {
        this.vars.goals.splice(
          3 - 1,
          1,
          "Your Are Played! (Reach 2 alpha-power Reward:Alpha Req Mulit Descreasing by 1.)"
        );
      } else {
        this.vars.goals.splice(
          3 - 1,
          1,
          "Your Are Played! (Reach 2 alpha-power Reward:Alpha Req Mulit Descreasing by 1.) (Completed)"
        );
      }
      if (this.vars.alphapower > 5) {
        this.vars.goals.splice(
          4 - 1,
          1,
          "What when! (Reach 6 alpha-power Reward:Alpha Req Mulit Descreasing by 0.25.)"
        );
      } else {
        this.vars.goals.splice(
          4 - 1,
          1,
          "What when! (Reach 6 alpha-power Reward:Alpha Req Mulit Descreasing by 0.25.) (Completed)"
        );
      }
      if (this.vars.alphapower > 9) {
        this.vars.goals.splice(5 - 1, 1, "Ten A-POW (Reach 10 alpha-power)");
      } else {
        this.vars.goals.splice(
          5 - 1,
          1,
          "Ten A-POW (Reach 10 alpha-power) (Completed)"
        );
      }
      if (this.vars.alphapower > 12) {
        this.vars.goals.splice(6 - 1, 1, "Cool (Reach 13 alpha-power)");
      } else {
        this.vars.goals.splice(
          6 - 1,
          1,
          "Cool (Reach 13 alpha-power) (Completed)"
        );
      }
      if (this.vars.aloveLevel > 0) {
        this.vars.goals.splice(7 - 1, 1, "Alove Start (Reach 1 alove level)");
      } else {
        this.vars.goals.splice(
          7 - 1,
          1,
          "Alove Start (Reach 1 alove level) (Completed)"
        );
      }
      if (this.vars.aloveLevel > 1) {
        this.vars.goals.splice(8 - 1, 1, "Alove 2 (Reach 2 alove level)");
      } else {
        this.vars.goals.splice(
          8 - 1,
          1,
          "Alove 2 (Reach 2 alove level) (Completed)"
        );
      }
      yield;
    }
  }

  *whenGreenFlagClicked6() {
    while (true) {
      if (this.vars.alphapower > 1) {
        if (this.vars.alphapower > 5) {
          if (this.vars.alphapower > 9) {
            if (this.vars.alphapower > 12) {
              if (this.vars.aloveLevel > 0) {
                if (this.vars.aloveLevel > 1) {
                  this.vars.goals2 = 6;
                  this.vars.reqalphapowermul = 1.55;
                } else {
                  this.vars.goals2 = 5;
                  this.vars.reqalphapowermul = 1.55;
                }
              } else {
                this.vars.goals2 = 4;
                this.vars.reqalphapowermul = 1.75;
              }
            } else {
              this.vars.goals2 = 3;
              this.vars.reqalphapowermul = 1.75;
            }
          } else {
            this.vars.goals2 = 2;
            this.vars.reqalphapowermul = 1.75;
          }
        } else {
          this.vars.goals2 = 1;
          this.vars.reqalphapowermul = 2;
        }
      } else {
        this.vars.goals2 = 0;
        this.vars.reqalphapowermul = 3;
      }
      yield;
    }
  }

  *whenIReceiveGoalList() {
    this.watchers.goals.visible = true;
  }

  *whenGreenFlagClicked7() {
    this.watchers.goals.visible = false;
  }

  *whenKeyGPressed() {
    this.watchers.goals.visible = false;
  }

  *whenGreenFlagClicked8() {
    while (true) {
      yield* this.playSoundUntilDone("Video Game 1");
      yield;
    }
  }

  *whenGreenFlagClicked9() {
    while (true) {
      if (this.vars.n > this.vars.aloveReq) {
        for (let i = 0; i < 2; i++) {
          this.vars.aloveReq += this.vars.aloveReq;
          yield;
        }
        this.vars.aloveLevel += 1;
      }
      yield;
    }
  }

  *whenGreenFlagClicked10() {
    while (true) {
      this.vars.score = Math.log10(this.vars.n) / 2;
      this.vars.scoreShow =
        "" +
        "Score:" +
        ("" +
          Math.round(this.vars.score) +
          ("" + " / " + Math.round(this.vars.scorecom)));
      yield;
    }
  }

  *whenGreenFlagClicked11() {
    this.vars.aloveLevel = 0;
    this.vars.reqbetapow = 3;
  }
}
