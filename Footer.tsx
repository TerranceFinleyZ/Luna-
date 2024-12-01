import './Footer.css'

import R from '../assets/R.png'

const Footer = () => {
  return (
    <div>
        <h4 className='ddf'>Services.</h4>
        <p>Email: zealotschrist@gmail.com</p>
        <p>Location: Tucson, AZ</p>
        <p>Need a <span className='max'>Website</span> click on the Moon!</p>
        <div className='moon'>
            <a href='https://meza-web.netlify.app/'>
                <img src={R} alt='' className='moons' />
            </a>
            <div>
                <h5>©2024 Luma.® powered by Imperial-World All rights reserved.</h5>
            </div>
        </div>
    </div>
  )
}

export default Footer