import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import { AuthContext } from 'App';
import Home from "components/pages/Home";
import SignUp from "components/pages/SignUp";
import SignIn from "components/pages/SignIn";
import NotFound from 'components/pages/NotFound';
import { Post } from 'components/pages/Post';
import List from 'components/pages/List';

const AppRoutes: React.FC = () => {

  const { loading, isSignedIn } = React.useContext(AuthContext);

  const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    return !loading && isSignedIn ? children : <Navigate to="/signin" replace />;
  };

  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<PrivateRoute>{<Home />}</PrivateRoute>} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/posts" element={<Post />} />
      <Route path="/lists" element={<List />} />
    </Routes>
  );
};

export default AppRoutes;
