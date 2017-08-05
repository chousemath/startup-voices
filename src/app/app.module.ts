import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StoryPage } from '../pages/story/story';
import { StoriesPage } from '../pages/stories/stories';
import { StackPage } from '../pages/stack/stack';
import { StacksPage } from '../pages/stacks/stacks';
import { JobPage } from '../pages/job/job';
import { JobsPage } from '../pages/jobs/jobs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {KSSwiperModule} from '../../node_modules/angular2-swiper/dist/ks-swiper.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    StoryPage,
    StoriesPage,
    StackPage,
    StacksPage,
    JobPage,
    JobsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    KSSwiperModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    StoryPage,
    StoriesPage,
    StackPage,
    StacksPage,
    JobPage,
    JobsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
