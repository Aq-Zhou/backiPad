import React from 'react'
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
    // console.log('JSON.parse(localStorage.getItem("token"))', JSONss.parse(localSstorage.getItem("token")))

    const fn = () => {
        // if(window.location.hash === '/chiaki/' && !(localStorage.getItem("token"))) {
        //     props.history.replace('logins')
        // } else 
        if(localStorage.getItem("token")) {
           return true
        } else {
            return false
        }
    }

    return (
        <Switch>
            <Route path="/chiaki/login" component={Login} exact />
            <Route path="/chiaki" component={Login} exact />
            {/* <Route path="/" component={NewsSandBox}/> */}
            <Route path="/chiaki/" render={ () => fn() ?
                    <NewsSandBox ></NewsSandBox> :
                    <Redirect to="/chiaki/login" />
            } />
        </Switch>
    )
})

export default IndexRouter