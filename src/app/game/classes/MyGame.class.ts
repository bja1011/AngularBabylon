import { MyScene } from './MyScene.class';
import {
  AssetsManager,
  ActionManager,
  Color3,
  CubeTexture,
  DefaultRenderingPipeline,
  DirectionalLight,
  Engine,
  ExecuteCodeAction,
  FreeCamera,
  FollowCamera,
  HemisphericLight,
  Light,
  Mesh,
  MeshBuilder,
  Scene,
  SceneLoader,
  ShadowGenerator,
  SSAO2RenderingPipeline,
  StandardMaterial,
  CannonJSPlugin,
  Texture,
  Vector3,
} from 'babylonjs';
import { clamp } from '../Utils';
import * as cannon from 'cannon';

export class MyGame {

  private scene: MyScene;
  private readonly canvas: HTMLCanvasElement;
  private readonly engine: Engine;
  private camera: FollowCamera;
  private light: Light;

  private player;

  constructor(canvasElement: string) {
    this.canvas = document.getElementById(canvasElement) as HTMLCanvasElement;
    this.engine = new Engine(this.canvas, true);
  }

  createScene(): void {
    this.scene = new MyScene(this.engine);

    this.setCamera();
    this.setLigning();
    this.createObjects();

    this.setPhysics();
  }

  setCamera() {
    this.camera = new FollowCamera('camera1', new Vector3(0, 5, -10), this.scene);
    this.camera.setTarget(Vector3.Zero());
    this.camera.heightOffset = 10;
    this.camera.rotationOffset = 0;
    this.camera.cameraAcceleration = 0.05;
    this.camera.maxCameraSpeed = 20;
    // this.camera.attachControl(this.canvas, false);
  }

  setLigning() {
    this.light = new HemisphericLight('light1', new Vector3(0, 1, 0), this.scene);
  }

  setInput(player) {
    const inputMap = {};
    this.scene.actionManager = new ActionManager(this.scene);
    this.scene.actionManager.registerAction(new ExecuteCodeAction(ActionManager.OnKeyDownTrigger,
      (evt) => {
        inputMap[evt.sourceEvent.key] = evt.sourceEvent.type === 'keydown';
      })
    );
    this.scene.actionManager.registerAction(new ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger,
      (evt) => {
        inputMap[evt.sourceEvent.key] = evt.sourceEvent.type === 'keydown';
      })
    );

    let speed = 0;
    // Game/Render loop
    this.scene.onBeforeRenderObservable.add(() => {
      if ((inputMap as any).w) {
        // player.rotate(BABYLON.Axis.X, -0.02);
        player.translate(BABYLON.Axis.Z, -0.04, BABYLON.Space.WORLD);
      }
      if ((inputMap as any).s) {
        // player.rotate(BABYLON.Axis.X, 0.02);
        player.translate(BABYLON.Axis.Z, 0.04, BABYLON.Space.WORLD);
      }
      if ((inputMap as any).a) {
        // player.rotate(BABYLON.Axis.Y, -0.02);
        player.translate(BABYLON.Axis.X, 0.04, BABYLON.Space.WORLD);
      }
      if ((inputMap as any).d) {
        // player.rotate(BABYLON.Axis.Y, 0.02);
        player.translate(BABYLON.Axis.X, -0.04, BABYLON.Space.WORLD);
      }
      speed = clamp(speed, 0, 1);

    });
  }

  setPhysics() {
    const gravityVector = new Vector3(0, -9.81, 0);
    const physicsPlugin = new CannonJSPlugin(true, 10,cannon);
    this.scene.enablePhysics(gravityVector, physicsPlugin);
  }

  doRender(): void {
    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
    window.addEventListener('resize', () => {
      this.engine.resize();
    });
  }

  private createObjects() {
    this.player = MeshBuilder.CreateBox('box', {width: 1, depth: 1, height: 3}, this.scene as Scene);
    this.player.position.y = 1;

    const ground = MeshBuilder.CreateGround('ground', {width: 60, height: 60, subdivisions: 2}, this.scene as Scene);

    this.setInput(this.player);
    this.camera.lockedTarget = this.player;
  }
}


