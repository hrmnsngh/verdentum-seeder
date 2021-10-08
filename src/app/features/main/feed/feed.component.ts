import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  feeds = [{
    AuthorName: 'Harman Singh',
    AuthorImageURL: 'https://bulma.io/images/placeholders/128x128.png',
    feedDate: '12 Sep 2021',
    program: 'Dummy',
    schoolVisitCount: 12,
    studentsContactedCount: 210, uploadLocation: 'Delhi',
    latitude: '28.7041° N',
    longitude: '77.1025° E',
    feedContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut enim at et dignissim venenatis odio. Donec aenean egestas egestas eget senectus. Nec a viverra id sollicitudin quam. Sed bibendum nisl fringilla augue.',
    supportedCount: 3,
    organizerHifiCount: 1,
    imageURL: 'https://bulma.io/images/placeholders/128x128.png'
  },
  {
    AuthorName: 'Harman Singh',
    AuthorImageURL: 'https://bulma.io/images/placeholders/128x128.png',
    feedDate: '12 Sep 2021',
    program: 'Dummy',
    schoolVisitCount: 12,
    studentsContactedCount: 210, uploadLocation: 'Delhi',
    latitude: '28.7041° N',
    longitude: '77.1025° E',
    feedContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut enim at et dignissim venenatis odio. Donec aenean egestas egestas eget senectus. Nec a viverra id sollicitudin quam. Sed bibendum nisl fringilla augue.',
    supportedCount: 3,
    organizerHifiCount: 1,
    imageURL: 'https://bulma.io/images/placeholders/128x128.png'
  },
  {
    AuthorName: 'Harman Singh',
    AuthorImageURL: 'https://bulma.io/images/placeholders/128x128.png',
    feedDate: '12 Sep 2021',
    program: 'Dummy',
    schoolVisitCount: 12,
    studentsContactedCount: 210, uploadLocation: 'Delhi',
    latitude: '28.7041° N',
    longitude: '77.1025° E',
    feedContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut enim at et dignissim venenatis odio. Donec aenean egestas egestas eget senectus. Nec a viverra id sollicitudin quam. Sed bibendum nisl fringilla augue.',
    supportedCount: 3,
    organizerHifiCount: 1,
    imageURL: 'https://bulma.io/images/placeholders/128x128.png'
  },
  {
    AuthorName: 'Harman Singh',
    AuthorImageURL: 'https://bulma.io/images/placeholders/128x128.png',
    feedDate: '12 Sep 2021',
    program: 'Dummy',
    schoolVisitCount: 12,
    studentsContactedCount: 210, uploadLocation: 'Delhi',
    latitude: '28.7041° N',
    longitude: '77.1025° E',
    feedContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut enim at et dignissim venenatis odio. Donec aenean egestas egestas eget senectus. Nec a viverra id sollicitudin quam. Sed bibendum nisl fringilla augue.',
    supportedCount: 3,
    organizerHifiCount: 1,
    imageURL: 'https://bulma.io/images/placeholders/128x128.png'
  },
  {
    AuthorName: 'Harman Singh',
    AuthorImageURL: 'https://bulma.io/images/placeholders/128x128.png',
    feedDate: '12 Sep 2021',
    program: 'Dummy',
    schoolVisitCount: 12,
    studentsContactedCount: 210, uploadLocation: 'Delhi',
    latitude: '28.7041° N',
    longitude: '77.1025° E',
    feedContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut enim at et dignissim venenatis odio. Donec aenean egestas egestas eget senectus. Nec a viverra id sollicitudin quam. Sed bibendum nisl fringilla augue.',
    supportedCount: 3,
    organizerHifiCount: 1,
    imageURL: 'https://bulma.io/images/placeholders/128x128.png'
  }];
  constructor() { }

  ngOnInit(): void {
  }

  feedAction() {
    console.log('feed action clicked');
  }

}
