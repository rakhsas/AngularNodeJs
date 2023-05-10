import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
	imagePreview: string = '';
	form: FormGroup = new FormGroup({
		'title': new FormControl(null, {
		  validators: [Validators.required, Validators.minLength(3)]
		}),
		'content': new FormControl(null, {
		  validators: [Validators.required]
		}),
		'image': new FormControl(null, {
			validators: [Validators.required]
		})
	  });
	constructor (public postsService: PostsService,
		private router: Router)
	{

	}
	onAddPost() {
		if (this.form.invalid) {
			return;
		}
		this.postsService.addPost(this.form.value.title, this.form.value.content);
		this.router.navigate(['']);
		this.form.reset()
  	}
	onImagePicked(event: any) {
		if (event.target instanceof HTMLInputElement) {
			const file = event.target.files[0];
			this.form.patchValue({ image: file });
			this.form.get('image')?.updateValueAndValidity();
			const reader = new FileReader();
			reader.onload = () => {
				this.imagePreview = reader.result as string;
			};
			reader.readAsDataURL(file);
		}
	}
}

