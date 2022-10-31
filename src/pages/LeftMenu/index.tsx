import React, { useState } from 'react'
import { Button, Menu, Switch } from 'antd';
import type { MenuProps, MenuTheme } from 'antd';

import { EMenuTheme } from '../../constans/type';

import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
  } from '@ant-design/icons';

import * as styles from './index.module.css';

export default function Index() {
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState<MenuTheme>('light');

  type MenuItem = Required<MenuProps>['items'][number];
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Option 3', '3', <ContainerOutlined />),
  
    getItem('Navigation One', 'sub1', <MailOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Option 7', '7'),
      getItem('Option 8', '8'),
    ]),
  
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
  
      getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    ]),
  ];
 
  /**
   * 展开收起菜单
   */
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  /**
   * 改变主题色
   * @param value 
   */
  const changeTheme = (value: boolean) => {
    setTheme(value ? EMenuTheme.DARK : EMenuTheme.LIGHT);
  };
  return (
    <div style={{ width: 256 }}>
      <div className={styles.utilsWrapper}>
        <Switch
            checked={theme === 'dark'}
            onChange={changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
        />
        <Button type="primary" onClick={toggleCollapsed}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme={theme}
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  )
}
