import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './containers/App';
import { CoverageChangesComponent } from './components/coverage-changes/coverage-changes.component';

@Component({
  selector: 'fountain-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: AppComponent
  }
];

export const routing = RouterModule.forRoot(routes);
