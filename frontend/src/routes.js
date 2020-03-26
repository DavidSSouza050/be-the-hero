import React from 'react';
import { BrowserRouter, Route, Switch }  from 'react-router-dom';


import Register from './pages/Register'
import Logon from './pages/Logon';
import Profile from './pages/Profile'
import NewIncident from './pages/NewIncident';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route  path="/"  exact ><Logon/></Route>
                <Route path="/register" ><Register/></Route>
                
                <Route path="/profile" ><Profile/></Route>
                <Route path="/incidents/new" ><NewIncident/></Route>
            </Switch>
        </BrowserRouter>
    );
}