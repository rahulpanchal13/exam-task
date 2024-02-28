import logo from './logo.svg';
import './App.css';
import Error from './Component/Error';
import Login from './Component/Login';
import Register from './Component/Register';
import Complaint from './Component/Complaint';
import AddComplaint from './Component/addComplaint';
import UserListing from './Component/UserListing';
import CompaintListing from './Component/CompaintListing';
import PrivateRoutes from './Component/PrivateRoutes';
import Model from './Component/Model';
import Loading from './Component/Loading';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
            <Route path='login' element={<Login />} /> 
            <Route path='/' element={<Register />}/> 
            <Route path='/complaint' element={<PrivateRoutes Component={Complaint} />}/> 
            <Route path='/addComplaint' element={<PrivateRoutes Component={AddComplaint} />}/> 
            <Route path='/userListing' element={<PrivateRoutes Component={UserListing} />}/> 
            <Route path='/compaintListing' element={<PrivateRoutes Component={CompaintListing} />}/> 
            <Route path='/model' element={<PrivateRoutes Component={Model} />}/> 
            <Route path='/loading' element={<Loading />}/> 
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
