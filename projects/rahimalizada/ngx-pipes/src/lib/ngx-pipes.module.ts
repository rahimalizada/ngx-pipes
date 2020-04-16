import { NgModule } from '@angular/core';
import { SafePipe } from './safe.pipe';
import { ValueOrDashPipe } from './value-or-dash.pipe';
import { YesNoPipe } from './yes-no.pipe';

@NgModule({
  declarations: [YesNoPipe, ValueOrDashPipe, SafePipe],
  imports: [],
  exports: [YesNoPipe, ValueOrDashPipe, SafePipe],
})
export class NgxPipesModule {}
