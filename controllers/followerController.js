const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const { followers, users } = require('../utils/mockData');

exports.getFollowers = asyncHandler(async (req, res, next) => {
  const userFollowers = followers.filter(f => f.following_id === req.params.userId);
  res.status(200).json({ success: true, count: userFollowers.length, data: userFollowers });
});

exports.getFollowing = asyncHandler(async (req, res, next) => {
  const userFollowing = followers.filter(f => f.follower_id === req.params.userId);
  res.status(200).json({ success: true, count: userFollowing.length, data: userFollowing });
});

exports.followUser = asyncHandler(async (req, res, next) => {
  const followerId = req.header('X-User-Id');
  if (!followerId) return next(new ErrorResponse('Not authorized', 401));

  const userToFollow = users.find(u => u.id === req.params.userId);
  if (!userToFollow) return next(new ErrorResponse('User not found', 404));

  if (followerId === req.params.userId) return next(new ErrorResponse('Cannot follow yourself', 400));

  const existingFollow = followers.find(f => f.follower_id === followerId && f.following_id === req.params.userId);
  if (existingFollow) return next(new ErrorResponse('Already following this user', 400));

  const newFollow = {
    id: (followers.length + 1).toString(),
    follower_id: followerId,
    following_id: req.params.userId,
    created_at: new Date().toISOString().slice(0, 10)
  };

  followers.push(newFollow);
  res.status(201).json({ success: true, data: newFollow });
});

exports.unfollowUser = asyncHandler(async (req, res, next) => {
  const followerId = req.header('X-User-Id');
  if (!followerId) return next(new ErrorResponse('Not authorized', 401));

  const follow = followers.find(f => f.follower_id === followerId && f.following_id === req.params.userId);
  if (!follow) return next(new ErrorResponse('You are not following this user', 404));

  const index = followers.findIndex(f => f.id === follow.id);
  followers.splice(index, 1);

  res.status(200).json({ success: true, data: {} });
});