import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './Pages/Login';
import SignUp from './components/signup.component';


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Login}/>
                <Route path="/registrar" component={SignUp}/>
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes