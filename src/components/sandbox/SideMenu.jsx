import React from 'react'
import { Layout, Menu } from 'antd';
import './index.css'
import { withRouter } from 'react-router-dom'
import {
  AppleOutlined,
  RadarChartOutlined
} from '@ant-design/icons';
const { Sider } = Layout;


function SideMenu(props) {




  // console.log(props.location.pathname)
  const selectKeys = [props.location.pathname]
  const openKeys = ["/" + props.location.pathname.split("/")[1]]
  // console.log('openKeys', openKeys)
  return (
    <Sider trigger={null} collapsible collapsed={false} >
      <div style={{ display: "flex", height: "100%", "flexDirection": "column" }}>
        <div className="logo" >发布管理系统</div>
        <div style={{ flex: 1, "overflow": "auto" }}>
          <Menu theme="dark" mode="inline" selectedKeys={selectKeys} className="aaaaaaa" openKeys={openKeys}>
            <Menu.Item key="/home" icon={<AppleOutlined />} onClick={()=>{props.history.push('/home')}}>
              首页
            </Menu.Item>
            <Menu.Item key="/list" icon={<RadarChartOutlined />} onClick={()=>{props.history.push('/list')}}>
              列表
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </Sider>
  )
}
export default withRouter(SideMenu)