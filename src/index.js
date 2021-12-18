import { StrictMode } from 'https://cdn.skypack.dev/react@v17.0.1'
import ReactDom from 'https://cdn.skypack.dev/react-dom@v17.0.1'
import { App } from './App'

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('app')
)
