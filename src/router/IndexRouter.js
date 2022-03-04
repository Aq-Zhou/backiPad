import React from 'react'
import {HashRouter,Redirect,Route, Switch} from 'react-router-dom'
import Login from '../views/login/Login'
import NewsSandBox from '../views/sandbox/NewsSandBox'
export default function IndexRouter() {

    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                {/* <Route path="/" component={NewsSandBox}/> */}
                <Route path="/" render={()=>
                    (JSON.parse(localStorage.getItem("token")).username === "jhmt" &&  JSON.parse(localStorage.getItem("token")).password === "jhmt")?
                    <NewsSandBox ></NewsSandBox>:
                    <Redirect to="/login"/>
                }/>
            </Switch>
        </HashRouter>
    )
}
