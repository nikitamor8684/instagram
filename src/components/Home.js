import React from 'react';
import img from '../images/img14.jpg';
import Story from './Story';
import Sidebar from './Sidebar';
import Post from './Post';
import Suggs from './Suggs.js';
import Data from'../Data.json';

function Home(){
    return(
        <>
        <div>
            <span style={{diplay:'flex',flexDirection:'column',width:'20%',float:'left'}}>  <Sidebar /></span>
      
      
        <span style={{ width:"20%",float:"right"}}><Suggs /></span>
     

            <span style={{diplay:'flex',flexDirection:'column',width:'60%',float:'right'}}>

                <span style={{overflowX:'auto',overflowY:'hidden',width:'500px',height:'100px',position: 'relative'}}>
                    <span        style={{display:'inline-1flex'}}  >
             
                <Story imgsrc ={img} />
           <Story imgsrc ={img} />
            <Story imgsrc ={img} />
            <Story imgsrc ={img} />
           <Story imgsrc ={img} />
           <Story imgsrc ={img} />
           <Story imgsrc ={img} />
           <Story imgsrc ={img} />
           <Story imgsrc ={img} /> <Story imgsrc ={img} />
           <Story imgsrc ={img} /> <Story imgsrc ={img} />
           <Story imgsrc ={img} />
           </span>
           </span>
                

   <span > 
   {/* diplay:'flex',flexDirection:'column', */}
   {Data.map((post) =>{
    return(
    <Post user={post.user}
    imgsrc={post.postImage} 
    likes={post.Likes}
    timeline={post.Timestamp}
    />
    );
   })}
    </span>
            
        </span> 
     
       
       
        </div>
        </>
    )
       
    
}
export default Home;