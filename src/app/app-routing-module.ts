import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {About} from './pages/about/about';
import {Exhibitions} from './pages/exhibitions/exhibitions';
import {Home} from './pages/home/home';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: Home },
  { path: 'about',  component: About },
  { path: 'exhibitions',  component: Exhibitions },
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
