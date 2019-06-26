import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game/game.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthenticatedGuard } from './auth/guards/authenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: GameComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
