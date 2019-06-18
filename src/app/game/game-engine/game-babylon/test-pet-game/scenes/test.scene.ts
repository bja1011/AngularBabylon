import { MyScene } from '../../classes/MyScene.class';
import * as B from 'babylonjs';
import cannon from 'cannon';
import { GameService } from '../../../../services/game.service';

export class TestScene extends MyScene {
  private camera: B.FollowCamera;
  private light: B.Light;

  private player: B.Mesh;

  constructor(props, gameService: GameService) {
    super(props, gameService);

    this.setCamera();
    this.setLigning();
    this.createObjects();

    this.setPhysics();
  }

  setCamera() {
    this.camera = new B.FollowCamera('camera1', new B.Vector3(0, 5, 10), this);
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
    this.light = new B.HemisphericLight('light1', new B.Vector3(0, 1, 0), this);
  }

  setInput(player: B.Mesh) {
    const inputMap = {};
    this.actionManager = new B.ActionManager(this);
    this.actionManager.registerAction(new B.ExecuteCodeAction(B.ActionManager.OnKeyDownTrigger,
      (evt) => {
        inputMap[evt.sourceEvent.key] = evt.sourceEvent.type === 'keydown';
      })
    );
    this.actionManager.registerAction(new B.ExecuteCodeAction(B.ActionManager.OnKeyUpTrigger,
      (evt) => {
        inputMap[evt.sourceEvent.key] = evt.sourceEvent.type === 'keydown';
      })
    );

    let speed = 0;

    const leftJoystick = new B.VirtualJoystick(true);
    B.VirtualJoystick.Canvas.style.zIndex = '1';

    this.onDisposeObservable.add(() => {
      B.VirtualJoystick.Canvas.style.zIndex = '-1';
    });

    // Game/Render loop
    this.onBeforeRenderObservable.add(() => {
      if ((inputMap as any).w) {
        player.translate(B.Axis.Z, -0.04, B.Space.WORLD);
      }
      if ((inputMap as any).s) {
        player.translate(B.Axis.Z, 0.04, B.Space.WORLD);
      }
      if ((inputMap as any).a) {
        player.translate(B.Axis.X, 0.04, B.Space.WORLD);
      }
      if ((inputMap as any).d) {
        player.translate(B.Axis.X, -0.04, B.Space.WORLD);
      }


      if (leftJoystick.pressed) {
        player.translate(B.Axis.Z, leftJoystick.deltaPosition.y * -0.1, B.Space.WORLD);
        player.translate(B.Axis.X, leftJoystick.deltaPosition.x * -0.1, B.Space.WORLD);
        // moveX = leftJoystick.deltaPosition.x * (engine.getDeltaTime()/1000) * movespeed;
        // moveZ = leftJoystick.deltaPosition.y * (engine.getDeltaTime()/1000) * movespeed;
        // sphere.position.x+=moveX
        // sphere.position.z+=moveZ
      }


    });


  }

  setPhysics() {
    const gravityVector = new B.Vector3(0, -9.81, 0);
    const physicsPlugin = new B.CannonJSPlugin(true, 10, cannon);
    this.enablePhysics(gravityVector, physicsPlugin);
  }

  private createObjects() {
    this.player = B.MeshBuilder.CreateBox('box', {width: 1, depth: 1, height: 3}, this);
    this.player.position.y = 1;

    const ground = B.MeshBuilder.CreateGround('ground', {width: 60, height: 60, subdivisions: 2}, this);

    this.setInput(this.player);
    this.camera.lockedTarget = this.player;

    // Ground
    ground.material = new B.StandardMaterial('ground', this);
    ground.material['diffuseTexture'] = new B.Texture('textures/amiga.jpg', this);
    ground.material['diffuseTexture'].uScale = 3;
    ground.material['diffuseTexture'].vScale = 3;
  }

}
