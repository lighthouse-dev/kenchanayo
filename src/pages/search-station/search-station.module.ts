import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchStationPage } from './search-station';

@NgModule({
  declarations: [
    SearchStationPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchStationPage),
  ],
})
export class SearchStationPageModule {}
