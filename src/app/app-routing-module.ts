import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {Home} from './pages/home/home';
import {Exhibitions} from './pages/exhibitions/exhibitions';
import {Info} from './pages/info/info';
import {Spaces} from './pages/spaces/spaces';
import {Schools} from './pages/schools/schools';
import {Tickets} from './pages/tickets/tickets';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: Home },
  { path: 'exhibitions', component: Exhibitions },
  { path: 'spaces', component: Spaces },
  { path: 'schools', component: Schools },
  { path: 'info', component: Info },
  { path: 'tickets', component: Tickets },
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
