import React from 'react'
import img from "../assets/image/profile2.png"

export default function Home() {
  return (
    <div className='container' id='home'>
      <div className='Homepg'>
            <div className="homepgcontent">
              <div><p>Hello!!!</p>
              <p>i'm vijay loganathan</p>
              <p>full stack web developer</p>
              <p>creating dynamic and responsive web applications. With expertise in both front-end and back-end technologies, I bring innovative solutions to life. Let's build something amazing together!</p>
            </div>
              </div>
            <div className="homepgimg">
              <div className="img">
                {/* <img src={img} alt="" /> */}
              </div>
            </div>
      </div>
    </div>
  )
}
