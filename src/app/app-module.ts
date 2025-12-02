import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './pages/home/home';
import { NavBar } from './sections/nav-bar/nav-bar';
import { ComingSection } from './sections/coming-section/coming-section';
import { SpacesSection } from './sections/spaces-section/spaces-section';
import { SchoolSection } from './sections/school-section/school-section';
import {HugeiconsIconComponent} from '@hugeicons/angular';
import { FooterSection } from './sections/footer-section/footer-section';
import { ExhibitionItem } from './items/exhibition-item/exhibition-item';
import { Exhibitions } from './pages/exhibitions/exhibitions';
import { ExhibitionHeroSection } from './sections/exhibition-hero-section/exhibition-hero-section';
import { HomeHeroSection } from './sections/home-hero-section/home-hero-section';
import { InfoHeroSection } from './sections/info-hero-section/info-hero-section';
import { Info } from './pages/info/info';
import { ExhibitionArchiveItem } from './items/exhibition-archive-item/exhibition-archive-item';

@NgModule({
  declarations: [
    App,
    Home,
    NavBar,
    ComingSection,
    SpacesSection,
    SchoolSection,
    FooterSection,
    ExhibitionItem,
    Exhibitions,
    ExhibitionHeroSection,
    HomeHeroSection,
    InfoHeroSection,
    Info,
    ExhibitionArchiveItem,
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
