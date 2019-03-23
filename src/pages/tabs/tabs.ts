import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { TravelPage } from '../travel/travel';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TravelPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
