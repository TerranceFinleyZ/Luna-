import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Vid from './components/Vid'

function App() {
  

  return (
    <div>
      <div className='page'>
        < Navbar />
        < Home />
      </div>

      <section>
        <div className='page2'>
          < About />          
        </div>
      </section>

      <section>
        <div className='page3'>
          <Vid />
        </div>
      </section>
    </div>
  )
}

export default App
