import './App.scss';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Register from './components/Register/Register';
import Navbar from './components/Navbar/Navbar';
import Router from './routes/Router';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Navbar />
          <Router />
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
