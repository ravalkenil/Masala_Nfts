import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Home from './Components/Pages/Home';
import Create_contract from './Components/Pages/Create_contract';
import Short from './Components/Pages/Short';
// import Main from './Components/Pages/Ui/Main';

function App() {
  return (
    <div className="App">
      <div>
        {/* <Header checkEthereumProvider={checkEthereumProvider} /> */}
        <Header />

        <div style={{ paddingTop: "100px" }}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/create-contract" element={<Create_contract  />} />
            <Route path="/short" element={<Short  />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </div>  
  );
}

export default App;
