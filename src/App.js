import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "./Pages/MainPage";
import Description from "./Pages/Description";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/description' element={<Description />} />
      </Routes>
    </Router>
  );
}

export default App;
