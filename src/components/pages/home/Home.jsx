import React, { lazy, Suspense } from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
const Section4=lazy(()=>import('./Section4'))  
import Section5 from './Section5'
import Section2Img from "/images/ibnu-al-rasyid-0EgYaw74-0o-unsplash.jpg";
import PlayVideo from './PlayVideo'
import { CircularProgress } from '@mui/material'

const Home = () => {
  const title = {
    heading:"Welcome To Our Website",
    paragraph:" Welcome to DTours, where your journey begins! Explore breathtaking destinations, immerse yourself in vibrant cultures, and discover hidden gems around the world. Whether you're seeking adventure, relaxation, or unforgettable experiences, we're here to guide you every step of the way. Let us help you create memories that last a lifetime. Start your dream vacation with us today!",
    image:Section2Img,
    playVideo: <PlayVideo/>
  }
  return (
    <div>
      <Section1/>
      <Section2 heading={title.heading} paragraph={title.paragraph} image={title.image} video={title.playVideo}/>
      <Section3/>
      <Suspense fallback={<CircularProgress/>}><Section4/></Suspense>
      <Section5/>
    </div>
  )
}

export default Home
