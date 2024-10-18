import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout, message, Space, Avatar, Button } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { supabase } from './supabaseClient';
import AuthButtons from './components/AuthButtons';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import Docs from './docs'; // Import your Docs component

const { Header, Content, Footer } = Layout;

const App = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });
    fetchPosts();

    // Clean up listener on unmount
    return () => {
      if (authListener) {
        authListener.subscription.unsubscribe();
      }
    };
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase.from('posts').select('*');
    if (!error) {
      setPosts(data);
    } else {
      message.error('Error fetching posts');
    }
  };

  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google' });
    fetchPosts(); // Optionally fetch posts again after login
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    message.success('Logged out successfully');
  };

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ backgroundColor: '#1890ff', padding: '0 20px' }}>
          <h1 style={{  marginTop: "0px", color: "white",textAlign: "center" }}>Posts App using Supabase</h1>
        </Header>
        <Content style={{ marginTop: '0px',  padding: '20px 50px', backgroundColor: 'yellowgreen' }}>
          <Routes>
            <Route path="/docs" element={<Docs />} />
            <Route path="/" element={
              !user ? (
                <AuthButtons onLogin={loginWithGoogle} />
              ) : (
                <>
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
                  <PostForm user={user} onPostCreated={fetchPosts} />
                  <h2>All Posts</h2>
                  <PostList posts={posts} onFetchPosts={fetchPosts} />
                </>
              )
            } />
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Supabase Posts App ©2024 Created by Sooraj Ydv
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
