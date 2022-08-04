import './App.css';
import Form from './components/Form';
import Reo from "./assets/img/MaskGroup.png";
import Footer from './components/Footer';

function App() {
  
 
  return (


    <div className="App">


      <body>

        <div className='mainPart'>
            <div className='row'>
                <div className="column left">   
                      <Form />
                  </div>
                  <div className='column right' >
                  <img className='homepageImg' src={Reo} alt="Reo" />
            </div>
          </div>
        </div>
        <footer className='footerPart'>
         <Footer />
      </footer>
      </body>


    </div>
  )
}

export default App;
