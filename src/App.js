import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Header from './Components/Layout/Header';

function App() {
  return (
    <div className="App">
      <div>
        {/* <Header checkEthereumProvider={checkEthereumProvider} /> */}
        <Header />

        <div style={{ paddingTop: "100px" }}>
          <Routes>
            {/* <Route path="/" element={<Navigate to="/home" />} />
            <Route
              path="/home"
              element={}
            /> */}
          </Routes>
        </div>
      </div>
    </div>  
  );
}

export default App;
