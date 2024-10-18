import React from 'react';
import { Card, Button } from 'antd';
import { LikeOutlined, ShareAltOutlined } from '@ant-design/icons';

const PostCardView = ({ post, handleLike, handleRepost }) => {
  return (
    <Card
      title={post.title}
      cover={post.image ? <img src={post.image} alt="Post" /> : null}
      actions={[
        <Button icon={<LikeOutlined />} onClick={() => handleLike(post.id)}>
          {post.like_count} Likes
        </Button>,
        <Button icon={<ShareAltOutlined />} onClick={() => handleRepost(post.id)}>
          {post.repost_count} Reposts
        </Button>,
      ]}
    >
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Card>
  );
};

export default PostCardView;
