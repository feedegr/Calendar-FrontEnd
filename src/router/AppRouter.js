import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import { startChecking } from '../actions/auth'
import { LoginScreen } from '../components/auth/LoginScreen'
import { CalendarScreen } from '../components/calendar/CalendarScreen'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  
  
  const { checking, uid } = useSelector( state => state.auth );
  const dispatch = useDispatch();
  
  

  useEffect(() => {
    
    dispatch (startChecking());
  
  }, [dispatch])
  
  if (checking) {
    return <div>Checking...</div>
  }
  

  return (
    
    <Router>
      <div>
      <Switch>

        <PublicRoute
          exact
          path="/login"
          component={LoginScreen}
          isAuth={!!uid}
        />

        <PrivateRoute
          exact
          path="/"
          component={CalendarScreen}
          isAuth={!!uid}
        />

        <Redirect to="/" />

      </Switch>
      </div>
    </Router>

  )
}
