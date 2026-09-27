import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {Home} from './pages/home/home';
import {Exhibitions} from './pages/exhibitions/exhibitions';
import {Spaces} from './pages/spaces/spaces';
import {Schools} from './pages/schools/schools';
import {Tickets} from './pages/tickets/tickets';
import {Events} from './pages/events/events';
import {PrivateParties} from './pages/private-parties/private-parties';

const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'mostre', component: Exhibitions },
  { path: 'eventi', component: Events },
  { path: 'scuole', component: Schools },
  { path: 'spazi', component: Spaces },
  { path: 'feste-private', component: PrivateParties },
  { path: 'tickets', component: Tickets },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'exhibitions', redirectTo: 'mostre', pathMatch: 'full' },
  { path: 'spaces', redirectTo: 'spazi', pathMatch: 'full' },
  { path: 'schools', redirectTo: 'scuole', pathMatch: 'full' },
  { path: 'info', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
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
