import './Fqa.css'
import bull from '../assets/bull.mp4'


const Fqa = () => {
  return (
    <div className='maga'>
      <h4>
        Join.
      </h4>
      <p>
        Interested in creating apps and indie games with us? Contact us ASAP.
      </p>
      <div className='mach'>
        <video src={bull} autoPlay loop muted />
      </div>
    </div>
  )
}

export default Fqa