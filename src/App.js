import './App.css';
import React , { useContext} from 'react';
import TopBar from './components/topBar/TopBar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { BrowserRouter as Router, Routes , Route, Link } from "react-router-dom";
import { Context } from './context/Context'

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <div className="App">
          <TopBar />
          <Routes>
            <Route exact path="/" element={ user ? <Home /> : <Register /> } />
            <Route exact path="/login" element= { user ? <Home /> : <Login /> } />
            <Route exact path="/register" element={ user ? <Home /> : <Register /> } />
            <Route path="/users" element={ user ? <Home /> : <Register /> } /> 
            <Route path="/users/:postId" element={ user ? <Single /> : <Register /> } /> 
          </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
