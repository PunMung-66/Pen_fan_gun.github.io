import Home from './Pages/Home';
import Question from './Pages/Question';
import Result from './Pages/Result';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import './fonts/MamuangThin.ttf';

const App: React.FC = () => {
  return (
    <div>
    < Router >
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/question"
          element={<Question />}
        />
        <Route
          path="/result"
          element={<Result />}
        />
      </Routes>
    </Router >
    </div>

  );
}

export default App;
