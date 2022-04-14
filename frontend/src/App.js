
import './App.scss';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Router from './routes/Router';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Router />
      </div>
    </BrowserRouter >
  );
}
export default App;
