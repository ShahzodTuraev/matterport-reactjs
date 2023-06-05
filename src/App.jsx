import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import data from './data';
import { Helmet, HelmetProvider } from 'react-helmet-async';
function App() {
  const onSelect = (index) => {
    window.location.href = data[index].url
    // setTitle(data[index].name)
  }
  const mainUrl = window.location.href.toString();
  const path = new URL(mainUrl).pathname
  const dirData = data.filter(x=>x.url===path)[0]

  return (
    <HelmetProvider>
      <Helmet>
      <title>{dirData.title}</title>
      <meta name="description" content="This is my page description" />
      </Helmet>
    <Router>
      <div>

        <iframe style={{width:'100vw', height: '100vh'}}  src={dirData.matterLink} frameBorder={0} ></iframe>
        <div className='btnBox'>
          {data.map((page, index)=>(
            <button className='linkBtn' key={index} onClick={()=>{onSelect(index) }} >{page.navLink}</button>
          ))}
        </div>
      </div>
    </Router>
  </HelmetProvider>
  );
}

export default App;
