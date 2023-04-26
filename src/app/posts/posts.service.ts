import { Subject, map } from "rxjs";
import { Post } from "./post.model";
import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class PostsService {
	private posts: Post[] = [];
  	private postsUpdated = new Subject<Post[]>();
	constructor(private _http: HttpClient) {}

	getPosts() {
		this._http.get<{message: string, posts: any}>('http://localhost:3010/api/posts')
		.pipe(map(postData => {
			return postData.posts.map((post: { title: any; content: any; _id: any; }) => {
				return {
					title: post.title,
					content: post.content,
					id: post._id
				};
			});
		}))
		.subscribe(responseData => {
			this.posts = responseData;
			this.postsUpdated.next([...this.posts]);
		});
	}

	getPostUpdateListener()
	{
		return this.postsUpdated.asObservable();
	}

	addPost (title: string, content: string)
	{
		const post = {id: '', title: title, content: content};
		this._http.post<{message: string, postId: string}>('http://localhost:3010/api/posts', post)
		.subscribe(responseData => {
			post.id = responseData.postId;
			this.posts.push(post);
			this.postsUpdated.next([...this.posts]);
		})
	}

	getPostById (postId: string)
	{
		this._http.get<{message: string, post: any}>(`http://localhost:3010/api/posts/${postId}`)
		.subscribe(responseData => {
			this.postsUpdated.next([responseData.post]);
		})
		return this.postsUpdated.asObservable()
	}

	deletePost (postId: string)
	{
		this._http.delete(`http://localhost:3010/api/posts/${postId}`)
		.subscribe(() => {
			this.getPosts();
			this.postsUpdated.next([...this.posts]);
		});
	}

	updatePost (id: string, title: string, content: string)
	{
		const index = this.posts.findIndex(post => post.id === id);
		const post = {id: id, title: title, content: content};
		this._http.put(`http://localhost:3010/api/posts/${id}`, {title: title, content: content})
		.subscribe(() => {
			this.posts[index] = post;
		});
	}
}


