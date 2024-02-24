import Home from './Axios Crud/Home'
import Read from './Axios Crud/Read'
import Create from './Axios Crud/Create'
import Update from './Axios Crud/Update'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/create' element={<Create/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/read/:id' element={<Read/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
