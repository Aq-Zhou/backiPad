import React, { useEffect, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Login from '../views/login/Login'
import NewsSandBox from '../views/sandbox/NewsSandBox'

const IndexRouter = withRouter((props) => {


    // console.log('window.location.hash', window.location.hash)
    const fn = () => {
        if(window.location.hash === '#/' && !JSON.parse(localStorage.getItem("token"))) {
            props.history.replace('login')
        } else if(JSON.parse(localStorage.getItem("token"))) {
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