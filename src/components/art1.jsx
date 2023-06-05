import React from 'react'

const Art1 = () => {
  return (
    <HelmetProvider>
      <Helmet>
      {/* <title>{path === data[index].url?'hello':'delta'}</title> */}
    <meta name="description" content="This is my page description" />
      </Helmet>
    <Router>
      <div>
        <h1>React Project</h1>
        <button onClick={onClick}>test</button>
        {window.location.href === 'http://localhost:3002/dir-2'?<p>hello</p>:<p>ellil</p>}
        {data.map((page, index)=>(
          <button key={index} onClick={()=>{onSelect(index) }} >{page.name}</button>
          ))}
      </div>
    </Router>
    </HelmetProvider>
  )
}

export default Art1
