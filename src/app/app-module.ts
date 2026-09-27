import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './pages/home/home';
import { NavBar } from './sections/nav-bar/nav-bar';
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
import { MissionSection } from './sections/mission-section/mission-section';
import { ActivitiesSection } from './sections/activities-section/activities-section';
import { ValuesSection } from './sections/values-section/values-section';
import { PlanYourVisitSection } from './sections/plan-your-visit-section/plan-your-visit-section';
import { Spaces } from './pages/spaces/spaces';
import { SpacesDetailsSection } from './sections/spaces-details-section/spaces-details-section';
import { SpacesHeroSection } from './sections/spaces-hero-section/spaces-hero-section';
import { TypologiesSection } from './sections/typologies-section/typologies-section';
import { TypologyItem } from './items/typology-item/typology-item';
import { ReservationSection } from './sections/reservation-section/reservation-section';
import {ReactiveFormsModule} from '@angular/forms';
import { Schools } from './pages/schools/schools';
import { SchoolsHeroSection } from './sections/schools-hero-section/schools-hero-section';
import { ExperienceSection } from './sections/experience-section/experience-section';
import { SchoolReservationSection } from './sections/school-reservation-section/school-reservation-section';
import { Tickets } from './pages/tickets/tickets';
import { TicketsHeroSection } from './sections/tickets-hero-section/tickets-hero-section';
import { TicketItem } from './items/ticket-item/ticket-item';
import { TicketsTimeSection } from './sections/tickets-time-section/tickets-time-section';
import { Events } from './pages/events/events';
import { PrivateParties } from './pages/private-parties/private-parties';
import { ContentPreviewCard } from './items/content-preview-card/content-preview-card';
import { EventsHeroSection } from './sections/events-hero-section/events-hero-section';
import { PrivatePartiesHeroSection } from './sections/private-parties-hero-section/private-parties-hero-section';

@NgModule({
  declarations: [
    App,
    Home,
    NavBar,
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
    MissionSection,
    ActivitiesSection,
    ValuesSection,
    PlanYourVisitSection,
    Spaces,
    SpacesDetailsSection,
    SpacesHeroSection,
    TypologiesSection,
    TypologyItem,
    ReservationSection,
    Schools,
    SchoolsHeroSection,
    ExperienceSection,
    SchoolReservationSection,
    Tickets,
    TicketsHeroSection,
    TicketItem,
    TicketsTimeSection,
    Events,
    PrivateParties,
    ContentPreviewCard,
    EventsHeroSection,
    PrivatePartiesHeroSection,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HugeiconsIconComponent,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
