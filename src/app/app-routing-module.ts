import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {Home} from './pages/home/home';
import {Exhibitions} from './pages/exhibitions/exhibitions';
import {Info} from './pages/info/info';
import {Spaces} from './pages/spaces/spaces';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: Home },
  { path: 'exhibitions', component: Exhibitions },
  { path: 'spaces', component: Spaces },
  { path: 'info', component: Info },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
