import React, { useEffect, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Login from '../views/login/Login'
import NewsSandBox from '../views/sandbox/NewsSandBox'

const IndexRouter = withRouter((props) => {

    // const token = localStorage.getItem('token')
    // console.log('token', token)
    // console.log(token instanceof Object );
    // console.log('localStorage.getItem("token")', localStorage.getItem("token"))
    
    // 假如取到了null
    // console.log('localStorage.getItem("token")', !localStorage.getItem("token"))

    // console.log('JSON.stringify(localStorage.getItem("token"))', JSON.stringify(localStorage.getItem("token")))
    // console.log('JSON.parse(localStorage.getItem("token"))', JSON.parse(localStorage.getItem("token")))

    const fn = () => {
        if(window.location.hash === '#/' && !(localStorage.getItem("token"))) {
            props.history.replace('login')
        } else if(localStorage.getItem("token")) {
           return true
        } else {
            return false
        }
    }

    return (
        <Switch>
            <Route path="/login" component={Login} exact />
            {/* <Route path="/" component={NewsSandBox}/> */}
            <Route path="/" render={ () => fn() ?
                    <NewsSandBox ></NewsSandBox> :
                    <Redirect to="/login" />
            } />
        </Switch>
    )
})

export default IndexRouter