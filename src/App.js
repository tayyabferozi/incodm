import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signin from "./screens/Signin";
import ForgotPassword from "./screens/ForgotPassword";
import ResetPassword from "./screens/ResetPassword";
import Verification from "./screens/Verification";
import Signup from "./screens/Signup";
import CreateProject from "./screens/CreateProject";
import Dashboard from "./screens/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-project" element={<CreateProject />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
