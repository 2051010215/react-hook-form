import { BarChartOutlined, CloudOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, } from 'antd';
import React, { useState } from 'react'
import styled from 'styled-components';

const { Sider } = Layout;

const StyledSider = styled(Sider)`
    overflow: "auto";
    height: "100vh";
    position: "sticky";
    top: 0;
    left: 0;
    z-index: 9999;
`

const SiderMenu = () => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <>
            <StyledSider
                collapsible
                collapsed={collapsed}
                onCollapse={() => setCollapsed(!collapsed)}
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["2"]}>
                    <Menu.Item key="1">
                        <UserOutlined />
                        <span className="nav-text">Profile</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <VideoCameraOutlined />
                        <span className="nav-text">Camera</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <UploadOutlined />
                        <span className="nav-text">Upload</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <BarChartOutlined />
                        <span className="nav-text">Chars</span>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <CloudOutlined />
                        <span className="nav-text">Cloud</span>
                    </Menu.Item>
                </Menu>
            </StyledSider>
        </>
    )
}

export default SiderMenu