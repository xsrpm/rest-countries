import { Switch, Route } from 'wouter'

import { Country } from '../Pages/Country'
import { Header } from '../Components/Header'
import { Home } from '../Pages/Home'
import { useLocalStorage } from './useLocalStorage'
import './style.css'

export function App() {
  const [styleTheme, setStyleTheme] = useLocalStorage('styleTheme', 'light')
  if (styleTheme !== 'light')
    document.getElementsByTagName('body')[0].classList.add('darkMode')
  return (
    <>
      <Header styleTheme={styleTheme} setStyleTheme={setStyleTheme} />
      <Switch>
        <Route path='/region/:region'>
          {(params) => <Home styleTheme={styleTheme} params={params} />}
        </Route>
        <Route path='/country/:country'>
          {(params) => <Country styleTheme={styleTheme} params={params} />}
        </Route>
        <Route path='/'>
          {() => <Home styleTheme={styleTheme} params={{ region: 'africa' }} />}
        </Route>
        <Route>404, Not Found!</Route>
      </Switch>
    </>
  )
}
