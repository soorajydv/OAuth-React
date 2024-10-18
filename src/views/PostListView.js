import React from 'react';
import { Row, Col } from 'antd';
import PostCardView from './PostCardView';

const PostListView = ({ posts, handleLike, handleRepost }) => {
  return (
    <Row gutter={[16, 16]}>
      {posts.map((post) => (
        <Col key={post.id} xs={24} sm={12} lg={8}>
          <PostCardView post={post} handleLike={handleLike} handleRepost={handleRepost} />
        </Col>
      ))}
    </Row>
  );
};

export default PostListView;
