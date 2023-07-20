import './App.css';
import './index.css';

import { Navbar, Slideshow } from './components/index';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Slideshow />
    </div>
  );
};

export default App;