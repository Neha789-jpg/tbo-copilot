import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function AICopilot() {
  const location = useLocation();
  const booking = location.state?.booking;

  const [loading, setLoading] = useState(true);
  const [aiData, setAiData] = useState(null);
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    if (!booking) {
      setLoading(false);
      return;
    }

    const fetchAI = async () => {
      try {
        const today = new Date();
        const checkInDate = new Date(today);
        checkInDate.setDate(today.getDate() + 3);
        const checkOutDate = new Date(today);
        checkOutDate.setDate(today.getDate() + 5);

        const formattedCheckIn = checkInDate.toISOString().split("T")[0];
        const formattedCheckOut = checkOutDate.toISOString().split("T")[0];

        const response = await fetch(
          "http://localhost:5000/api/disruption",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            checkIn: formattedCheckIn,
            checkOut: formattedCheckOut,
            hotelCodes: "1301701", // 🔥 Your working hotel code
            originalPrice: booking.price,
            issueType: booking.issueType, // 🔥 NEW ADDITION
        }),
      }
   );

        const data = await response.json();
        setAiData(data);
      } catch (error) {
        setAiData({
          status: "error",
          message: "Backend connection failed",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchAI();
  }, [booking]);

  if (!booking) {
    return <div className="p-8">No booking found.</div>;
  }

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">
        AI Copilot – Booking #{booking.id}
      </h2>

      {loading ? (
        <p>Analyzing live hotel availability...</p>
      ) : aiData?.status === "success" ? (
        <div className="space-y-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-3">
              Recommended Resolution
            </h3>
            <p><strong>Room:</strong> {aiData.decision?.recommendedRoom}</p>
            <p className="text-xl font-bold mt-2">
              ₹{aiData.decision?.price}
            </p>
            <p>{aiData.decision?.impact}</p>
            <p className="font-semibold">
              Confidence: {aiData.decision?.confidence}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-3">
              Message Preview
            </h3>

            <div className="bg-gray-50 p-4 rounded text-sm space-y-2">
              <p>Dear {booking.name},</p>
              <p>
                Due to an operational issue at{" "}
                <strong>{booking.hotel}</strong>,
                we are offering:
              </p>
              <p>
                <strong>
                  {aiData.decision?.recommendedRoom}
                </strong>{" "}
                at ₹{aiData.decision?.price}.
              </p>
              <p>Please confirm to proceed.</p>
              <p>Travel Support Team</p>
            </div>

            <button
              onClick={() => {
                setMessageSent(true);
                setTimeout(() => setMessageSent(false), 3000);
              }}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded"
            >
              Send to Traveller
            </button>
          </div>

        </div>
      ) : (
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-red-600">
            {aiData?.message || "No available rooms for this criteria."}
          </p>
        </div>
      )}

      {messageSent && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow">
          ✅ Message successfully sent
        </div>
      )}
    </div>
  );
}