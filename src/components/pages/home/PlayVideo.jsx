import React from 'react'

const PlayVideo = () => {
  return (
    <>
      <p className="play-video">
              <a
                href="https://youtu.be/XYwP-QndGG0?si=hOXN7sV2nQEdTKdm"
                data-fancybox="video"
                data-type="iframe" 
                className="btn-play"
              >
                <span className="icon">
                  <i className="fa fa-play "></i>
                </span>
                <span className="text">Watch The Video</span>
              </a>
            </p>
    </>
  )
}

export default PlayVideo
