import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AICopilot() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
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

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          <span>AI Active</span>
        </div>
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
        <div className="flex-1 p-8 overflow-y-auto flex justify-center">
          <div className="w-full max-w-3xl">

            {/* Header Card */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <h2 className="font-semibold text-lg mb-2">
                AI Copilot
              </h2>
              <p className="text-blue-700">
                Booking #2 · Michael Chen · Skyline Suites Downtown
              </p>
            </div>

            {loading ? (
              /* Loading Screen */
              <div className="bg-white rounded-xl shadow border p-16 text-center">
                <div className="text-4xl mb-4">✨</div>
                <p className="text-lg font-medium mb-2">
                  Analyzing issue...
                </p>
                <p className="text-gray-500">
                  AI is generating recommendations
                </p>
              </div>
            ) : (
              /* Result Screen */
              <div className="space-y-8">

                {/* Suggested Resolution */}
                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg mb-4">
                    Suggested Resolution
                  </h3>

                  <ul className="space-y-3 text-gray-700">
                    <li>1️⃣ Negotiate complimentary early check-in with hotel</li>
                    <li>2️⃣ Offer paid early check-in option ($50–75)</li>
                    <li>3️⃣ Provide lounge access with day-pass</li>
                    <li>4️⃣ Suggest alternative hotel with immediate availability</li>
                  </ul>

                  <p className="mt-6 text-sm text-gray-500">
                    <strong>Reasoning:</strong> Paid early check-in is the most viable solution.
                  </p>
                </div>

                {/* Editable Message Section */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <EditableMessage />
                </div>

              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}


/* Editable Message Component */
function EditableMessage() {
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState(`Dear Michael,

We’ve worked with the hotel regarding your early check-in request.

Here are the available options:

• Paid Early Check-in: $65  
• Complimentary luggage storage  
• Business lounge access  

Please let us know your preference.

Best regards,  
Your Travel Agent`);

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">
          Message to Traveler
        </h3>

        <span className="text-sm bg-green-200 text-green-700 px-2 py-1 rounded">
          AI Generated
        </span>
      </div>

      {isEditing ? (
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full h-60 p-4 rounded-lg border bg-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <div className="bg-white rounded-lg p-4 border whitespace-pre-line text-gray-700">
          {message}
        </div>
      )}

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-blue-600 font-medium hover:underline"
        >
          {isEditing ? "Cancel Editing" : "Edit Message"}
        </button>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
          Send to Traveler
        </button>
      </div>
    </>
  );
}
