import React, { useEffect, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Login from '../views/login/Login'
import NewsSandBox from '../views/sandbox/NewsSandBox'

const IndexRouter = withRouter((props) => {

    const [state, setState] = useState(false)

    useEffect(() => {
        if(window.location.hash === '#/') {
            props.history.replace('login')
        }
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if(JSON.parse(localStorage.getItem("token"))?.username === "jhmt" && JSON.parse(localStorage.getItem("token"))?.password === "jhmt"){
            setState(true)
        }else {
            setState(false)
        }
    })

    return (
        <Switch>
            <Route path="/login" component={Login} />
            {/* <Route path="/" component={NewsSandBox}/> */}
            <Route path="/" render={() =>
                (state) ?
                    <NewsSandBox ></NewsSandBox> :
                    <Redirect to="/login" />
            } />
        </Switch>
    )
})

export default IndexRouter