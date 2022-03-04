import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signin from "./screens/Signin";
import ForgotPassword from "./screens/ForgotPassword";
import ResetPassword from "./screens/ResetPassword";
import Verification from "./screens/Verification";
import Signup from "./screens/Signup";
import CreateProject from "./screens/CreateProject";
import Dashboard from "./screens/Dashboard";
import ProjectDetails from "./screens/ProjectDetails";
import Specifications from "./screens/Specifications";
import Meetings from "./screens/Meetings";
import CreateMeeting from "./screens/CreateMeeting";
import DailyLog from "./screens/DailyLog";
import DailyLogCalender from "./screens/DailyLogCalender";
import Drawings from "./screens/Drawings";
import Landing from "./screens/Landing";

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
        <Route path="/project" element={<ProjectDetails />} />
        <Route path="/specifications" element={<Specifications />} />
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/create-meeting" element={<CreateMeeting />} />
        <Route path="/daily-log" element={<DailyLog />} />
        <Route path="/daily-log-calender" element={<DailyLogCalender />} />
        <Route path="/drawings" element={<Drawings />} />
        <Route path="/landing" element={<Landing />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
