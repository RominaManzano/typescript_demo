import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Examples from './pages/Examples';
import UsersList from './pages/UsersList';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact={true} path="/" component={UsersList} />
      <Route path="/examples" component={Examples} />
    </BrowserRouter>
  );
};

export default App;
