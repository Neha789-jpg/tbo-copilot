import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const bookings = [
    {
      id: 1,
      name: "Sarah Johnson",
      hotel: "Grand Plaza Hotel",
      checkin: "Feb 20, 2026",
      status: "Confirmed",
    },
    {
      id: 2,
      name: "Michael Chen",
      hotel: "Skyline Suites Downtown",
      checkin: "Feb 18, 2026",
      status: "Issue",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      hotel: "Oceanview Resort & Spa",
      checkin: "Feb 22, 2026",
      status: "Confirmed",
    },
    {
      id: 4,
      name: "David Park",
      hotel: "Metropolitan Business Hotel",
      checkin: "Feb 19, 2026",
      status: "Confirmed",
    },
    {
      id: 5,
      name: "Lisa Anderson",
      hotel: "Airport Gateway Inn",
      checkin: "Feb 21, 2026",
      status: "Pending",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-600";
      case "Issue":
        return "bg-red-100 text-red-600";
      case "Pending":
        return "bg-yellow-100 text-yellow-600";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Top Navbar */}
      <div className="bg-blue-600 text-white flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600">
            💡
          </div>
          <h1 className="font-semibold text-lg">TBO Copilot</h1>
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
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-bold mb-6">Bookings</h2>

          <div className="bg-white rounded-xl shadow border overflow-hidden">
            <table className="w-full text-left">
              
              {/* Table Head */}
              <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
                <tr>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Hotel</th>
                  <th className="px-6 py-4">Check-in</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    
                    <td className="px-6 py-4 font-medium">
                      {booking.name}
                    </td>

                    <td className="px-6 py-4">
                      {booking.hotel}
                    </td>

                    <td className="px-6 py-4">
                      {booking.checkin}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${getStatusStyle(
                          booking.status
                        )}`}
                      >
                        {booking.status}
                      </span>
                    </td>

                    {/* Action Column */}
                    <td className="px-6 py-4 text-right">
                      {booking.status === "Issue" && (
                        <button
                          onClick={() => navigate("/issue")}
                          className="text-blue-600 font-medium hover:underline"
                        >
                          View
                        </button>
                      )}
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
