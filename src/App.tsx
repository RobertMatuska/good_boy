import './App.css';
import Form from './components/Form';
import Reo from "./assets/img/MaskGroup.png";
import Footer from './components/Footer';

function App() {
  
 
  return (


    <div className="App">
      <header className="App-header">

      </header>
      <body>
        <div className='mainPart'>
            <div className='row'>
                <div className="column left">
                      <h1 className='title'>Vyberte si možnosť ako chcete pomôcť</h1>
                      <Form />
                  </div>
                  <div className='column right' >
                  <img className='homepageImg' src={Reo} alt="Reo" />
            </div>
          </div>
        </div>
      </body>

      <footer className='footerPart'>
         <Footer />
      </footer>
    </div>
  );
}

export default App;
