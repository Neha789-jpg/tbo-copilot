import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./pages/Dashboard";
import IssueDetails from "./pages/IssueDetails";
import AICopilot from "./pages/AICopilot";



function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <Login />
          </div>
        }
      />

      <Route
        path="/signup"
        element={
          <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <Signup />
          </div>
        }
      />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/issue/:id" element={<IssueDetails />} />
      <Route path="/ai" element={<AICopilot />} />

    </Routes>
  );
}

export default App;
