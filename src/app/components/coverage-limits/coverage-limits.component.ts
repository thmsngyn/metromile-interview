import { Vehicle } from './../../shared/services/vehicles/vehicles.model';
import {Component, Input, Output, EventEmitter, ViewEncapsulation, OnInit} from '@angular/core';
import { CoverageLimit, CoverageOption } from '../../shared/services/coverage-limits/coverage-limits.model';

@Component({
  selector: 'coverage-limits',
  template: require('./coverage-limits.component.html'),
  styleUrls: ['app/components/coverage-limits/coverage-limits.component.css']
})
export class CoverageLimitsComponent implements OnInit {
  vehicle: Vehicle = null;
  coverageLimits: CoverageLimit[] = [];

  ngOnInit() {
    this.vehicle = require('../../shared/services/vehicles/vehicles.json');

    var coveragesJson = require('../../shared/services/coverage-limits/coverages.json');
    for (let coverage of coveragesJson.coverageOptions) {
      this.coverageLimits.push(
        new CoverageLimit(coverage)
      )
    }
  }
  // @Input() todo: any;
  // @Output() onDestroy: EventEmitter<any> = new EventEmitter(false);
  // @Output() onSave: EventEmitter<any> = new EventEmitter(false);
  // @Output() onChange: EventEmitter<any> = new EventEmitter(false);
  // editing: boolean = false;
  //
  // handleChange() {
  //   this.onChange.emit(this.todo.id);
  // }
  //
  // handleDoubleClick() {
  //   this.editing = true;
  // }
  //
  // handleClick() {
  //   this.onDestroy.emit(this.todo.id);
  // }
}
