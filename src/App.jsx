import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./pages/Dashboard";
import IssueDetails from "./pages/IssueDetails";
import AICopilot from "./pages/AICopilot";

function App() {
  return (
    <Routes>

      {/* Login */}
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <Login />
          </div>
        }
      />

      {/* Signup */}
      <Route
        path="/signup"
        element={
          <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <Signup />
          </div>
        }
      />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Issue Details */}
      <Route path="/issue/:id" element={<IssueDetails />} />

      {/* AI Copilot */}
      <Route path="/ai" element={<AICopilot />} />

      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
}

export default App;