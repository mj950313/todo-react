import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Footer from './component/Footer';
import { BrowserRouter, Route , Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="todolist">
          <Header/>
          <div className="container">
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/about' element={<About/>}></Route>
            </Routes>
            <Footer/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
