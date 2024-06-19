import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import Newacc from './components/Newacc';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Search from './components/Search';
import Explore from './components/Explore';
import Create from './components/Create';
import Reels from './components/Reels';
import Profile from './components/Profile';
import Edit from './components/Edit';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  return (
<>


<Router>
<Routes>
 <Route  exact path="/" element={<Home/>}></Route> 
 <Route  exact path="/search" element={<Search/>}></Route> 
 <Route  exact path="/explore" element={<Explore/>}></Route> 
 <Route  exact path="/create" element={<Create/>}></Route> 
 <Route  exact path="/reels" element={<Reels/>}></Route> 
 <Route  exact path="/profile" element={<Profile/>}></Route> 
 <Route  exact path="/newacc" element={<Newacc/>}></Route> 
 <Route  exact path="/login" element={<Login/>}></Route> 
 <Route  exact path="/edit" element={<Edit/>}></Route> 

</Routes>

</Router>

</>
  );
}

export default App;
