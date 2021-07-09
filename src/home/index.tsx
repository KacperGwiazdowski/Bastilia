import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { useAuthenticated } from '../hooks';

import { Stocks } from './stocks';
import { Topbar } from './topbar';


export const Home = () => {

    const authenticated = useAuthenticated();

    if(!authenticated)
        return <Redirect to="/login"/>
    
    return <div className="flex-container vertical">
            <Topbar />
            <Switch>
                <Route path="/home" component={Stocks}/>
            </Switch>
        </div>

}