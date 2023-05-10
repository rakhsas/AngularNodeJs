import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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
	form: FormGroup = new FormGroup({
		'title': new FormControl(null, {
		  validators: [Validators.required, Validators.minLength(3)]
		}),
		'content': new FormControl(null, {
		  validators: [Validators.required]
		})
	  });
	isLoading = false;
	constructor (public postsService: PostsService, private route: ActivatedRoute,
		private router: Router)
	{
		this.postId = '';
	}
	ngOnInit() {
		this.postId = this.route.snapshot.paramMap.get('postId');
		if (this.postId) {
			this.isLoading = true;
			this.postsService.getPostById(this.postId)
			.subscribe((post: Post[]) => {
				this.isLoading =false
				this.post = post;
				this.post = post[0];
				console.log(this.post);
				this.form.setValue({
					title: this.post.title,
					content: this.post.content
				})
			})
		}
	}
	onAddPost() {
		if (this.form.invalid) {
			return;
		}
		this.postsService.addPost(this.form.value.title, this.form.value.content);
		this.form.reset();
	}
	onUpdatePost()
	{
		if (this.form.invalid) {
			return;
		}
		this.postsService.updatePost(this.postId, this.form.value.title, this.form.value.content)
		this.router.navigate(['']);
	}
}


