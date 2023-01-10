import './App.css';
import Layout from './Layout';
import { BrowserRouter as Router, Navigate, Route, Routes, useParams } from 'react-router-dom';
// import NavBar from './Components/NavBar/NavBar';
// import RGB from './Components/RGB/RGB';
// import NotFound from './Components/NotFound/NotFound';


function RGB() {
  const { r, g, b } = useParams();

  return (
    <div className="fill" style={{ background: `rgb(${r}, ${g}, ${b})` }}>
      <p>{`rgb(${r},${g},${b})`}</p>
    </div>
  );
}

function App() {
  return <>
    <Router>
      <Layout />
      <Routes>
        <Route path="/" to="/rgb/40/4/75" />
        <Route path="/rgb/:r/:g/:b" element={<RGB />} />
        <Route path="*" element={ <h1>Route Not Found!</h1> } />

      </Routes>
    </Router>
  </>;

}

export default App;
