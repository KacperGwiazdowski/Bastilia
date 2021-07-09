import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { useAuthenticated } from '../hooks'
import { Form } from './form'

export const Login = () => {

    const authenticated = useAuthenticated();
    if(authenticated)
       return <Redirect to="/home" />

    return <Switch>
        <Route exact path="/login" component={Form} />
    </Switch>
}