import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewFirstPipePipe } from './new-first-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewFirstPipePipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
