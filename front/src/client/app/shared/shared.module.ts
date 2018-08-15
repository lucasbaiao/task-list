import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskListService } from './task-list/task-list.service';
import { DateFormatPipe } from '../_pipes/date';


/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
  imports: [CommonModule],
  exports: [CommonModule, FormsModule],
  declarations: [DateFormatPipe]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [TaskListService]
    };
  }
}
