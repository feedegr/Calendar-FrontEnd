import React from 'react';
import { Provider } from 'react-redux';  //provee info a sus hijos

import { store } from './store/store';
import { AppRouter } from './router/AppRouter'

export const CalendarApp = () => {
  return (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
  )
}
