import React from 'react';
import { DownOutlined, GlobalOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Space, theme, Dropdown } from 'antd';
import CardBody from './Card';
import { StyledButton } from '../styles/StyledComponents';
import SiderMenu from './Sider';

const { Header, Content} = Layout;
const items = [
  {
    label: <a>1st menu item</a>,
    key: '0',
  },
  {
    label: <a>2nd menu item</a>,
    key: '1',
  },
];

const Body = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <Layout>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <StyledButton mode="horizontal" > Home </StyledButton>
          <StyledButton mode="horizontal" > About Us </StyledButton>
          <StyledButton mode="horizontal" > Our Team </StyledButton>
          <StyledButton mode="horizontal" > Connenct Wallet </StyledButton>
          <StyledButton mode="horizontal" >
            <Dropdown
              menu={{
                items,
              }}
              trigger={['click']}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <GlobalOutlined />
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </StyledButton>
        </Header>

        <Layout>
          <SiderMenu/>
          <Layout style={{padding: '0 24px 24px',}}>
            <Breadcrumb style={{ margin: '16px 0', }}>
              <Breadcrumb.Item>Album Photos</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >

              <CardBody />

            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};
export default Body;