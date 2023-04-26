import { Component } from '@angular/core';
import { Post } from './posts/post.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts: Post[] = [];


  onPostAdded(post: {id: string, title: string, content: string}) {
    this.storedPosts.push(post);
    console.log('New post added: ', post);
    // console.log(JSON.stringify(this.storedPosts));
  }
}
