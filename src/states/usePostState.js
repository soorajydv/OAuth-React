import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export const usePostState = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase.from('posts').select('*');
    if (!error) {
      setPosts(data);
    }
  };

  const createPost = async (newPost) => {
    const { error } = await supabase.from('posts').insert(newPost);
    if (!error) {
      fetchPosts();
    }
  };

  const updatePost = async (postId, updates) => {
    await supabase.from('posts').update(updates).eq('id', postId);
    fetchPosts();
  };

  return { posts, createPost, updatePost };
};
