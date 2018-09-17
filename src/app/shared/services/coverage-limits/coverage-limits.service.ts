import { Injectable, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CoverageLimitsService {

  optionsChanged: EventEmitter<any> = new EventEmitter();
  optionsSaved: EventEmitter<any> = new EventEmitter();
  editModeChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  getOptions() {
    return JSON.parse(JSON.stringify({
      compDeductible: 0,
      collDeductible: 0,
      rentalCar: 0,
      roadside: 0
    }));
  }

  saveOptions(save: any): void {
    this.optionsSaved.emit(JSON.parse(JSON.stringify(save)));
  }

  announceOptionsChange(options): void {
    this.optionsChanged.emit(JSON.parse(JSON.stringify(options)));
  }

  announceEditModeChange(mode: boolean): void {
    this.editModeChanged.emit(mode);
  }
}
