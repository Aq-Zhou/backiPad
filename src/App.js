import IndexRouter from './router/IndexRouter'
import {HashRouter} from 'react-router-dom'
import './App.css'

function App(){
  return (
    <HashRouter>
      <IndexRouter></IndexRouter>
    </HashRouter>
  )
}
export default App