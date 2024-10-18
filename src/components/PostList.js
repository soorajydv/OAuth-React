import React from 'react';
import PostListView from '../views/PostListView';
import { usePostState } from '../states/usePostState';

const PostList = () => {
  const { posts, updatePost } = usePostState();

  const handleLike = (postId) => {
    const post = posts.find((post) => post.id === postId);
    updatePost(postId, { like_count: post.like_count + 1 });
  };

  const handleRepost = (postId) => {
    const post = posts.find((post) => post.id === postId);
    updatePost(postId, { repost_count: post.repost_count + 1 });
  };

  return <PostListView posts={posts} handleLike={handleLike} handleRepost={handleRepost} />;
};

export default PostList;
