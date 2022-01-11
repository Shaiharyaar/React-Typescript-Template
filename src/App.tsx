import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import RouterConfig from './navigation/router-config';

const App: FC = () => {
  return (
    <Router>
      <RouterConfig />
    </Router>
  );
};

export default App;
