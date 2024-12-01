import './Navbar.css'



const Navbar = () => {
  return (
    <div className='header'>
        <a href='#' className='logo'>Luma.</a>
        <div className='conn'>
          <a href='https://www.facebook.com/imperialworld.2023'>
            <button>Donate</button>
          </a>
        </div>
    </div>
  )
}

export default Navbar