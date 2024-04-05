import { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import CommonLayout from "components/layouts/CommonLayout";
import { getCurrentUser } from "lib/api/auth";
import { User } from "types/index";
import AppRoutes from "routes/Routes";

export const AuthContext = createContext({} as {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isSignedIn: boolean;
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
  currentUser: User | undefined;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>;
});

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | undefined>();

  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser();

      if (res?.data.isLogin === true) {
        setIsSignedIn(true);
        setCurrentUser(res?.data.data);
      } 
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    handleGetCurrentUser();
  }, [setCurrentUser]);

  return (
    <Router>
      <AuthContext.Provider value={{ loading, setLoading, isSignedIn, setIsSignedIn, currentUser, setCurrentUser }}>
        <CommonLayout>
          <AppRoutes />
        </CommonLayout>
      </AuthContext.Provider>
    </Router>
  );
};

export default App;
