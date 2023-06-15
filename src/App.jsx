import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, useFetcher} from 'react-router-dom';
import data from './data';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Instruct from './components/Instruct';
import SignIn from './components/SigninPage';
import Footer from './components/Footer';
import ReactAudioPlayer from 'react-audio-player'
import music from './assets/icons/music.svg'
import mus from './assets/music/hey.mp3'
const App = () => {
  const [brand, setBrand] = useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setBrand(false)
    }, 4000);
  },[])
  const onSelect = (index) => {
    window.location.href = data[index].url
  }
  const mainUrl = window.location.href.toString();
  const path = new URL(mainUrl).pathname
  const dirData = data.filter(x=>x.url===path)[0]
  const [menuOpen, setMenuOpen] = useState(false);
  const [instructPage, setInstructPage] = useState(false)
  const [signin, setSignin] = useState(false)
  useEffect(()=>{
    localStorage.getItem('instruct') === 'hide' ? setInstructPage(false) : setTimeout(()=>{setInstructPage(true)}, 10000)
  },[])
  
  // const linkContent = `https://mever.me/${dirData.url}`
  const onMenu = () => {
    setMenuOpen(!menuOpen)
    // console.log(linkContent);
  }
  // music play functions
  const audioPlayerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlay = () => {
    if (audioPlayerRef.current) {
      const audioPlayer = audioPlayerRef.current.audioEl.current;
      
      if (isPlaying) {
        audioPlayer.pause();
      } else {
        audioPlayer.play();
      }
      
      setIsPlaying(!isPlaying);
    }
  };

  // useEffect(()=>{
  //   console.log("helloddd");
  // },[]);

  // const dataReceive = (queryString) => {
  //   console.log("data :",queryString);
  // }




  var audio1 = document.getElementById("backmus");
  window.onload = function() {
    audio1.play();
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>{dirData.title}</title>
        <meta name="description" content="100%개발자들이 마케팅하는 회사. 3D웹 특허기술로 홈페이지를 제작하고, AI콘텐츠 마케팅으로 자동 매출을 만듭니다. 3D하드웨어+AI소프트웨어를 연구합니다." />
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://mever.me/k/academy1"/>
        {/* <meta property="og:url" content={linkContent}/> */}
        <meta property="og:title" content="메버(meVer)"/>
        <meta property="og:description" content="3D홈페이지 AI마케팅 개발사." />
        <meta property="og:image" content="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbOYgrJ%2FbtshgpiCQgQ%2FG0q7D0uka6tJYRjvBjSYs0%2Fimg.png"/>
        <meta property="og:keywords" content="MEVER,메버,STO,STO발행,STO투자,조각투자,토큰증권,STO관련주,3D홈페이지제작,3D교육,3D학원,메타버스" />
      </Helmet>
    <Router>
      <div>
      {instructPage && <Instruct signIn ={setSignin}/>}
        {signin && <SignIn/>}
        <h1 className='page_heading'>{dirData.heading}</h1>
        <p className='page_subHeading'>{`- ${dirData.subTitle} -`}</p>
        {/* MUSIC BUTTON */}
        <ReactAudioPlayer
          style={{display: 'none'}}
          src={dirData.music}
          ref={audioPlayerRef}
          id='audio1'
          autoPlay
          controls
        />
        <div onClick={togglePlay} className='music_box'>
          <img src={music} alt="music icon" />
        </div>

        {/* MENU BUTTON */}
        <div onClick={onMenu} className="menu_wrap">

          <div className={menuOpen? "menu-btn open" : "menu-btn"}>
            <div className="menu-btn_burger"></div>
          </div>
        </div>
        {/* MENU BOX */}
        <div className={menuOpen?'menu_box active' : 'menu_box'}>
          {data.map((page, index)=>(
            <p className='menu_item' style={index === (dirData.id - 1) ? {color: 'coral'}: {color: '#000'}} onClick={()=>{onSelect(index) }} key={index}>{page.navLink}</p>
          ))}
        </div>
      
        {/* MAIN MATTERPORT IFRAME */}
        <iframe style={{position: 'fixed', zIndex: '-1', top: '0', left: '0', width:'99.95vw', height: '100vh'}} title='unique' src={dirData.matterLink} frameBorder={0} ></iframe>
        {brand && <div className='brand_remove'>meVer</div>}
        <Footer/>
      </div>
    </Router>
  </HelmetProvider>
  );
}

export default App;
