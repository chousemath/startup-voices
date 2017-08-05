import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import {KSSwiperSlide, KSSwiperContainer} from '../../../node_modules/angular2-swiper/dist/ks-swiper';
import { StoryPage } from '../story/story';
import { StoriesPage } from '../stories/stories';
import { StackPage } from '../stack/stack';
import { StacksPage } from '../stacks/stacks';
import { JobPage } from '../job/job';
import { JobsPage } from '../jobs/jobs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [KSSwiperSlide, KSSwiperContainer]
})
export class HomePage {
  @ViewChild(Content) content: Content;
  latest: Array<{
    post: { title: string, description: string, cover_photo_md_url: string },
    user: { name: string, description_short: string, profile_photo_sm_url: string}
  }>;

  popular: Array<{
    post: { title: string, description: string, cover_photo_md_url: string, like_count: number, comment_count: number },
    user: { name: string, description_short: string, profile_photo_sm_url: string }
  }>;

  stacks: Array<{
    company: { name: string, tags: Array<string>, description: string },
    technologies: Array<{ name: string, category: string }>,
    user: { name: string, description_short: string, profile_photo_sm_url: string }
  }>;

  jobs: Array<{
    title: string,
    description: string,
    tags: Array<string>,
    visa_sponsored: boolean,
    company: { name: string, description: string, company_logo_sm_url: string },
    skills: Array<{ name: string, level: string }>
  }>;

  example1SwipeOptions: any;
  constructor(
    public navCtrl: NavController
  ) {
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
          description_short: 'CEO of Tesla, SpaceX, and more!',
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
          description_short: 'CEO of Palantir and other stuff.',
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
          description_short: 'CEO of Amazon baby, big jungle~',
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
          description_short: 'CEO of Edison Electric',
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
          description_short: 'CEO of Brooksfield Electric',
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
          description_short: 'Inventor of Light',
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
        ],
        user: {
          name: 'Joseph Choi',
          description_short: 'CTO of Doc&Me',
          profile_photo_sm_url: 'https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0_400x400.jpg'
        }
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
          { name: 'Javascript', category: 'Language' },
          { name: 'CSS', category: 'Language' }
        ],
        user: {
          name: 'Steve Jobs',
          description_short: 'CTO of Fruit Inc.',
          profile_photo_sm_url: 'https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0_400x400.jpg'
        }
      },
      {
        company: {
          name: 'Intake',
          tags: [ 'Ecommerce', 'Food and Beverages' ],
          description: 'Intake is a very big company, so big, that it is massive.'
        },
        technologies: [
          { name: 'MySql', category: 'Database' },
          { name: 'Django', category: 'Fullstack' },
          { name: 'Flask', category: 'Backend' },
          { name: 'Python', category: 'Language' },
          { name: 'Javascript', category: 'Language' },
          { name: 'HTML', category: 'Language' },
          { name: 'Erlang', category: 'Language' },
          { name: 'CSS', category: 'Language' }
        ],
        user: {
          name: 'Steve Wozniak',
          description_short: 'COO of Fruit Inc.',
          profile_photo_sm_url: 'https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0_400x400.jpg'
        }
      }
    ];


    // jobs: Array<{
    //   title: string,
    //   description: string,
    //   tags: Array<string>,
    //   company: { name: string, description: string, company_logo_sm_url: string },
    //   skills: Array<{ name: string, level: string }>,
    //   user: { name: string, description_short: string, profile_photo_sm_url: string }
    // }>;

    this.jobs = [
      {
        title: 'Senior Ruby Developer',
        description: 'We require a senior level ruby on rails developer to build our SaaS product',
        tags: ['ruby', 'engineering', 'senior'],
        visa_sponsored: false,
        company: { name: 'RubyMine', description: 'We mine rubies like dwarves, we harvest the money like it is our job.', company_logo_sm_url: 'https://s-media-cache-ak0.pinimg.com/236x/9e/1e/f2/9e1ef294cdba515c09d013d37ec7a231--geometric-logo-geometric-designs.jpg' },
        skills: [
          { name: 'Word', level: 'experienced' },
          { name: 'Powerpoint', level: 'proficient' },
          { name: 'Excel', level: 'experienced' },
          { name: 'Ruby', level: 'expert' },
          { name: 'TDD', level: 'expert' },
          { name: 'Ruby on Rails', level: 'expert' },
        ]
      },
      {
        title: 'Head of Marketing',
        description: 'We require a senior level marketer who will take us to the next level',
        tags: ['marketing', 'communications', 'teamwork'],
        visa_sponsored: true,
        company: { name: 'Eggzell', description: 'We are awesome and we know it.', company_logo_sm_url: 'https://s-media-cache-ak0.pinimg.com/736x/41/1a/48/411a4835d38ff899e55ce2802b08329c.jpg' },
        skills: [
          { name: 'instagram marketing', level: 'expert' },
          { name: 'facebook marketing', level: 'expert' },
          { name: 'google analytics', level: 'expert' },
          { name: 'Word', level: 'experienced' },
          { name: 'Powerpoint', level: 'proficient' },
          { name: 'Excel', level: 'experienced' }
        ]
      },
      {
        title: 'Rocket Engineer',
        description: 'We need someone to build us a freakin rocket',
        tags: ['rocket', 'space', 'amazing'],
        visa_sponsored: true,
        company: { name: 'SpaceX', description: 'To infinity, and beyond!', company_logo_sm_url: 'http://foundersguide.com/wp-content/uploads/2015/07/Fotolia_83951882_XS.jpg' },
        skills: [
          { name: 'rocketry', level: 'expert' },
          { name: 'engineering', level: 'expert' },
          { name: 'google analytics', level: 'expert' },
          { name: 'Word', level: 'experienced' },
          { name: 'Powerpoint', level: 'proficient' },
          { name: 'Excel', level: 'experienced' }
        ]
      }
    ];
  }

  goToStory(data) {
    console.log(data);
    this.navCtrl.push(StoryPage, data);
  }

  goToStoriesPage(data) {
    console.log(data);
    this.navCtrl.push(StoriesPage, data);
  }

  goToStack(data) {
    console.log(data);
    this.navCtrl.push(StackPage, data);
  }

  goToStacksPage(data) {
    console.log(data);
    this.navCtrl.push(StacksPage, data);
  }

  goToJob(data) {
    console.log(data);
    this.navCtrl.push(JobPage, data);
  }

  goToJobsPage(data) {
    console.log(data);
    this.navCtrl.push(JobsPage, data);
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

  scrollToTop() {
    this.content.scrollToTop();
  }

}
