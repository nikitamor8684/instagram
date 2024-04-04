import React from 'react';
import {Link} from 'react-router-dom'


function Sidebar(){
   
        return(
            <>
<span className="sidebar">
<h2 style={{ fontFamily: "Lobster, cursive", margin:"37px"}}>Instagram</h2>
<div>
    <span>
<ul style={{listStyle:"none",fontSize:"20px"}}>
<Link to='/home' style={{textDecoration:'none'}} active>
<button  className='sidenav__button'><i className="fas fa-home"> </i><span>Home</span></button>
</Link>
<Link to='/search' style={{textDecoration:'none'}}><button  className='sidenav__button'>
 <i className="fas fa-search"> </i>
    <span> Search</span>
</button>
</Link>
    <button  className='sidenav__button'>
    <i className="far fa-compass" >         </i>
    <span>Explore </span>
</button>

    <button  className='sidenav__button'>
    <i className="fa fa-video" >      </i>
    <span> Reels</span>
</button>
<button  className='sidenav__button'>
<i className="fas fa-heart" ></i>
<span>Notifications</span>
</button>
<button  className='sidenav__button'>
<i className="fa fa-envelope" > </i>
<span>Messages</span>
</button>
    <button  className='sidenav__button'><i className="fas fa-plus" ></i>
    <span>Create</span>
 </button>
    <button  className='sidenav__button'><i className="fas fa-user" >       </i>
    <span>Profile</span>
 </button>
<span className='sidenav__more'>
    <button  className='sidenav__button'><i className="fas fa-bars" ></i>
    <span>More</span>
 </button>
 </span>

</ul>
</span>
</div>

</span>
            </>
        )
    }

export default Sidebar;
 
