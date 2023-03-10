import './App.css';

// Components Import
import NavBar from './components/NavBar';
import CRUDApplication from './components/CRUDApplication';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

// react-router-dom
import { BrowserRouter, Routes , Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element = {<CRUDApplication/>} /> 
        <Route path='/all' element = {<AllUsers />} />
        <Route path='/add' element = {<AddUser />} />
        <Route path='/edit/:id' element = {<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
