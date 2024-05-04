import './App.css'
import { Outlet } from 'react-router-dom'
import NavBarComponent from './components/NavBarComponent'

function App() {

  return (
    <div className='App'>
     <NavBarComponent />
      <Outlet />
    </div>
  )
}

export default App
