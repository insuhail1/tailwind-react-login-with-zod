import React from "react";
import { IPosts, Posts } from "components/Posts";

export const PostsPage = () => {
  const posts: IPosts["posts"] = [
    {
      authorName: "Theresa Webb",
      subTitle: "5mins ago",
      emoji: "👋",
      commentsCount: 24,
      src: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      authorName: "Marvin McKinney",
      subTitle: "8mins ago • Edited",
      emoji: "😞",
      src: "https://images.ctfassets.net/h6goo9gw1hh6/5YHQdIfeHuEzkzf6dGMOJ3/abd8b8407b82dbf31d29df8f89af34dc/2-professional-a.jpg?w=1200&h=600&q=70&fm=webp",
      commentsCount: 18,
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Posts posts={posts} />
    </div>
  );
};
