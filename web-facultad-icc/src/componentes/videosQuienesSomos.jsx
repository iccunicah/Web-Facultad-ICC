import React from 'react';
import ReactPlayer from 'react-player/lazy';

function VideoQuienesSomos({enlaceVideo}){
  return(
    <div className='player-wrapper scroll-arreglado-ejeY'
      data-aos="fade-right"
      data-aos-easing="linear"
      data-aos-duration="1500">
      
      <ReactPlayer
        url={enlaceVideo}
        controls={true}
        width='100%'
        height='100%'
        className='react-player' />
    
    </div>
  )
}

export default VideoQuienesSomos;
