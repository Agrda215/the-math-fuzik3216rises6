/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite27 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("gobo-a", "./Sprite27/costumes/gobo-a.svg", { x: 47, y: 55 }),
      new Costume("gobo-b", "./Sprite27/costumes/gobo-b.svg", { x: 47, y: 55 }),
      new Costume("gobo-c", "./Sprite27/costumes/gobo-c.svg", { x: 47, y: 55 })
    ];

    this.sounds = [new Sound("pop", "./Sprite27/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.effects.color += 25;
  }
}
