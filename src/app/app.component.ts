import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage }   from '../pages/home/home';
import { LackPage }   from '../pages/lack/lack';
import { WastePage }  from '../pages/waste/waste';
import { AboutPage }  from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  lackPage:any = LackPage;
  wastePage:any = WastePage;
  aboutPage:any = AboutPage;
  menu: MenuController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, menu: MenuController) {
    menu.enable(true);

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    this.rootPage = page;
    // this.menu.close();
  }
}

