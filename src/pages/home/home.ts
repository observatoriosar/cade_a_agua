import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Carregando, aguarde...",
      duration: 3000
    });
    loader.present();
  }

}
