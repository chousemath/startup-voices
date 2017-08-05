import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-story',
  templateUrl: 'story.html',
})
export class StoryPage {
  story: {
    post: { title: string, description: string, cover_photo_md_url: string, like_count: number, comment_count: number },
    user: { name: string, description_short: string, profile_photo_sm_url: string }
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.story = navParams.get('data');
    console.log(this.story);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoryPage');
  }

}
