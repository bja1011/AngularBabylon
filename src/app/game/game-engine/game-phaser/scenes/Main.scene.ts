import { MyScene } from '../classes/MyScene.class';

export class MainScene extends MyScene {
  constructor(props) {
    super(props);

  }

  preload() {
    console.log('preload ');
  }

}
