import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
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
  constructor(public navCtrl: NavController) {
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
          { name: 'AngularJS', category: 'Frontend' }
        ]
      },
      {
        company: {
          name: 'Seniors & Youth',
          tags: [ 'Education', 'Korean Language', 'SaaS' ],
          description: 'Seniors & Youth use fullstack Ruby on Rails to drive it\'s Korean language education business.'
        },
        technologies: [
          { name: 'Ruby on Rails', category: 'Fullstack' }
        ]
      }
    ];
  }

}
