import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export default function IssueDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const bookings = [
    { id: 1, name: "Sarah Johnson", hotel: "Grand Plaza Hotel", checkin: "Feb 20, 2026", status: "Confirmed" },
    { id: 2, name: "Michael Chen", hotel: "Skyline Suites Downtown", checkin: "Feb 18, 2026", status: "Issue" },
    { id: 3, name: "Emily Rodriguez", hotel: "Oceanview Resort & Spa", checkin: "Feb 22, 2026", status: "Confirmed" },
  ];

  const booking = bookings.find((b) => b.id === Number(id));

  if (!booking) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center h-96">
          <p className="text-lg font-medium">Booking not found</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>

      <h2 className="text-2xl font-bold mb-1">Issue Details</h2>
      <p className="text-gray-500 mb-6">Booking #{booking.id}</p>

      {/* Issue Alert */}
      <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-6 mb-8">
        <h3 className="font-semibold text-lg mb-2">
          ❗ Early Check-in Denied
        </h3>
        <p>
          Traveler reported an early check-in issue for this booking.
        </p>
      </div>

      {/* Booking Info */}
      <div className="bg-white rounded-xl shadow border p-6 mb-8">
        <h3 className="font-semibold text-lg mb-6">
          Booking Information
        </h3>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-gray-500 text-sm">Customer</p>
            <p className="font-medium">{booking.name}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Hotel</p>
            <p className="font-medium">{booking.hotel}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Check-in Date</p>
            <p className="font-medium">{booking.checkin}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Status</p>
            <p className="font-medium">{booking.status}</p>
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

    </MainLayout>
  );
}
