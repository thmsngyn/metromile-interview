import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {routing, RootComponent} from './routes';

import {AppComponent} from './containers/App';
import {CoverageLimitsComponent} from './components/coverage-limits/coverage-limits.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    RootComponent,
    AppComponent,
    CoverageLimitsComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
