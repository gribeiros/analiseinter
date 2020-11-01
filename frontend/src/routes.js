import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './Pages/login/Login';
import Home from './Pages/home/Home';


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/home" component={Home}/>               
            </Switch>
        </BrowserRouter>
    )
}

export default Routes