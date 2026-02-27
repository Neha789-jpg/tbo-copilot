import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const bookings = [
    {
      id: 1,
      name: "Sarah Johnson",
      hotel: "Grand Plaza Hotel",
      date: "2026-06-15",
      status: "Confirmed",
      price: 6500,
    },
    {
      id: 2,
      name: "Michael Chen",
      hotel: "Skyline Suites",
      date: "2026-06-20",
      status: "Issue",
      issueType: "Overbooking",
      price: 7200,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      hotel: "Oceanview Resort",
      date: "2026-06-18",
      status: "Confirmed",
      price: 8100,
    },
    {
      id: 4,
      name: "Arjun Mehta",
      hotel: "City Central Inn",
      date: "2026-06-22",
      status: "Issue",
      issueType: "Price Increase",
      price: 5400,
    },
    {
      id: 5,
      name: "Sofia Martinez",
      hotel: "Lakeview Palace",
      date: "2026-06-25",
      status: "Resolved",
      price: 9000,
    },
    {
      id: 6,
      name: "Daniel Kim",
      hotel: "Mountain Retreat",
      date: "2026-06-28",
      status: "Confirmed",
      price: 7600,
    },
  ];

  const getStatusStyle = (status) => {
    if (status === "Issue") return "bg-red-100 text-red-700";
    if (status === "Confirmed") return "bg-green-100 text-green-700";
    if (status === "Resolved") return "bg-blue-100 text-blue-700";
  };

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">
        Travel Operations Dashboard
      </h2>

      <div className="bg-white rounded-xl shadow">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="border-b p-4 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{booking.name}</p>
              <p className="text-sm text-gray-500">
                {booking.hotel} • {booking.date}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span
                className={`px-3 py-1 rounded-full text-sm ${getStatusStyle(
                  booking.status
                )}`}
              >
                {booking.status}
              </span>

              {booking.status === "Issue" && (
                <button
                  onClick={() =>
                    navigate(`/issue/${booking.id}`, {
                      state: { booking },
                    })
                  }
                  className="bg-blue-600 text-white px-4 py-1 rounded"
                >
                  View Issue
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}