
import './App.css';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Body from './components/body/Body';
import { useContext } from 'react';
import { AppContext } from './context/AppContect';
import AdminRegister from './Authentication/AdminRegister';
import LoginAdmin from './Authentication/LoginAdmin';

// import FoodItem from './components/menu/FoodItem';
import Contact from './components/contact/Contact';
import AddProduct from './components/addProduct/AddProduct';
import AddHome from './components/addProduct/AddHome';
import Event from './components/event/Event';
import Events from './components/event/Events';
import AllEvent from './components/event/AllEvent';
import Applied from './components/Apply/Applied';
import About from './components/about/About';
import Biduser from './components/Apply/Biduser';
import AllBides from './components/Apply/AllBides';

function App() {
  const {admin,userData} = useContext(AppContext);
  return (
    <BrowserRouter>
        <Routes>
        
          <Route path='/' element={<Home/>}>
          <Route path='/' element={ <Body/> }/>
          <Route path='/about' element={ <Contact/> }/>
          <Route path='/products' element={ <AllEvent/> }/>
          <Route path='/product' element={ <Events/> }/>
          <Route path='/addproduct' element={admin || userData? <AddProduct/> :<Body/>}/>
          <Route path='/abouts' element={ <About/> }/>
          <Route path='/userProfile' element={admin? <Applied/> : <Body/>}/>
          <Route path='/allbids' element={admin? <AllBides/> : <Body/>}/>
          <Route path='/userprof' element={userData? <Biduser/> : <Body/>}/>
          </Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='/tlogin' element={<LoginAdmin/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/teacherauth' element={<AdminRegister/>}/>
          
        </Routes>
    </BrowserRouter>
 

   
    
  );
}

export default App;
