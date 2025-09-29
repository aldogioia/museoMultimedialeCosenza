import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {About} from './pages/about/about';
import {Exhibitions} from './pages/exhibitions/exhibitions';
import {Home} from './pages/home/home';
import { Exhibition } from './components/exhibition/exhibition';
import {Ticketing} from './pages/ticketing/ticketing';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: Home },
  { path: 'about',  component: About },
  { path: 'exhibitions',  component: Exhibitions },
  { path: 'exhibition/:image', component: Exhibition },
  { path: 'ticketing', component: Ticketing }
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
