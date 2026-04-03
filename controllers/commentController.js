const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const { comments, posts, users } = require('../utils/mockData');

exports.getComments = asyncHandler(async (req, res, next) => {
  const postComments = req.params.postId
    ? comments.filter(c => c.post_id === req.params.postId)
    : comments;

  res.status(200).json({ success: true, count: postComments.length, data: postComments });
});

exports.getComment = asyncHandler(async (req, res, next) => {
  const comment = comments.find(c => c.id === req.params.id);
  if (!comment) return next(new ErrorResponse(`Comment not found with id of ${req.params.id}`, 404));
  res.status(200).json({ success: true, data: comment });
});

exports.createComment = asyncHandler(async (req, res, next) => {
  const userId = req.header('X-User-Id');
  if (!userId) return next(new ErrorResponse('Not authorized', 401));

  const post = posts.find(p => p.id === req.body.post_id);
  if (!post) return next(new ErrorResponse('Post not found', 404));

  const newComment = {
    id: (comments.length + 1).toString(),
    text: req.body.text,
    user_id: userId,
    post_id: req.body.post_id,
    created_at: new Date().toISOString().slice(0, 10)
  };

  comments.push(newComment);
  res.status(201).json({ success: true, data: newComment });
});

exports.updateComment = asyncHandler(async (req, res, next) => {
  const userId = req.header('X-User-Id');
  if (!userId) return next(new ErrorResponse('Not authorized', 401));

  let comment = comments.find(c => c.id === req.params.id);
  if (!comment) return next(new ErrorResponse(`Comment not found with id of ${req.params.id}`, 404));
  if (comment.user_id !== userId) return next(new ErrorResponse('Not authorized to update this comment', 401));

  const index = comments.findIndex(c => c.id === req.params.id);
  comments[index] = { ...comment, ...req.body, id: comment.id, user_id: comment.user_id };

  res.status(200).json({ success: true, data: comments[index] });
});

exports.deleteComment = asyncHandler(async (req, res, next) => {
  const userId = req.header('X-User-Id');
  if (!userId) return next(new ErrorResponse('Not authorized', 401));

  const comment = comments.find(c => c.id === req.params.id);
  if (!comment) return next(new ErrorResponse(`Comment not found with id of ${req.params.id}`, 404));
  if (comment.user_id !== userId) return next(new ErrorResponse('Not authorized to delete this comment', 401));

  const index = comments.findIndex(c => c.id === req.params.id);
  comments.splice(index, 1);

  res.status(200).json({ success: true, data: {} });
});