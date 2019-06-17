import { MyScene } from './MyScene.class';
import {
  Engine,
} from 'babylonjs';

export class MyGame {

  private readonly canvas: HTMLCanvasElement;
  private readonly engine: Engine;
  private scene: MyScene;

  constructor(canvasElement: string) {
    this.canvas = document.getElementById(canvasElement) as HTMLCanvasElement;
    console.log(this.canvas);
    this.engine = new Engine(this.canvas, true);
  }

  createScene(): void {
    this.scene = new MyScene(this.engine);
  }

  doRender(): void {
    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
    window.addEventListener('resize', () => {
      this.engine.resize();
    });
  }
}
