import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import { Home } from '../pages/Home'

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
