import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Items from './Components/Items';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='mx-0 lg:mx-5'>

      <Items/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
