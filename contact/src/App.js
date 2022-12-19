import {ToastContainer} from "react-toastify"
import './App.css';
import Navbar from "./component/Navbar"
import Home from "./component/Home"
import {Route,Routes} from "react-router-dom"
import AddContact from "./component/AddContact"
import EditContact from "./component/EditContact"

const App=()=> {
  return (
    <div className="App">
      <ToastContainer/>
      
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}>
        </Route>
        <Route exact path="/add" element={<AddContact/>}>
           {/* <AddContact/> */}
        </Route>
        <Route exact path="/edit/:id" element={<EditContact/>}>
          {/* <EditContact/> */}
        </Route>
        
        

      </Routes>
     
    </div>
  );
}

export default App;
