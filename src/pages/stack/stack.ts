import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StackPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stack',
  templateUrl: 'stack.html',
})
export class StackPage {
  stack: {
    company: { name: string, tags: Array<string>, description: string },
    technologies: Array<{ name: string, category: string }>,
    user: { name: string, description_short: string, description_full: string, profile_photo_sm_url: string }
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.stack = navParams.get('data');
  }

  returnIcon(techName: string): string {
    let iconString: string;
    switch(techName.toLowerCase()) {
    case 'angular':
      iconString = 'assets/images/icon-angular.png';
      break;
    case 'angularjs':
      iconString = 'assets/images/icon-angular.png';
      break;
    case 'angular 1':
      iconString = 'assets/images/icon-angular.png';
      break;
    case 'angular 2':
      iconString = 'assets/images/icon-angular.png';
      break;
    case 'angular 4':
      iconString = 'assets/images/icon-angular.png';
      break;
    case 'django':
      iconString = 'assets/images/icon-django.png';
      break;
    case 'flask':
      iconString = 'assets/images/icon-flask.png';
      break;
    case 'ionic':
      iconString = 'assets/images/icon-ionic.png';
      break;
    case 'ionic 1':
      iconString = 'assets/images/icon-ionic.png';
      break;
    case 'ionic 2':
      iconString = 'assets/images/icon-ionic.png';
      break;
    case 'ionic 3':
      iconString = 'assets/images/icon-ionic.png';
      break;
    case 'rails':
      iconString = 'assets/images/icon-ruby.png';
      break;
    case 'ruby on rails':
      iconString = 'assets/images/icon-ruby.png';
      break;
    case 'tornado':
      iconString = 'assets/images/icon-python.png';
      break;
    case 'wordpress':
      iconString = 'assets/images/icon-wordpress.png';
      break;
    case 'css':
      iconString = 'assets/images/icon-css.png';
      break;
    case 'erlang':
      iconString = 'assets/images/icon-erlang.png';
      break;
    case 'html':
      iconString = 'assets/images/icon-html.png';
      break;
    case 'javascript':
      iconString = 'assets/images/icon-javascript.png';
      break;
    case 'php':
      iconString = 'assets/images/icon-php.png';
      break;
    case 'python':
      iconString = 'assets/images/icon-python.png';
      break;
    case 'ruby':
      iconString = 'assets/images/icon-ruby.png';
      break;
    case 'rust':
      iconString = 'assets/images/icon-rust.png';
      break;
    case 'sass':
      iconString = 'assets/images/icon-sass.png';
      break;
    case 'scss':
      iconString = 'assets/images/icon-sass.png';
      break;
    case 'sql':
      iconString = 'assets/images/icon-sql.png';
      break;
    case 'typescript':
      iconString = 'assets/images/icon-typescript.png';
      break;
    case 'mysql':
      iconString = 'assets/images/icon-mysql.png';
      break;
    case 'engineering':
      iconString = 'assets/images/icon-engineering.png';
      break;
    case 'excel':
      iconString = 'assets/images/icon-excel.png';
      break;
    case 'google analytics':
      iconString = 'assets/images/icon-google-analytics.png';
      break;
    case 'powerpoint':
      iconString = 'assets/images/icon-powerpoint.png';
      break;
    case 'rocketry':
      iconString = 'assets/images/icon-rocketry.png';
      break;
    case 'tdd':
      iconString = 'assets/images/icon-tdd.png';
      break;
    case 'test driven development':
      iconString = 'assets/images/icon-tdd.png';
      break;
    case 'word':
      iconString = 'assets/images/icon-word.png';
      break;
    case 'facebook':
      iconString = 'assets/images/icon-facebook.png';
      break;
    case 'facebook marketing':
      iconString = 'assets/images/icon-facebook.png';
      break;
    case 'instagram':
      iconString = 'assets/images/icon-instagram.png';
      break;
    case 'instagram marketing':
      iconString = 'assets/images/icon-instagram.png';
      break;
    default:
      iconString = 'assets/images/icon-chip.png';
    }
    return iconString;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StackPage');
  }

}
