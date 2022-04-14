import './App.scss';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Register from './components/Register/Register';
import Navbar from './components/Navbar/Navbar';
import Router from './routes/Router';
function App() {
  return (
    <BrowserRouter>
      {/* <div className="App container">
        <Navbar/>
        <Routes>
          <Route path="/sign-up" exact element={<Register/>} />
        </Routes>
      </div> */}
      <div>
        <Navbar/>
        <Router/>
      </div>
    </BrowserRouter>
  );
}
export default App;
