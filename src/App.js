import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import Navbar from './components/Navbar';
import ContactBar from './components/ContactBar';
import { Home } from './components/Home';

function App() {
  return (
    <BrowserRouter> {/* Wrap everything with BrowserRouter */}
      <ContactBar />
      <Navbar />
      <Home />
    </BrowserRouter>
  );
}

export default App;