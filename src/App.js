import { Router } from '@reach/router';
import LandingPage from './Pages/LandingPage/LandingPage';
import Navbar from './Pages/Navbar/Navbar';
import { StateContext, Store } from './globals/globalStore.reducer';

function App() {
  const [state, dispatch] = Store();
  return (
    <div className='App'>
      <StateContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Router style={{ height: '100%' }}>
          <LandingPage path='/' />
        </Router>
      </StateContext.Provider>
    </div>
  );
}

export default App;
