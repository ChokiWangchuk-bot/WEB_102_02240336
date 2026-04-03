const users = [
  {
    id: "1",
    username: "traveler",
    email: "traveler@example.com",
    full_name: "Karma",
    profile_picture: "https://example.com/profiles/traveler.jpg",
    bio: "Travel photographer",
    created_at: "2023-01-15"
  },
  {
    id: "2",
    username: "foodie",
    email: "foodie@example.com",
    full_name: "Pema",
    profile_picture: "https://example.com/profiles/foodie.jpg",
    bio: "Food lover and chef",
    created_at: "2023-02-10"
  },
  {
    id: "3",
    username: "adventurer",
    email: "adventurer@example.com",
    full_name: "Tenzin",
    profile_picture: "https://example.com/profiles/adventurer.jpg",
    bio: "Mountain climber",
    created_at: "2023-03-05"
  }
];

const posts = [
  {
    id: "1",
    caption: "Beautiful sunset in the mountains!",
    image: "https://example.com/posts/sunset.jpg",
    user_id: "1",
    created_at: "2023-04-01"
  },
  {
    id: "2",
    caption: "Delicious momos I made today",
    image: "https://example.com/posts/momos.jpg",
    user_id: "2",
    created_at: "2023-04-05"
  },
  {
    id: "3",
    caption: "Summit reached!",
    image: "https://example.com/posts/summit.jpg",
    user_id: "3",
    created_at: "2023-04-10"
  }
];

const comments = [
  {
    id: "1",
    text: "Stunning view!",
    user_id: "2",
    post_id: "1",
    created_at: "2023-04-02"
  },
  {
    id: "2",
    text: "Those look amazing!",
    user_id: "1",
    post_id: "2",
    created_at: "2023-04-06"
  }
];

const likes = [
  { id: "1", user_id: "2", post_id: "1", created_at: "2023-04-02" },
  { id: "2", user_id: "3", post_id: "1", created_at: "2023-04-03" },
  { id: "3", user_id: "1", post_id: "2", created_at: "2023-04-06" }
];

const followers = [
  { id: "1", follower_id: "2", following_id: "1", created_at: "2023-03-01" },
  { id: "2", follower_id: "3", following_id: "1", created_at: "2023-03-15" },
  { id: "3", follower_id: "1", following_id: "2", created_at: "2023-03-20" }
];

module.exports = { users, posts, comments, likes, followers };