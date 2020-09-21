var express = require('express');
var router = express.Router();

var datasource = require('../data/mock_posts.js');

/** EJS: A list of the recent posts on the Bulletin Board. */
router.get('/recent', (req, res, next) => {
  datasource.recent((posts) => {
    res.render('post_list', { id: 'recent', title: 'Recent Posts', posts: posts });
  });
});

/** EJS: A list of the trending posts on the Bulletin Board. */
router.get('/trending', (req, res, next) => {
  datasource.trending((posts) => {
    res.render('post_list', { id: 'trending', title: 'Trending Posts', posts: posts });
  });
});

/** EJS: Form for creating a new post on the Bulletin Board. */
router.get('/create', (req, res, next) => {
  res.render('create_post');
});

/** EJS: The detailed view of a single post. */
router.get('/view', (req, res, next) => {
  datasource.retrieve((post) => {
    res.render('view_post', { title: 'Lorem ipsum dolor sit amet.', post: post });
  });
});

/**
 * The "Create Post" endpoint which accepts JSON to create a post.
 *
 * {
 *   title: string,
 *   message: string
 * }
 *
 * {
 *   success: boolean,
 *   redirect_uri: string,
 *   error_message: string
 * }
 */
router.post('/', function(req, res, next) {
  var post = req.body;

  datasource.create(post, function(result) {
    if (!result.success) {
      res.status(400);
    }
    res.send(result);
  });
});

/**
 * The "Upvote" endpoint which accepts JSON to either "Upvote" or "De-upvote" a post.
 *
 * {
 *   upvoted: boolean
 * }
 */
router.post('/upvotes/', function(req, res, next) {
  var vote = req.body;

  posts_data.upvote(vote, function() {
    res.send();
  });
});

module.exports = router;
