import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WastePage } from './waste';

@NgModule({
  declarations: [
    WastePage,
  ],
  imports: [
    IonicPageModule.forChild(WastePage),
  ],
})
export class WastePageModule {}
