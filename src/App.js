import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes/index';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={2000} />
      <Routes />
    </BrowserRouter>
  );
}

export default App;