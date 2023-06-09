import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import data from './data';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Instruct from './components/Instruct';
import SignIn from './components/SigninPage';
import Footer from './components/Footer';



const App = () => {
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
  
  const onMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <HelmetProvider>
      <Helmet>
        <title>{dirData.title}</title>
        <meta name="description" content="100%개발자들이 마케팅하는 회사. 3D웹 특허기술로 홈페이지를 제작하고, AI콘텐츠 마케팅으로 자동 매출을 만듭니다. 3D하드웨어+AI소프트웨어를 연구합니다." />
      </Helmet>
    <Router>
      <div>
      {instructPage && <Instruct signIn ={setSignin}/>}
        {signin && <SignIn/>}
        <h1 className='page_heading'>{dirData.heading}</h1>
        <p className='page_subHeading'>{`- ${dirData.subTitle} -`}</p>
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
        <Footer/>
      </div>
    </Router>
  </HelmetProvider>
  );
}

export default App;
