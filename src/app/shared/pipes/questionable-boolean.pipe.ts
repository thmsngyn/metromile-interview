import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'questionableBoolean' })
export class QuestionableBooleanPipe implements PipeTransform {
  transform(value: boolean|string): string {
    if (typeof value === "boolean") {
      return value == true ? 'Yes' : 'No';
    }
    else {
      return value;
    }
  };
}
