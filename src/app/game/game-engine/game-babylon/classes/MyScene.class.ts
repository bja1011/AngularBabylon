import {
  ActionManager,
  AssetsManager,
  Axis,
  CannonJSPlugin,
  Color3,
  CubeTexture,
  DefaultRenderingPipeline,
  DirectionalLight,
  Engine,
  ExecuteCodeAction,
  FollowCamera,
  FreeCamera,
  HemisphericLight,
  Light,
  Mesh,
  MeshBuilder,
  Scene,
  SceneLoader,
  ShadowGenerator,
  Space,
  SSAO2RenderingPipeline,
  StandardMaterial,
  Texture,
  Vector3,
} from 'babylonjs';
import * as cannon from 'cannon';
import { clamp } from '../../../Utils';

export class MyScene extends Scene {

  private camera: FollowCamera;
  private light: Light;

  private player: Mesh;

  constructor(props) {
    super(props);

    this.setCamera();
    this.setLigning();
    this.createObjects();

    this.setPhysics();
  }

  setCamera() {
    this.camera = new FollowCamera('camera1', new Vector3(0, 5, 10), this);
    this.camera.heightOffset = 10;
    this.camera.rotationOffset = 0;
    this.camera.cameraAcceleration = 0.005;
    this.camera.maxCameraSpeed = 10;

  //   this.camera.mode = FollowCamera.ORTHOGRAPHIC_CAMERA;
  //   this.camera.orthoTop = 15;
  //   this.camera.orthoBottom = -15;
  //   this.camera.orthoLeft = -15;
  //   this.camera.orthoRight = 15;
  }

  setLigning() {
    this.light = new HemisphericLight('light1', new Vector3(0, 1, 0), this);
  }

  setInput(player: Mesh) {
    const inputMap = {};
    this.actionManager = new ActionManager(this);
    this.actionManager.registerAction(new ExecuteCodeAction(ActionManager.OnKeyDownTrigger,
      (evt) => {
        inputMap[evt.sourceEvent.key] = evt.sourceEvent.type === 'keydown';
      })
    );
    this.actionManager.registerAction(new ExecuteCodeAction(ActionManager.OnKeyUpTrigger,
      (evt) => {
        inputMap[evt.sourceEvent.key] = evt.sourceEvent.type === 'keydown';
      })
    );

    let speed = 0;
    // Game/Render loop
    this.onBeforeRenderObservable.add(() => {
      if ((inputMap as any).w) {
        player.translate(Axis.Z, -0.04, Space.WORLD);
      }
      if ((inputMap as any).s) {
        player.translate(Axis.Z, 0.04, Space.WORLD);
      }
      if ((inputMap as any).a) {
        player.translate(Axis.X, 0.04, Space.WORLD);
      }
      if ((inputMap as any).d) {
        player.translate(Axis.X, -0.04, Space.WORLD);
      }
      speed = clamp(speed, 0, 1);
    });
  }

  setPhysics() {
    const gravityVector = new Vector3(0, -9.81, 0);
    const physicsPlugin = new CannonJSPlugin(true, 10, cannon);
    this.enablePhysics(gravityVector, physicsPlugin);
  }

  private createObjects() {
    this.player = MeshBuilder.CreateBox('box', {width: 1, depth: 1, height: 3}, this);
    this.player.position.y = 1;

    const ground = MeshBuilder.CreateGround('ground', {width: 60, height: 60, subdivisions: 2}, this);

    this.setInput(this.player);
    this.camera.lockedTarget = this.player;

    // Ground
    ground.material = new StandardMaterial('ground', this);
    ground.material['diffuseTexture'] = new Texture('textures/amiga.jpg', this);
    ground.material['diffuseTexture'].uScale = 3;
    ground.material['diffuseTexture'].vScale = 3;
  }

}
