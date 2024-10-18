import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Layout, Button, Input, Card, Row, Col, Space, Avatar, message } from 'antd';
import { GoogleOutlined, LikeOutlined, ShareAltOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

const { Header, Content, Footer } = Layout;

function App() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postImage, setPostImage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase.from('posts').select('*');
    if (!error) {
      setPosts(data);
    }
  };

  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google' });
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    message.success('Logged out successfully');
  };

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
    const { error } = await supabase.from('posts').insert(newPost);
    setLoading(false);
    if (!error) {
      fetchPosts();
      setPostTitle('');
      setPostContent('');
      setPostImage('');
      message.success('Post created successfully');
    } else {
      message.error('Failed to create post');
    }
  };

  const handleLike = async (postId, currentLikes) => {
    await supabase
      .from('posts')
      .update({ like_count: currentLikes + 1 })
      .eq('id', postId);
    fetchPosts();
  };

  const handleRepost = async (postId, currentReposts) => {
    await supabase
      .from('posts')
      .update({ repost_count: currentReposts + 1 })
      .eq('id', postId);
    fetchPosts();
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: '#1890ff', padding: '0 20px' }}>
        <h1 style={{ color: '#fff', textAlign: 'center' }}>Posts App using Supabase</h1>
      </Header>
      <Content style={{ padding: '20px 50px', backgroundColor:'yellowgreen' }}>
        {!user ? (
          <div style={{ textAlign: 'center' }}>
            <Space direction="vertical">
              <Button
                type="primary"
                icon={<GoogleOutlined />}
                size="large"
                onClick={loginWithGoogle}
              >
                Login with Google
              </Button>
            </Space>
          </div>
        ) : (
          <div>
            <Space direction="horizontal" align="center" style={{ marginBottom: 20 }}>
              <Avatar icon={<UserOutlined />} />
              <span>Welcome, {user.email}</span>
              <span>
              <Button
                type="default"
                icon={<LogoutOutlined />}
                onClick={logout}
              >
                Logout
              </Button>
              </span>
            </Space>

            {/* Post creation form */}
            <Card title="Create a New Post" style={{ marginBottom: 20 }}>
              <Input
                type="text"
                placeholder="Post Title"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                style={{ marginBottom: 10 }}
              />
              <ReactQuill
                theme="snow"
                value={postContent}
                onChange={setPostContent}
                style={{ marginBottom: 10 }}
              />
              <Input
                type="text"
                placeholder="Image URL (optional)"
                value={postImage}
                onChange={(e) => setPostImage(e.target.value)}
                style={{ marginBottom: 10 }}
              />
              <Button
                type="primary"
                loading={loading}
                onClick={handlePostSubmit}
              >
                {loading ? 'Posting...' : 'Submit Post'}
              </Button>
            </Card>

            {/* Display posts */}
            <h2>All Posts</h2>
            <Row gutter={[16, 16]}>
              {posts.map((post) => (
                <Col key={post.id} xs={24} sm={12} lg={8}>
                  <Card
                    title={post.title}
                    cover={post.image ? <img src={post.image} alt="Post" /> : null}
                    actions={[
                      <Button
                        icon={<LikeOutlined />}
                        onClick={() => handleLike(post.id, post.like_count)}
                      >
                        {post.like_count} Likes
                      </Button>,
                      <Button
                        icon={<ShareAltOutlined />}
                        onClick={() => handleRepost(post.id, post.repost_count)}
                      >
                        {post.repost_count} Reposts
                      </Button>,
                    ]}
                  >
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Supabase Posts App ©2024 Created by Sooraj Ydv 
      </Footer>
    </Layout>
  );
}

export default App;
