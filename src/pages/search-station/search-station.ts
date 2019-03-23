import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-search-station',
  templateUrl: 'search-station.html',
})
export class SearchStationPage {
  items;
  itemsCopy;
  callback;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpClient
  ) {
    this.getStations();
    this.callback     = this.navParams.get('callback');
  }

  getStations() {
    this.http
      .get('https://secure-spire-10955.herokuapp.com/stations')
      .subscribe(data => { // 成功したらdata

        // Step 1. Get all the object keys.
        let evilResponseProps = Object.values(data);

        // Step 2. Create an empty array.
        let goodResponse = [];

        // // Step 3. Iterate throw all keys.
        for (let prop of evilResponseProps) {
          goodResponse.push(prop.sid + prop.jname + ' ('+ prop.kname +')');
        }

        this.items = goodResponse;
        this.itemsCopy = goodResponse;
      });
  }

  getItems(ev) {
    // Reset stations back to all of the stations
    // if (this.items === null) {
    //   this.getStations();
    // }
    this.items = this.itemsCopy

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the stations
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  selectStation(event: any, item: string): void
  {
    let stationCode = item.substr(0, 10);
    let stationName = item.substr(10);
    this.callback(stationCode, stationName).then(()=>{ this.navCtrl.pop(); });
  }
}
