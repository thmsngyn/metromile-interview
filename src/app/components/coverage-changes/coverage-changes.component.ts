import { CoverageLimitsService } from './../../shared/services/coverage-limits/coverage-limits.service';
import { Vehicle } from '../../shared/services/vehicles/vehicles.model';
import {Component, OnInit} from '@angular/core';
import { CoverageLimit } from '../../shared/services/coverage-limits/coverage-limits.model';

@Component({
  selector: 'coverage-changes',
  template: require('./coverage-changes.component.html'),
  styleUrls: ['app/shared/styles.css', 'app/components/coverage-changes/coverage-changes.component.css']
})
export class CoverageChangesComponent implements OnInit {
  vehicle: Vehicle = null;
  private coverageLimits: CoverageLimit[] = [];
  selectedOptions = {};
  newOptions = {};
  editMode: boolean = false;

  constructor(public coverageService: CoverageLimitsService) {}

  ngOnInit() {
    this.vehicle = require('../../shared/services/vehicles/vehicle.json');
    let coveragesJson = require('../../shared/services/coverage-limits/coverages.json');
    for (let coverage of coveragesJson.coverageOptions) {
      this.coverageLimits.push(
        new CoverageLimit(coverage)
      )
    }

    // Get the initial options
    this.selectedOptions = this.coverageService.getOptions();
    this.newOptions = this.coverageService.getOptions();

    this.coverageService.optionsChanged.subscribe(
      data => {
        this.newOptions = data;
      }
    );
    this.coverageService.editModeChanged.subscribe(
      data => {
        this.editMode = data;
      }
    )
  }

  isUnchanged() {
    for (let key in this.selectedOptions) {
      if (this.selectedOptions[key] !== this.newOptions[key]) {
        return false;
      }
    }
    return true;
  }

  saveChanges(save: any) {
    this.selectedOptions = save;
    this.coverageService.saveOptions(save);
  }
}
