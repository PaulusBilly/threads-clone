import { User, Post } from "./types";

export const users: User[] = [
  {
    id: "1",
    username: "johndoe",
    name: "John Doe",
    image: "https://i.pravatar.cc/150?img=1",
    bio: "Software engineer and tech enthusiast",
  },
  {
    id: "2",
    username: "janesmith",
    name: "Jane Smith",
    image: "https://i.pravatar.cc/150?img=2",
    bio: "Digital artist and creative mind",
  },
  {
    id: "3",
    username: "mikebrown",
    name: "Mike Brown",
    image: "https://i.pravatar.cc/150?img=3",
    bio: "Coffee lover and travel photographer",
  },
  {
    id: "4",
    username: "sarahlee",
    name: "Sarah Lee",
    image: "https://i.pravatar.cc/150?img=4",
    bio: "Fitness trainer and wellness coach",
  },
  {
    id: "5",
    username: "alexchen",
    name: "Alex Chen",
    image: "https://i.pravatar.cc/150?img=5",
    bio: "Music producer and DJ",
  },
];

export const posts: Post[] = [
  {
    id: "1",
    createdAt: "2024-03-15T10:00:00Z",
    content:
      "Just launched my new website! Check it out and let me know what you think. #webdev #coding",
    user_id: "1",
    user: users[0],
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: "2",
    createdAt: "2024-03-15T10:30:00Z",
    content: "Beautiful day for a photoshoot! 📸 #photography #nature",
    user_id: "2",
    user: users[1],
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: "3",
    createdAt: "2024-03-15T11:00:00Z",
    content: "Just finished my morning coffee ☕️ Ready to tackle the day!",
    user_id: "3",
    user: users[2],
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: "4",
    createdAt: "2024-03-15T11:15:00Z",
    content: "New workout routine is paying off! 💪 #fitness #motivation",
    user_id: "4",
    user: users[3],
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: "5",
    createdAt: "2024-03-15T11:30:00Z",
    content: "Working on some new beats in the studio 🎵 #music #producer",
    user_id: "5",
    user: users[4],
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: "6",
    createdAt: "2024-03-15T12:00:00Z",
    content: "That's awesome! What tech stack did you use?",
    user_id: "2",
    user: users[1],
    parent_id: "1",
    parent: null,
    replies: [],
  },
  {
    id: "7",
    createdAt: "2024-03-15T12:15:00Z",
    content: "React and Node.js! It's been a great learning experience.",
    user_id: "1",
    user: users[0],
    parent_id: "6",
    parent: null,
    replies: [],
  },
  {
    id: "8",
    createdAt: "2024-03-15T12:30:00Z",
    content: "Love the composition! Where was this taken?",
    user_id: "3",
    user: users[2],
    parent_id: "2",
    parent: null,
    replies: [],
  },
  {
    id: "9",
    createdAt: "2024-03-15T12:45:00Z",
    content:
      "At the local botanical garden! The lighting was perfect this morning.",
    user_id: "2",
    user: users[1],
    parent_id: "8",
    parent: null,
    replies: [],
  },
  {
    id: "10",
    createdAt: "2024-03-15T13:00:00Z",
    content: "What's your favorite coffee shop?",
    user_id: "4",
    user: users[3],
    parent_id: "3",
    parent: null,
    replies: [],
  },
  {
    id: "11",
    createdAt: "2024-03-15T13:15:00Z",
    content: "Can't wait to hear the new tracks!",
    user_id: "1",
    user: users[0],
    parent_id: "5",
    parent: null,
    replies: [],
  },
  {
    id: "12",
    createdAt: "2024-03-15T13:30:00Z",
    content: "Thanks! I'll share a preview soon!",
    user_id: "5",
    user: users[4],
    parent_id: "11",
    parent: null,
    replies: [],
  },
  {
    id: "13",
    createdAt: "2024-03-15T13:45:00Z",
    content: "Looking great! What's your routine?",
    user_id: "5",
    user: users[4],
    parent_id: "4",
    parent: null,
    replies: [],
  },
  {
    id: "14",
    createdAt: "2024-03-15T14:00:00Z",
    content:
      "Mostly HIIT and strength training! I can share my workout plan if you're interested.",
    user_id: "4",
    user: users[3],
    parent_id: "13",
    parent: null,
    replies: [],
  },
  {
    id: "15",
    createdAt: "2024-03-15T14:15:00Z",
    content: "Yes, please! That would be amazing!",
    user_id: "5",
    user: users[4],
    parent_id: "14",
    parent: null,
    replies: [],
  },
];

// Helper function to build the reply tree
export function buildReplyTree(posts: Post[]): Post[] {
  const postMap = new Map(posts.map((post) => [post.id, { ...post }]));
  const rootPosts: Post[] = [];

  posts.forEach((post) => {
    const currentPost = postMap.get(post.id)!;
    if (post.parent_id) {
      const parentPost = postMap.get(post.parent_id)!;
      if (!parentPost.replies) {
        parentPost.replies = [];
      }
      parentPost.replies.push(currentPost);
      currentPost.parent = parentPost;
    } else {
      rootPosts.push(currentPost);
    }
  });

  return rootPosts;
}

export const postsWithReplies = buildReplyTree(posts);
