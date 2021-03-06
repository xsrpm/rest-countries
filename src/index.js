import { StrictMode, useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import { Router } from 'wouter'
import { App } from './App'

// returns the current hash location in a normalized form
// (excluding the leading '#' symbol)
const currentLocation = () => {
  return window.location.hash.replace(/^#/, '') || '/'
}

const navigate = (to) => (window.location.hash = to)

const useHashLocation = () => {
  const [loc, setLoc] = useState(currentLocation())

  useEffect(() => {
    // this function is called whenever the hash changes
    const handler = () => setLoc(currentLocation())

    // subscribe to hash changes
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  return [loc, navigate]
}

ReactDom.render(
  <StrictMode>
    <Router hook={useHashLocation}>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById('app')
)
