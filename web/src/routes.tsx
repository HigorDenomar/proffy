import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherList} exact />
      <Route path="/give-classes" component={TeacherForm} exact />
    </BrowserRouter>
  );
}

export default Routes;