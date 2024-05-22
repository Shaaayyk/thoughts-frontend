import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage.jsx";
import FeedPage from "./pages/FeedPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage.jsx";

import usersUtil from "./utils/users.js";

function App() {
  const [user, setUser] = useState(usersUtil.getUser());

  function handleLogout() {
    usersUtil.logout()
    setUser(null)
  }

  if (!user) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/signup" element={<SignupPage setUser={setUser} />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }
  // if there is a user
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout user={user} handleLogout={handleLogout} />}>
          <Route index element={<HomePage user={user} />} />
          <Route path="/feed" element={<FeedPage user={user} />} />
        </Route>
        <Route path="/signup" element={<SignupPage setUser={setUser} />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
      </Routes>
    </>
  );
}

export default App;
