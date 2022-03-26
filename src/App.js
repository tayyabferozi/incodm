import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signin from "./screens/Signin";
import ForgotPassword from "./screens/ForgotPassword";
import ResetPassword from "./screens/ResetPassword";
import Verification from "./screens/Verification";
import Signup from "./screens/Signup";
import Dashboard from "./screens/Dashboard";
import CreateProject from "./screens/CreateProject";
import ProjectDetails from "./screens/ProjectDetails";
import Specifications from "./screens/Specifications";
import Meetings from "./screens/Meetings";
import CreateMeeting from "./screens/CreateMeeting";
import DailyLog from "./screens/DailyLog";
import DailyLogCalender from "./screens/DailyLogCalender";
import Drawings from "./screens/Drawings";
import Landing from "./screens/Landing";
import Todo from "./screens/Todo";
import Invoice from "./screens/Invoice";
import CreateInvoice from "./screens/CreateInvoice";
import TodoDetails from "./screens/TodoDetails";
import InvoiceDetails from "./screens/InvoiceDetails";
import ESignature from "./screens/ESignature";

function App() {
  return (
    <Router>
      <Routes>
        {[
          { path: "/", Element: Signin },
          { path: "/forgot-password", Element: ForgotPassword },
          { path: "/reset-password", Element: ResetPassword },
          { path: "/verification", Element: Verification },
          { path: "/signup", Element: Signup },
          { path: "/dashboard", Element: Dashboard },
          { path: "/create-project", Element: CreateProject },
          { path: "/project", Element: ProjectDetails },
          { path: "/specifications", Element: Specifications },
          { path: "/meetings", Element: Meetings },
          { path: "/create-meeting", Element: CreateMeeting },
          { path: "/daily-log", Element: DailyLog },
          { path: "/daily-log-calender", Element: DailyLogCalender },
          { path: "/drawings", Element: Drawings },
          { path: "/landing", Element: Landing },
          { path: "/todo", Element: Todo },
          { path: "/todo-details", Element: TodoDetails },
          { path: "/invoice", Element: Invoice },
          { path: "/invoice-details", Element: InvoiceDetails },
          { path: "/create-invoice", Element: CreateInvoice },
          { path: "/e-signature", Element: ESignature },
        ].map((el, idx) => {
          const { path, Element } = el;
          return (
            <Route key={"route-" + idx} path={path} element={<Element />} />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
