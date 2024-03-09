import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react'
import styled from 'styled-components';

const { Sider } = Layout;

const StyledSiderMenu = styled(Menu)`
    border-right: 0;
    padding: 10px;
`
const StyledSider = styled(Sider)`
    display: flex;
`

const SiderMenu = () => {
    const {
        token: { colorBgContainer, },
    } = theme.useToken();
    
    return (
        <>
            <StyledSider width={255} style={{ background: colorBgContainer, }}>
                <StyledSiderMenu >
                    Sider Item
                </StyledSiderMenu>
            </StyledSider>
        </>
    )
}

export default SiderMenu