
import './App.css'
import UserForm from './components/UserForm'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import AllTodos from './components/AllTodos';

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/create' element={
        <UserForm/>}/><Route path='/all-todos' element={
        <AllTodos/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App
