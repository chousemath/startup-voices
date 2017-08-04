import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {KSSwiperSlide, KSSwiperContainer} from '../../../node_modules/angular2-swiper/dist/ks-swiper';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [KSSwiperSlide, KSSwiperContainer]
})
export class HomePage {
  latest: Array<{
    post: {
      title: string,
      description: string,
      cover_photo_md_url: string
    },
    user: {
      name: string,
      description_short: string,
      profile_photo_sm_url: string
    }
  }>;

  popular: Array<{
    post: {
      title: string,
      description: string,
      cover_photo_md_url: string,
      like_count: number,
      comment_count: number
    },
    user: {
      name: string,
      description_short: string,
      profile_photo_sm_url: string
    }
  }>;

  stacks: Array<{
    company: {
      name: string,
      tags: Array<string>,
      description: string
    },
    technologies: Array<{
      name: string,
      category: string
    }>
  }>;
  example1SwipeOptions: any;
  returnIcon: Function;
  constructor(public navCtrl: NavController) {

    this.returnIcon = function(techName: string): string {
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
      case 'typescript':
        iconString = 'assets/images/icon-typescript.png';
        break;
      default:
        iconString = 'assets/images/icon-chip.png';
      }
      return iconString;
    }

    this.example1SwipeOptions = {
      loop: true,
      autoplay: 2000,
      speed: 750
    };

    this.latest = [
      {
        post: {
          title: 'This is a post',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          cover_photo_md_url: 'https://images.fineartamerica.com/images-medium-large/beachside-sunset-diana-houston.jpg'
        },
        user: {
          name: 'Elon Musk',
          description_short: 'Sed do eiusmod tempor incididunt ut labore.',
          profile_photo_sm_url: 'https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0_400x400.jpg'
        }
      },
      {
        post: {
          title: 'All of the money',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          cover_photo_md_url: 'https://images.fineartamerica.com/images-medium-large/beachside-sunset-diana-houston.jpg'
        },
        user: {
          name: 'Peter Thiel',
          description_short: 'Sed do eiusmod tempor incididunt ut labore.',
          profile_photo_sm_url: 'http://static4.bornrichimages.com/cdn2/500/500/91/c/wp-content/uploads/2014/09/ptr_thumb.jpg'
        }
      },
      {
        post: {
          title: 'Who dat?',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          cover_photo_md_url: 'https://images.fineartamerica.com/images-medium-large/beachside-sunset-diana-houston.jpg'
        },
        user: {
          name: 'Jeff Bezos',
          description_short: 'Sed do eiusmod tempor incididunt ut labore.',
          profile_photo_sm_url: 'https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4.jpg'
        }
      },
    ];

    this.popular = [
      {
        post: {
          title: '5 things you need to consider',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          cover_photo_md_url: 'http://static.snopes.com/app/uploads/2015/01/picnic_tw.jpg',
          like_count: 7,
          comment_count: 3
        },
        user: {
          name: 'Thomas Edison',
          description_short: 'Sed do eiusmod tempor incididunt ut labore.',
          profile_photo_sm_url: 'http://s3.amazonaws.com/production.mediajoint.prx.org/public/piece_images/323254/Thomas_Edison_small.jpg'
        }
      },
      {
        post: {
          title: 'Best ways to cut the cheese',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          cover_photo_md_url: 'http://static.snopes.com/app/uploads/2015/01/picnic_tw.jpg',
          like_count: 22,
          comment_count: 56
        },
        user: {
          name: 'Nikola Tesla',
          description_short: 'Sed do eiusmod tempor incididunt ut labore.',
          profile_photo_sm_url: 'https://s3.amazonaws.com/teleautomaton-images/Nikola_Teslabig.jpg'
        }
      },
      {
        post: {
          title: 'What if that thing happens?',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          cover_photo_md_url: 'http://static.snopes.com/app/uploads/2015/01/picnic_tw.jpg',
          like_count: 15,
          comment_count: 4
        },
        user: {
          name: 'Michael Faraday',
          description_short: 'Sed do eiusmod tempor incididunt ut labore.',
          profile_photo_sm_url: 'https://s-media-cache-ak0.pinimg.com/736x/64/a5/d9/64a5d944615d871f4933bf93235b8e7e--michael-faraday-michael-okeefe.jpg'
        }
      },
    ];

    this.stacks = [
      {
        company: {
          name: 'Doc & Me',
          tags: [ 'Healthcare', 'SaaS' ],
          description: 'Doc & Me uses the Ruby on Rails, Flask, WordPress, AngularJS and Angular 4 frameworks, and the Ruby, Python, Typescript, PHP, and Rust programming languages.'
        },
        technologies: [
          { name: 'Ruby on Rails', category: 'Backend' },
          { name: 'Flask', category: 'Backend' },
          { name: 'WordPress', category: 'CMS' },
          { name: 'AngularJS', category: 'Frontend' },
          { name: 'Angular 4', category: 'Frontend' },
          { name: 'Ionic 1', category: 'Frontend' },
          { name: 'Ionic 3', category: 'Frontend' },
          { name: 'Ruby', category: 'Language' },
          { name: 'Python', category: 'Language' },
          { name: 'Typescript', category: 'Language' },
          { name: 'PHP', category: 'Language' },
          { name: 'Rust', category: 'Language' },
          { name: 'HTML', category: 'Language' },
          { name: 'CSS', category: 'Language' },
          { name: 'SCSS', category: 'Language' },
          { name: 'Javascript', category: 'Language' }
        ]
      },
      {
        company: {
          name: 'Seniors & Youth',
          tags: [ 'Education', 'Korean Language', 'SaaS' ],
          description: 'Seniors & Youth use fullstack Ruby on Rails to drive it\'s Korean language education business.'
        },
        technologies: [
          { name: 'Ruby on Rails', category: 'Fullstack' },
          { name: 'HTML', category: 'Language' },
          { name: 'CSS', category: 'Language' }
        ]
      }
    ];
  }

}
