import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StacksPage } from './stacks';

@NgModule({
  declarations: [
    StacksPage,
  ],
  imports: [
    IonicPageModule.forChild(StacksPage),
  ],
})
export class StacksPageModule {}
