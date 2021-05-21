import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents:[PopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
