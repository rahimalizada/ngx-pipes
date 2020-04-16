import { NgModule } from '@angular/core';
import { ValueOrDashPipe } from './value-or-dash.pipe';
import { YesNoPipe } from './yes-no.pipe';

@NgModule({
  declarations: [YesNoPipe, ValueOrDashPipe],
  imports: [],
  exports: [YesNoPipe, ValueOrDashPipe],
})
export class NgxPipesModule {}
