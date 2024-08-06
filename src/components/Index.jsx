import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hame from './Hame';


function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hame/>} />

      </Routes>
    </Router>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));