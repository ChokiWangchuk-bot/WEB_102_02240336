const express = require('express');
const { getLikes, addLike, removeLike } = require('../controllers/likeController');

const router = express.Router();

router.route('/').get(getLikes).post(addLike);
router.route('/:id').delete(removeLike);

module.exports = router;