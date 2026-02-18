import { useNavigate } from "react-router-dom";

export default function IssueDetails() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Top Navbar */}
      <div className="bg-blue-600 text-white flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="text-white font-medium hover:underline"
          >
            ← Back
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600">
              💡
            </div>
            <h1 className="font-semibold text-lg">TBO Copilot</h1>
          </div>
        </div>

        <p>Agent Portal</p>
      </div>

      <div className="flex">

        {/* Sidebar */}
        <div className="w-64 bg-white min-h-screen p-6 space-y-4 shadow-md">
          <button className="w-full text-left px-4 py-2 rounded-lg bg-blue-100 text-blue-600 font-medium">
            Bookings
          </button>

          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
            Customers
          </button>

          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
            Reports
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 flex justify-center">
          <div className="w-full max-w-3xl">

            <h2 className="text-2xl font-bold mb-1">
              Issue Details
            </h2>

            <p className="text-gray-500 mb-6">
              Booking #2
            </p>

            {/* Issue Alert */}
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-lg mb-2">
                ❗ Early Check-in Denied
              </h3>
              <p>
                Traveler reports early check-in denied by hotel.
              </p>
            </div>

            {/* Booking Information */}
            <div className="bg-white rounded-xl shadow border p-6 mb-8">
              <h3 className="font-semibold text-lg mb-6">
                Booking Information
              </h3>

              <div className="grid grid-cols-2 gap-8">

                <div>
                  <p className="text-gray-500 text-sm">
                    Customer
                  </p>
                  <p className="font-medium">
                    Michael Chen
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Hotel
                  </p>
                  <p className="font-medium">
                    Skyline Suites Downtown
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Check-in Date
                  </p>
                  <p className="font-medium">
                    Feb 18, 2026
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Reported
                  </p>
                  <p className="font-medium">
                    Today, 10:30 AM
                  </p>
                </div>

              </div>
            </div>

            {/* AI Button */}
            <div className="text-center">
              <button
                onClick={() => navigate("/ai")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Open AI Copilot
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
