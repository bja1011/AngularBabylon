import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhaserComponent } from './phaser/phaser.component';

@NgModule({
  declarations: [PhaserComponent],
  imports: [
    CommonModule
  ],
  exports: [PhaserComponent]
})
export class GamePhaserModule {
}
