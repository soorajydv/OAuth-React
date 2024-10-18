import React from 'react';
import { Button, Space } from 'antd';
import { GoogleOutlined, LogoutOutlined } from '@ant-design/icons';

const AuthButtonsView = ({ user, loginWithGoogle, logout,loading }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Space direction="vertical">
        {!user ? (
          <Button
            type="primary"
            icon={<GoogleOutlined />}
            size="large"
            onClick={loginWithGoogle}
          loading={loading} // Set loading state for the button
        >
          {loading ? 'Logging in...' : 'Login with Google'}
          </Button>
        ) : (
          <Button direction="horizantal" type="default" icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Button>
        )}
      </Space>
    </div>
  );
};

export default AuthButtonsView;
