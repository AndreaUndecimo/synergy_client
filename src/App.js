import Login from './Pages/Register/Register';
import { Router } from '@reach/router';
import LandingPage from './Pages/LandingPage/LandingPage';
import Navbar from './Pages/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Router style={{ height: '100%' }}>
        <LandingPage path='/' />
      </Router>
    </div>
  );
}

export default App;
