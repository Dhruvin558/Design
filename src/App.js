import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nbar from './components/Nbar'
import Screen from './components/Screen';
// import Screen2 from './components/Screen2';



function App() {
  return (

    <Router>
      <div>
        <Nbar />
        <Routes>
          {/* <Route path="/" element={<Nbar />} /> */}
          <Route path="/" element={<Screen />} />
          {/* <Route path="/" element={<Screen2 />} /> */}
        </Routes>
      </div>
    </Router>

  );
}

export default App;
