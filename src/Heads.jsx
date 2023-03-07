import React from "react";
import "./style/Heads.css"
import {Routes,Route,Link} from "react-router-dom";
import {Home} from "./Home"
import {Test} from "./Test"
import {About} from "./About";
import {Blog} from "./Blog";
import { SinglePage } from "./SinglePage";
import {NotfoundHome} from "./NotfoundHome";
import facebook from "./image/facebook.png";
import github from "./image/github.png";
import instagram from "./image/instagram.png";
import telegram from "./image/telegram.png";
import youtube from "./image/youtube.png";

const Heads = () => {
  return (
    <div> 
    <header>
    <div><p>Karapet Sayan</p></div>
    <div className="navigator">
        <Link to ="/" className="Text">Home</Link>
        <Link to ="/blog" className="Text">Blog</Link>
        <Link to ="/about" className="Text">About</Link>
        <Link to="/test" className="Text">Knowledge test</Link>
        <Link to ="/happyday"></Link>
        <Link to ="/svadba"></Link>
        <Link to ="/events1"></Link>
        <Link to ="/events2"></Link>
        <Link to ="/events3"></Link>
    </div>
    <div className="sociel">
        <a href="*" className="Image"><img src={facebook} alt="facebook"/></a>
        <a href="*" className="Image"><img src={github} alt="github"/></a>
        <a href="*" className="Image"><img src={instagram} alt="instagram"/></a>
        <a href="*" className="Image"><img src={telegram} alt="telegram"/></a>
        <a href="*" className="Image"><img src={youtube} alt="youtube"/></a>
    </div>
  </header>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/test" element={<Test/>}/>
    <Route path="/:id" element={<SinglePage/>}/>
    <Route path="*" element={<NotfoundHome/>}/>
  </Routes>
  </div>
  )
}

export default Heads