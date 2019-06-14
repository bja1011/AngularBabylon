import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainUiComponent } from './components/main-ui/main-ui.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [MainUiComponent],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    MainUiComponent,
  ]
})
export class GameUiModule {
}
