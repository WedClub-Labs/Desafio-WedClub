import { Route, Switch } from 'react-router'
import Home from './pages/Home/Home'
import UserDetails from './pages/UserDetails/UserDetails'

export default function App() {
  return (
    <Switch>
      <Route path="/user/:id">
        <UserDetails />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}
