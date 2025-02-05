// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Jobs from "./pages/Jobs";
import Notifications from "./pages/Notifications";
import Messaging from "./pages/Messaging";
import HomePage from "./components/HomePage";
import Network from "./components/Network";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/Network" element={<Network />} />
      </Routes>
    </Router>
  );
};

export default App;
