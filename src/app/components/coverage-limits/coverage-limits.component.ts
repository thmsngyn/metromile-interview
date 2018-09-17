import { CoverageLimitsService } from './../../shared/services/coverage-limits/coverage-limits.service';
import { Vehicle } from './../../shared/services/vehicles/vehicles.model';
import {Component, Input, Output, EventEmitter, ViewEncapsulation, OnInit} from '@angular/core';
import { CoverageLimit, CoverageOption } from '../../shared/services/coverage-limits/coverage-limits.model';
import { OutputEmitter } from '@angular/compiler/src/output/abstract_emitter';

@Component({
  selector: 'coverage-limits',
  template: require('./coverage-limits.component.html'),
  styleUrls: ['app/shared/styles.css', 'app/components/coverage-limits/coverage-limits.component.css']
})
export class CoverageLimitsComponent implements OnInit {
  vehicle: Vehicle = null;
  private coverageLimits: CoverageLimit[] = [];
  editMode: boolean = false;

  private selectedOptions = {};

  constructor(public coverageService: CoverageLimitsService) {}

  ngOnInit() {
    this.vehicle = require('../../shared/services/vehicles/vehicle.json');

    var coveragesJson = require('../../shared/services/coverage-limits/coverages.json');
    for (let coverage of coveragesJson.coverageOptions) {
      this.coverageLimits.push(
        new CoverageLimit(coverage)
      )
    }

    this.selectedOptions = this.coverageService.getOptions();
    this.coverageService.optionsSaved.subscribe(
      data => {
        this.selectedOptions = data;
        this.editMode = false;
        this.coverageService.announceEditModeChange(this.editMode);
      }
    );
  }

  editCoverages() {
    this.editMode = !this.editMode;
    this.coverageService.announceEditModeChange(this.editMode);
  }

  setClickedOption(option, index) {
    this.selectedOptions[option] = index;
    this.coverageService.announceOptionsChange(this.selectedOptions);
  }
}
