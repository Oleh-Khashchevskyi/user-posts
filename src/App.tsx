import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { HomePage } from './pages/HomePage/HomePage';
import { UsersPage } from './pages/UsersPage/UsersPage';

import 'bulma';
import '@fortawesome/fontawesome-free/css/all.css';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';
import { NewUser } from './components/NewUser/NewUser';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/:userId" element={<UsersPage />} />
      <Route path="/users/new-user" element={<NewUser />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};
