import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SearchStationPage } from '../search-station/search-station';
import { SearchResultPage } from '../search-result/search-result'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  apiAuthKey: string = '<Api認証キー>';
  startStationName: string  = 'のるところ';
  endStationName: string    = 'おりるところ';
  startStationCode: number;
  endStationCode: number;
  isStartStation: boolean   = false;
  loading: boolean; // 処理中の判定
  searchResult: Object;

  constructor(public navCtrl: NavController, private http: HttpClient) { }

  openSearchPage = (isStartStation: boolean) => {
    this.isStartStation = isStartStation;
    this.openNavDetailsPage(SearchStationPage, null, this.updateSearchStation);
  }

  /*
   * 指定したページに飛ばす
   *
   * @openPageName 移動先ページ名
   * @data         渡すデータ
   * @callback     Callback関数名
   */
  openNavDetailsPage(openPageName, data, callback) {
    this.navCtrl.push(openPageName, {
      data: data,
      callback: callback
    });
  }

  /*
   * 駅検索から検索した駅名を「のるところ、おりるところ」に更新する
   *
   * @selectStationName 更新する駅名
   */
  updateSearchStation = (selectedStatCode, selectedStatName) => {
    // console.log(selectedStation);
    return new Promise(() => {
      // 「のるところ」更新
      if (this.isStartStation) {
        this.startStationName = selectedStatName;
        // this.startStationName = selectedStation.jname + ' (' + selectedStation.kname +')';
        this.startStationCode = selectedStatCode;
        return;
      }

      // 「おりるところ」更新
      this.endStationName = selectedStatName;
      this.endStationCode = selectedStatCode;
    });
  };

  /*
   * Apiで検索結果を取得し、成功した場合は検索結果画面に飛ばす
   */
  search = (): void => {
    let httpResult: boolean = false;
    this.loading = true;

    this.openNavDetailsPage(SearchResultPage, this.searchResult, null);
    this.http
      .get('https://secure-spire-10955.herokuapp.com/search?start=' + this.startStationCode + '&end=' + this.endStationCode)
      // .get('http://swopenapi.seoul.go.kr/api/subway/' + this.apiAuthKey + '/json/shortestRoute/0/5/' + this.startStationName + '/' + this.endStationName)
      .subscribe(data => { // 成功したら
        this.searchResult = data;
        this.loading = false;
        httpResult = true;

        // 結果画面に飛ばす
        this.openNavDetailsPage(SearchResultPage, this.searchResult, null);
      });
  }
}
