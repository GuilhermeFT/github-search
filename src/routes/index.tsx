import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Home } from 'src/pages/home'

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
