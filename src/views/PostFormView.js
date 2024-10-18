import React from 'react';
import { Input, Button, Card } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PostFormView = ({
  postTitle,
  postContent,
  postImage,
  onTitleChange,
  onContentChange,
  onImageChange,
  onSubmit,
  loading,
}) => {
  return (
    <Card title="Create a New Post" style={{ marginBottom: 20 }}>
      <Input
        type="text"
        placeholder="Post Title"
        value={postTitle}
        onChange={onTitleChange}
        style={{ marginBottom: 10 }}
      />
      <ReactQuill
        theme="snow"
        value={postContent}
        onChange={onContentChange}
        style={{ marginBottom: 10 }}
      />
      <Input
        type="text"
        placeholder="Image URL (optional)"
        value={postImage}
        onChange={onImageChange}
        style={{ marginBottom: 10 }}
      />
      <Button type="primary" loading={loading} onClick={onSubmit}>
        {loading ? 'Posting...' : 'Submit Post'}
      </Button>
    </Card>
  );
};

export default PostFormView;
