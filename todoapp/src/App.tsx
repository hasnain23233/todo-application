
import './App.css'
import UserForm from './components/UserForm'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/create' element={
        <UserForm/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App
