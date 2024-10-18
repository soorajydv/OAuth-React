import React, { useState } from 'react';
import PostFormView from '../views/PostFormView';
import { usePostState } from '../states/usePostState';

const PostForm = ({ user }) => {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postImage, setPostImage] = useState('');
  const [loading, setLoading] = useState(false);

  const { createPost } = usePostState();

  const handlePostSubmit = async () => {
    setLoading(true);
    const newPost = {
      title: postTitle,
      content: postContent,
      image: postImage || null,
      like_count: 0,
      repost_count: 0,
      user_id: user.id,
    };
    await createPost(newPost);
    setLoading(false);
    setPostTitle('');
    setPostContent('');
    setPostImage('');
  };

  return (
    <PostFormView
      postTitle={postTitle}
      postContent={postContent}
      postImage={postImage}
      onTitleChange={(e) => setPostTitle(e.target.value)}
      onContentChange={setPostContent}
      onImageChange={(e) => setPostImage(e.target.value)}
      onSubmit={handlePostSubmit}
      loading={loading}
    />
  );
};

export default PostForm;
