import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { StamComponent } from './components/stam/stam.component';
import { StringSelectorComponent } from './components/string-selector/string-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    StamComponent,
    StringSelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
