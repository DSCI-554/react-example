import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/home';
import Rubrics from './components/rubric';
import Resources from './components/resource';
import Deploy from './components/depploy';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Router>
        {/* Sidebar Navigator */}
        <div className="sidebar">
          <h2>DSCI 554 Final Project</h2>
          <ul>
            <li>
              <NavLink 
                to="/react-example" 
                className={({ isActive }) => isActive ? "active-link" : ""}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/rubrics" 
                className={({ isActive }) => isActive ? "active-link" : ""}
              >
                Rubrics
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/resources" 
                className={({ isActive }) => isActive ? "active-link" : ""}
              >
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/deploy" 
                className={({ isActive }) => isActive ? "active-link" : ""}
              >
                Deployment Instructions
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/react-example" element={<Home />} />
            <Route path="/rubrics" element={<Rubrics />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/deploy" element={<Deploy />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
