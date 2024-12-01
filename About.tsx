import './About.css'
import Luma from '../assets/Luma.mp4'

const About = () => {
  return (
    <div className='about'>
      <div className='about-img'>
      <video src={Luma} autoPlay loop muted />
      </div>
      <h3>Greetings, fellow gamers and wannabe game devs! Welcome to my website, LUMA. I'm a caffeine-fueled coding wizard who spends way too much time making videos, studying, and developing games with Unreal Engine. Join me on my chaotic journey of pixels, bugs, and endless cups of coffee.
         Also, subscribe to my YouTube channel! 
      </h3>
    </div>
    
  )
}

export default About