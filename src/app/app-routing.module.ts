import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { PostCreateComponentCopy } from "./posts/post-create copy/post-create.component-copy";

const routes : Routes = [
	{ path: '', component: PostListComponent },
	{ path: 'create', component: PostCreateComponent },
	{ path: 'edit/:postId', component: PostCreateComponentCopy }
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }