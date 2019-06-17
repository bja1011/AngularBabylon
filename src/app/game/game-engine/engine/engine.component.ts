import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.scss']
})
export class EngineComponent implements OnInit {

  engines = engines;
  selectedEngine: engines = engines.phaser;

  constructor() {
  }

  ngOnInit() {
  }
}

enum engines {
  babylon,
  phaser
}
