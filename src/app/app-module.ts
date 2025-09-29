import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { About } from './pages/about/about';
import { Exhibitions } from './pages/exhibitions/exhibitions';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import {NgOptimizedImage} from '@angular/common';
import { Home } from './pages/home/home';
import { Exhibition } from './components/exhibition/exhibition';
import { Gallery } from './components/gallery/gallery';
import { Card } from './components/card/card';
import { Ticketing } from './pages/ticketing/ticketing';

@NgModule({
  declarations: [
    App,
    About,
    Exhibitions,
    Navbar,
    Footer,
    Home,
    Exhibition,
    Gallery,
    Card,
    Ticketing
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
