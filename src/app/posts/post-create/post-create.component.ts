import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { validate } from 'uuid';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
	// form: FormGroup;

	form: FormGroup = new FormGroup({
		'title': new FormControl(null, {
		  validators: [Validators.required, Validators.minLength(3)]
		}),
		'content': new FormControl(null, {
		  validators: [Validators.required]
		})
	  });
	constructor (public postsService: PostsService,
		private router: Router)
	{

	}
	// ngOnInit()
	// {
	// 	this.form = new FormGroup({
	// 		'title': new FormControl(null, {
	// 			validators: [Validators.required, Validators.minLength(3)]
	// 		}),
	// 		'content' : new FormControl(null, {
	// 			validators: [Validators.required]
	// 		})
	// 	})
	// }
	onAddPost() {
		if (this.form.invalid) {
			return;
		}
		this.postsService.addPost(this.form.value.title, this.form.value.content);
		this.router.navigate(['']);
		this.form.reset()
  	}
}

