import React from 'react';
import {Link} from 'react-router-dom'


function Sidebar(){
   
        return(
            <>
<span className="sidebar">
<h2 style={{ fontFamily: "Lobster, cursive", margin:"37px"}}>Instagram</h2>
<div>
    <span>
<ul style={{listStyle:"none",fontSize:"10px"}}>
<Link to='/' style={{textDecoration:'none'}} active>
<button  className='sidenav__button'><i className="fas fa-home"> </i><span>Home</span></button>
</Link>
<Link to='/search' style={{textDecoration:'none'}}><button  className='sidenav__button'>
 <i className="fas fa-search"> </i>
    <span> Search</span>
</button>
</Link>
<Link to='/explore' style={{textDecoration:'none'}}>  <button  className='sidenav__button'>
    <i className="far fa-compass" >         </i>
    <span>Explore </span>
</button>
</Link>
<Link to='/reels' style={{textDecoration:'none'}}> <button  className='sidenav__button'>
    <i className="fa fa-video" >      </i>
    <span> Reels</span>
</button>
</Link>
<button  className='sidenav__button'>
<i className="fas fa-heart" ></i>
<span>Notifications</span>
</button>
<button  className='sidenav__button'>
<i className="fa fa-envelope" > </i>
<span>Messages</span>
</button>
<Link to='/create' style={{textDecoration:'none'}}>    <button  className='sidenav__button'><i className="fas fa-plus" ></i>
    <span>Create</span>
 </button>
 </Link>
 <Link to='/profile' style={{textDecoration:'none'}}> 
    <button  className='sidenav__button'><i className="fas fa-user" ></i>
    <span>Profile</span>
 </button>
 </Link>
<span className='sidenav__more dropdown'>
    <button  className='sidenav__button  ' type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-bars" ></i>
    <span>More</span>
    </button>
 
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{backgroundColor:' rgba(140,140,140)'}}>
    <a className="dropdown-item" style={{color:'white'}}>Settings</a>
    <a className="dropdown-item" style={{color:'white'}}>Your Activity</a>
    <a className="dropdown-item" style={{color:'white'}}>Saved</a>
    <a className="dropdown-item" style={{color:'white'}}>Switched Appearence</a>
    <a className="dropdown-item" style={{color:'white'}}>Threads</a>
    <a className="dropdown-item" style={{color:'white'}}>Switch Accounts</a>
    <a className="dropdown-item" style={{color:'white'}} href='Login'>Logout</a>

  </div>

 </span>

</ul>
</span>
</div>

</span>
            </>
        )
    }

export default Sidebar;
 
