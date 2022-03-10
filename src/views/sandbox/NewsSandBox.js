import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import SideMenu from '../../components/sandbox/SideMenu.jsx'
import TopHeader from '../../components/sandbox/TopHeader'
import Home from './home/Home'
import Nopermission from './nopermission/Nopermission'
import RightList from './right-manage/RightList'
import RoleList from './right-manage/RoleList'
import UserList from './user-manage/UserList'

//css
import './NewsSandBox.css'

//antd
import { Layout } from 'antd'
const {Content} = Layout

export default function NewsSandBox() {
    return (
        <Layout>
            <SideMenu></SideMenu>
            <Layout className="site-layout">
                <TopHeader></TopHeader>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/list" component={UserList} />
                        <Route path="/role" component={RoleList} />
                        <Route path="/right-manage/right/list" component={RightList} />

                        <Redirect from="/" to="/home" exact />
                        <Route path="*" component={Nopermission} />
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    )
}
