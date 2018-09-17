import { CoverageLimitsService } from './shared/services/coverage-limits/coverage-limits.service';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {routing, RootComponent} from './routes';

import {AppComponent} from './containers/App';
import {CoverageLimitsComponent} from './components/coverage-limits/coverage-limits.component';
import { CoverageChangesComponent } from './components/coverage-changes/coverage-changes.component';


@NgModule({
  providers: [
    CoverageLimitsService
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    RootComponent,
    AppComponent,
    CoverageLimitsComponent,
    CoverageChangesComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
