import { Switch, Route } from 'https://cdn.skypack.dev/wouter@2.7.5'
import { Country } from '../Pages/Country'
import { Header } from '../Components/Header'
import { Home } from '../Pages/Home'
import './style.css'

export function App() {
  console.log('App')
  return (
    <>
      <Header />
      <Switch>
        <Route path='/region/:region' component={Home} />
        <Route path='/country'>
          <Country />
        </Route>
        <Route path='/'>
          {(params) => <Home params={{ region: 'africa' }} />}
        </Route>
        <Route>404, Not Found!</Route>
      </Switch>
    </>
  )
}
