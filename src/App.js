import React,{useState} from 'react'
import image from './image.jpg'
import {BsThreeDots} from 'react-icons/bs'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import './App.css';

function App() {
  const [state,setState]=useState(0)
  const [state2,setState2]=useState(0)
  const animateBox=(n,com)=>{
    if(state2===0 || com==='image' || com==="box_in"){
      setState2(1)
      document.getElementById(`${n}`).className="box box_2"
    }
    else if(state2===1 && (com==='box_out' || com==='data_out')){
      setState2(0)
      document.getElementById(`${n}`).className="box"
    }
  }
  const animateSocial=(n,com)=>{
    
    animateBox(n,'image')
    if((state===0 && com==='image_in') || com==='social_in'){
      setState(1)
      document.getElementById(`${n+2}`).className="social_media_container social_media_container_2"
    }
    else if(state===1 && com==='image_out'){
      setState(0)
      document.getElementById(`${n+2}`).className="social_media_container"
    }
  }
  return (
    <div className="App" >
      <div className="container">
        <div className="child_container">
          <div className="data_container">
            <div className="box" id="0" onMouseEnter={animateBox.bind(this,0,'box_in')} onMouseLeave={animateBox.bind(this,0,'box_out')}></div>
            <div className="data" onMouseEnter={animateBox.bind(this,0,'data_in')} onMouseLeave={animateBox.bind(this,0,'data_out')}>
              <img className="image" alt="image00" src={image} onMouseEnter={animateSocial.bind(this,0,"image_in")} onMouseLeave={animateSocial.bind(this,0,"image_out")}/>
              <div className="detial_container">
                <div className="image_container">
                <div><img className="image2" alt="image01" src={image} width="35" height="35"/></div>
                </div>
                <div className="detail">
                  <div className="name">Avneesh</div>
                  <div className="designation">Manager</div>
                </div>
                <div className="dots"><BsThreeDots className="three_dots"/></div>
              </div>
              <div id="2" className="social_media_container" onMouseEnter={animateSocial.bind(this,0,'social_in')} onMouseLeave={animateSocial.bind(this,0,'social_out')}>
                  <FacebookIcon fontSize="small" className="nonlast_icon"/>
                  <InstagramIcon fontSize="small" className="last_icon"/>
                  <TwitterIcon fontSize="small" className="nonlast_icon"/>
              </div>
            </div>
          </div>
        </div>
        <div className="child_container">
        <div className="data_container">
            <div className="box" id="1" onMouseEnter={animateBox.bind(this,1,'box_in')} onMouseLeave={animateBox.bind(this,1,'box_out')}></div>
            <div className="data" onMouseEnter={animateBox.bind(this,1,'data_in')} onMouseLeave={animateBox.bind(this,1,'data_out')}>
              <img className="image" alt="image10" src={image} onMouseEnter={animateSocial.bind(this,1,'image_in')} onMouseLeave={animateSocial.bind(this,1,'image_out')}/>
              <div className="detial_container">
                <div className="image_container">
                <div><img className="image2" alt="image11" src={image} width="35" height="35"/></div>
                </div>
                <div className="detail">
                  <div className="name">Avneesh</div>
                  <div className="designation">Manager</div>
                </div>
                <div className="dots"><BsThreeDots className="three_dots"/></div>
              </div>
              <div id="3" className="social_media_container" onMouseEnter={animateSocial.bind(this,1,'social_in')} onMouseLeave={animateSocial.bind(this,1,"social_out")}>
                  <FacebookIcon fontSize="small" className="nonlast_icon"/>
                  <InstagramIcon fontSize="small" className="last_icon"/>
                  <TwitterIcon fontSize="small" className="nonlast_icon"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
