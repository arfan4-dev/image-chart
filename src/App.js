import logo from './logo.svg';
import './App.css';
import Register from './page/Register';
import Login from './page/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import ProtectedRoute from './component/ProtectedRoute';
import Charts from './component/Charts';
import DisplayPhoto from './component/DisplayPhoto';

function App() {
  return (
    <Routes >
     <Route path='/' element={<Register/>}/>
     <Route path='/login' element={<Login/>}/>
    <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute> }/>
    <Route path='/displayPhoto' element={<ProtectedRoute><DisplayPhoto/></ProtectedRoute>}/>
    <Route path='/chart' element={<ProtectedRoute><Charts/></ProtectedRoute>}/>

    </Routes>
  );
}

export default App;
