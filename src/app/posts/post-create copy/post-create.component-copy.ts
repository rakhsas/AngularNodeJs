import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post.model';

@Component({
	selector: 'app-post-create-copy',
	templateUrl: './post-create.component-copy.html',
	styleUrls: ['./post-create.component-copy.css']
})
export class PostCreateComponentCopy {
	postId: any;
	post: any = [];
	constructor (public postsService: PostsService, private route: ActivatedRoute,
		private router: Router)
	{
		this.postId = '';
	}
	ngOnInit() {
		this.postId = this.route.snapshot.paramMap.get('postId');
		if (this.postId) {
			this.postsService.getPostById(this.postId)
			.subscribe((post: Post[]) => {
				this.post = post;
				this.post = post[0];
			})
		}
	}
	onAddPost(form: NgForm) {
		if (form.invalid) {
			return;
		}
		this.postsService.addPost(form.value.title, form.value.content);
		form.resetForm();
	}
	onUpdatePost(form: NgForm)
	{
		if (form.invalid) {
			return;
		}
		this.postsService.updatePost(this.postId, form.value.title, form.value.content)
		this.router.navigate(['']);
	}
}


