import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';


@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{
	entredTitle = "";
	entredContent = "";
	isLoading = false;
	posts: Post[] = [];
	private postsSub!: Subscription;
	constructor(public postService: PostsService, private router: Router) {
	}
	ngOnInit() {
		this.isLoading = true;
		this.postService.getPosts();
		this.postsSub = this.postService.getPostUpdateListener()
		.subscribe((posts: Post[]) => {
			this.isLoading = false;
			this.posts =  posts;
		});
	}

	onDelete(postId: string) {
		this.postService.deletePost(postId);
	}
	onEditClick() {
		// const navigationExtras: NavigationExtras = {
		// 	state: {
		// 	  data: post
		// 	}
		//   };
		// (<any>this.router).navigate(['/edit'], navigationExtras);
	}

	ngOnDestroy(): void {
		this.postsSub.unsubscribe();
	}
}