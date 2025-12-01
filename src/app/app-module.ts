import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './pages/home/home';
import { NavBar } from './components/nav-bar/nav-bar';
import { HeroSection } from './components/hero-section/hero-section';
import { ComingSection } from './components/coming-section/coming-section';
import { SpacesSection } from './components/spaces-section/spaces-section';
import { SchoolSection } from './components/school-section/school-section';
import {HugeiconsIconComponent} from '@hugeicons/angular';
import { FooterSection } from './components/footer-section/footer-section';

@NgModule({
  declarations: [
    App,
    Home,
    NavBar,
    HeroSection,
    ComingSection,
    SpacesSection,
    SchoolSection,
    FooterSection,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HugeiconsIconComponent
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
