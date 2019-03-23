import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-travel',
  templateUrl: 'travel.html'
})
export class TravelPage {
  constructor(public modalCtrl: ModalController) {

  }

  presentProfileModal() {
    let profileModal = this.modalCtrl.create(Profile, { userId: 8675309 });
    profileModal.onDidDismiss(data => {
      console.log(data);
    });
    profileModal.present();
  }

}

@Component({
  templateUrl: 'modal-content.html'
})
class Profile {

  constructor(public viewCtrl: ViewController) {

  }

  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }
 }
