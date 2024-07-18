import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nbar from './components/Nbar'
import Screen from './components/Screen';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Screen4 from './components/Screen4';
import Screen5 from './components/Screen5';
import Screen6 from './components/Screen6';



function App() {
  return (

    <Router>
      <div>
        <Nbar />
        {/* <Routes> */}
          {/* <Route path="/" element={<Nbar />} /> */}
          {/* <Route path="/" element={<Screen />} /> */}
          {/* <Route path="/" element={<Screen2 />} /> */}
          <Screen />
          <Screen2 />
          <Screen3 />
          <Screen4 />
          <Screen5 />
          <Screen6 />
        {/* </Routes> */}
      </div>
    </Router>

  );
}

export default App;
