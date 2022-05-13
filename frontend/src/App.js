import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Router from './routes/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Provider from './store/Context';
import OrderProvider from './store/OrderContext';
function App() {
  return (
    <Provider>
      <OrderProvider>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Router />
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {/* Same as */}
          <ToastContainer />
        </BrowserRouter>
      </OrderProvider>
    </Provider>
  );
}
export default App;
