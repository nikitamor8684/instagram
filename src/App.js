import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Search from './components/Search';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
<>
<Router>
<Home />
<Routes> 
 <Route  exact path="/home" element={<Home/>}></Route> 
 <Route  exact path="/search" element={<Search/>}></Route> 

</Routes>

</Router>

 {/* <Search />  */}
</>
  );
}

export default App;
