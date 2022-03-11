import IndexRouter from './router/IndexRouter'
import {BrowserRouter} from 'react-router-dom'
import './App.css'

function App(){
  return (
    <BrowserRouter>
      <IndexRouter></IndexRouter>
    </BrowserRouter>
  )
}
export default App