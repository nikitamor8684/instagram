import React from "react";
import img from "../images/img14.jpg";
import Story from "./Story";
import Sidebar from "./Sidebar";
import Post from "./Post";
import Suggs from "./Suggs.js";
import Data from "../Data.json";

function Home() {
  return (
    <>
      <div className="home-div1">
        <div className="home-div2">
          <Sidebar />
        </div>

        <div className="home-div3">
          <div className="home-div4">
            <Story imgsrc={img} />
            <Story imgsrc={img} />
            <Story imgsrc={img} />
            <Story imgsrc={img} />
            <Story imgsrc={img} />
            <Story imgsrc={img} />
            <Story imgsrc={img} />
            <Story imgsrc={img} />
            <Story imgsrc={img} />
            <Story imgsrc={img} />
            <Story imgsrc={img} />
          </div>
          <div className="home-div5">
            {Data.map((post) => {
              return (
                <Post
                  user={post.user}
                  imgsrc={post.postImage}
                  likes={post.Likes}
                  timeline={post.Timestamp}
                />
              );
            })}
          </div>
        </div>

        <div className="home-div6">
          <Suggs />
        </div>
      </div>
    </>
  );
}
export default Home;
