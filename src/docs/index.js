import React from 'react';
import { Layout, Typography, Card } from 'antd';

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

const libraries = [
  {
    name: 'React',
    description: 'React is a JavaScript library for building user interfaces, particularly for single-page applications.',
    reason: [
      'Component-Based Architecture: Facilitates code reuse and organization, making it easier to manage and scale the application.',
      'Virtual DOM: Enhances performance by minimizing direct manipulation of the actual DOM.',
    ],
  },
  {
    name: 'Ant Design',
    description: 'Ant Design is a UI design language and React UI library for building enterprise-level products.',
    reason: [
      'Comprehensive Component Library: Provides a rich set of pre-designed components that ensure a consistent look and feel across the application.',
      'Responsive Design: Supports responsive layouts out of the box, which is crucial for a mobile-friendly experience.',
    ],
  },
  {
    name: 'Supabase',
    description: 'Supabase is an open-source Firebase alternative that provides a backend-as-a-service with a PostgreSQL database.',
    reason: [
      'Ease of Use: Simplifies database management and authentication, allowing for quick development cycles.',
      'Real-time Capabilities: Enables real-time data synchronization, enhancing the user experience when interacting with posts.',
      'PostgreSQL: Leverages powerful features of PostgreSQL for data integrity and complex queries.',
    ],
  },
  {
    name: 'React Quill',
    description: 'React Quill is a rich text editor built for React applications.',
    reason: [
      'User-Friendly: Provides a simple interface for users to create rich content without needing to know HTML.',
      'Customization: Easily customizable to meet specific formatting needs of the application.',
    ],
  },
  {
    name: 'Ant Design Icons',
    description: 'A set of high-quality icons that are easy to use in Ant Design projects.',
    reason: [
      'Consistency: Icons match the design language of Ant Design, ensuring a cohesive user interface.',
      'Ease of Use: Simple integration with Ant Design components enhances the overall user experience.',
    ],
  },
  {
    name: 'React Router',
    description: 'React Router is a standard routing library for React applications.',
    reason: [
      'Dynamic Routing: Allows for dynamic routing and navigation within the application, creating a seamless user experience.',
      'Declarative Routing: Makes it easy to manage routes declaratively, keeping the code clean and understandable.',
    ],
  },
];

const Docs = () => {
  return (
    <Layout style={{ minHeight: '100vh',backgroundColor:'transparent' }}>
      <Header style={{   textAlign: 'center',borderRadius:'10   px' }}>
        <h1 style={{  marginTop: "0px", color: "white",textAlign: "center" }}>Posts App Documentation</h1>
      </Header>
      <Content style={{ padding: '20px 50px' }}>
        {libraries.map((library, index) => (
          <Card key={index} style={{ marginBottom: 20 }}>
            <Title level={3}>{library.name}</Title>
            <Paragraph>{library.description}</Paragraph>
            <Title level={4}>Reasons for Choice:</Title>
            <ul>
              {library.reason.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Card>
        ))}
      </Content>
      
    </Layout>
  );
};

export default Docs;
