import { useState } from 'https://cdn.skypack.dev/react@v17.0.1'
import { Switch, Route } from 'https://cdn.skypack.dev/wouter@2.7.5'
import { Country } from '../Pages/Country'
import { Header } from '../Components/Header'
import { Home } from '../Pages/Home'
import { useLocalStorage } from './useLocalStorage'
import './style.css'

export function App() {
  const [styleTheme, setStyleTheme] = useLocalStorage('styleTheme', 'light')
  //const [styleTheme, setStyleTheme] = useState('light')
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
