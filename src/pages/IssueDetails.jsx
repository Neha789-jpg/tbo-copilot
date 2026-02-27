import { useParams, useNavigate, useLocation } from "react-router-dom";

export default function IssueDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const booking = location.state?.booking;

  if (!booking) {
    return <div className="p-8">Booking not found.</div>;
  }

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">
        Issue Details – Booking #{id}
      </h2>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <p><strong>Guest:</strong> {booking.name}</p>
        <p><strong>Hotel:</strong> {booking.hotel}</p>
        <p><strong>Check-in:</strong> {booking.date}</p>

        <div className="p-4 bg-red-100 text-red-700 rounded-lg">
          ⚠️ Issue Type: {booking.issueType}
          <br />
          Immediate action required.
        </div>

        <button
          onClick={() =>
            navigate("/ai", { state: { booking } })
          }
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          Resolve with AI Copilot
        </button>
      </div>
    </div>
  );
}