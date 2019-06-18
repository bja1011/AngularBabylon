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
  VirtualJoystick,
  Space,
  SSAO2RenderingPipeline,
  StandardMaterial,
  Texture,
  Vector3,
} from 'babylonjs';
import * as cannon from 'cannon';
import { clamp } from '../../../Utils';

export class MyScene extends Scene {

  constructor(props) {
    super(props);
  }
}
