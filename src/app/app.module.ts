import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
import { DrawCanvasComponent } from './components/draw-canvas/draw-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    NumbersOnlyDirective,
    DrawCanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
