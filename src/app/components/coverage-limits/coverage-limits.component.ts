import {Component, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'coverage-limits',
  template: require('./coverage-limits.component.html'),
  styleUrls: ['app/components/coverage-limits/coverage-limits.component.css']
})
export class CoverageLimitsComponent {
  coverageLimits: any[] = [1, 2, 3, 4];
  // @Input() todo: any;
  // @Output() onDestroy: EventEmitter<any> = new EventEmitter(false);
  // @Output() onSave: EventEmitter<any> = new EventEmitter(false);
  // @Output() onChange: EventEmitter<any> = new EventEmitter(false);
  // editing: boolean = false;

  // handleSave(text: string) {
  //   this.onSave.emit({id: this.todo.id, text});
  //   this.editing = false;
  // }
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
