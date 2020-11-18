import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'
import Login from '../components/template/Login'
import SignUp from '../components/template/signup'
import List from '../components/Lists/List'
import Results from '../components/results/Results'

export default props=>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/user' component={UserCrud}/>
        <Route path='/login' component={Login}/>
        <Route path='/registrar' component={SignUp}/>
        <Route path='/list' component={List}/>
        <Route path='/results' component={Results}/>
        <Redirect from="*" to="/"/>
    </Switch>