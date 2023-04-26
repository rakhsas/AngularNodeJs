const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PostModel = require('./models/post');
const app = express();

mongoose.connect('mongodb+srv://rakhsas:qrW9uKdsTohUcxSo@cluster0.rp1nzfn.mongodb.net/node-angular?retryWrites=true&w=majority')
// .then(() => {
// 	console.log('Connected to database');
// })
// .catch(() => {
// 	console.log('Connection failed');
// });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
	res.setHeader('access-Control-Allow-Origin', '*');
	res.setHeader('access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.setHeader('access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
	next();
})

app.post('/api/posts', (req, res, next) => {
	const _post = new PostModel({
		title: req.body.title,
		content: req.body.content
	});
	_post.save().then(postCreated => {
		res.status(201).json({
			message: 'Post created successfully', postId: postCreated._id
		}).send();
	})
});

app.get('/api/posts', (req, res, next) => {
	PostModel.find()
	.then(data => {
		res.status(200).json({
			message: 'Posts fetched successfully',
			posts: data
		});
	});
});

app.get('/api/posts/:id', (req, res, next) => {
	PostModel.findById(req.params.id)
	.then(data => {
		res.status(200).json({
			message: 'Post fetched successfully',
			post: data
		});
	});

});

app.delete('/api/posts/:id', (req, res, next) => {
	PostModel.findByIdAndRemove(req.params.id)
	.then(data => {
		res.status(200).json({
			message: 'Post deleted successfully'
		})
	});
});

app.put('/api/posts/:id', (req, res, next) => {
	PostModel.findByIdAndUpdate(req.params.id, {
		title : req.body.title,
		content : req.body.content
	})
	.then(data => {
		res.status(200).json({
			message: 'Post updated successfully'
		});
	})
	.catch(err => {
		message: 'Error: Post not found'
	});
});
module.exports = app;