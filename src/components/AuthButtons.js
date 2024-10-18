import React from 'react';
import { Button, Space } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';

const AuthButtons = ({ onLogin }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Space direction="vertical">
        <Button
          type="primary"
          icon={<GoogleOutlined />}
          size="large"
          onClick={onLogin}
        >
          Login with Google
        </Button>
      </Space>
    </div>
  );
};

export default AuthButtons;
