import { useNavigate, useLocation } from "react-router-dom";

export default function MainLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <div className="bg-blue-600 text-white flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600">
            💡
          </div>
          <h1 className="font-semibold text-lg">TBO Copilot</h1>
        </div>

        <button
          onClick={() => navigate("/")}
          className="hover:underline"
        >
          Logout
        </button>
      </div>

      <div className="flex">

        {/* Sidebar */}
        <div className="w-64 bg-white min-h-screen p-6 space-y-4 shadow-md hidden md:block">

          <button
            onClick={() => navigate("/dashboard")}
            className={`w-full text-left px-4 py-2 rounded-lg ${
              isActive("/dashboard")
                ? "bg-blue-100 text-blue-600 font-medium"
                : "hover:bg-gray-100"
            }`}
          >
            Bookings
          </button>

          <button
            className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            Customers
          </button>

          <button
            className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            Reports
          </button>

        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {children}
        </div>

      </div>
    </div>
  );
}
