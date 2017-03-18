import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InitFormComponent } from './init-form/init-form.component';
import { BannerComponent } from './banner/banner.component';
import { PhallusLengthGameComponent } from './phallus-length-game/phallus-length-game.component';
import { DropdownModule } from 'ng2-bootstrap'

import { RouterModule, Routes } from '@angular/router';
import { DiceGameComponent } from './dice-game/dice-game.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: 'dick-length', component: PhallusLengthGameComponent },
  { path: 'Game-choice', component: InitFormComponent },
  { path: 'dice', component: DiceGameComponent },
  { path: '',   redirectTo: '/Game-choice', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    InitFormComponent,
    BannerComponent,
    PhallusLengthGameComponent,
    DiceGameComponent,
    FooterComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    DropdownModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
