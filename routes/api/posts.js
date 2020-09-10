const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const Post = require("../../models/Post");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route   GET api/posts
// @desc    Create a post
// @access  Private
router.post(
	"/",
	[auth, [check("text", "Text is required").not().isEmpty()]],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			// Get post's user
			const user = await User.findById(req.user.id).select("-password");

			// Create new Post
			const newPost = new Post({
				text: req.body.text,
				name: user.name,
				avatar: user.avatar,
				user: req.user.id,
			});

			// Save post to db
			const post = await newPost.save();

			res.json(post);
		} catch (error) {
			console.error(error);
			res.status(500).send("Server Error");
		}
	}
);

module.exports = router;
