import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import toast from "react-hot-toast";

export default function AICopilot() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [regenerating, setRegenerating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleRegenerate = () => {
    setRegenerating(true);

    setTimeout(() => {
      setRegenerating(false);
      toast.success("New AI suggestion generated!");
    }, 2000);
  };

  return (
    <MainLayout>

      <div className="max-w-3xl mx-auto">

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h2 className="font-semibold text-lg mb-2">
            AI Copilot
          </h2>
          <p className="text-blue-700">
            Booking #2 · Michael Chen · Skyline Suites Downtown
          </p>
        </div>

        {loading ? (
          <div className="bg-white rounded-xl shadow border p-16 text-center">
            <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-lg font-medium">Analyzing issue...</p>
          </div>
        ) : (
          <div className="space-y-8">

            {/* Suggested Resolution */}
            <div className="bg-white rounded-xl shadow border p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg">
                  Suggested Resolution
                </h3>

                <button
                  onClick={handleRegenerate}
                  disabled={regenerating}
                  className="text-blue-600 font-medium hover:underline disabled:opacity-50"
                >
                  {regenerating ? "Regenerating..." : "Regenerate"}
                </button>
              </div>

              <ul className="space-y-3 text-gray-700">
                <li>1️⃣ Offer paid early check-in</li>
                <li>2️⃣ Provide lounge access</li>
                <li>3️⃣ Suggest alternate hotel</li>
              </ul>
            </div>

            <EditableMessage />

          </div>
        )}

      </div>

    </MainLayout>
  );
}

/* Editable Message Component */
function EditableMessage() {
  const [isEditing, setIsEditing] = useState(false);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState(`Dear Michael,

We’ve coordinated with the hotel regarding your early check-in request.

Available options:

• Paid Early Check-in: $65  
• Complimentary luggage storage  

Please let us know your preference.

Best regards,
Your Travel Agent`);

  const maxChars = 500;

  const handleSend = () => {
    setSending(true);

    setTimeout(() => {
      setSending(false);
      toast.success("Message sent successfully!");
    }, 2000);
  };

  return (
    <div className="bg-green-50 border border-green-200 rounded-xl p-6">

      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">
          Message to Traveler
        </h3>

        <span className="text-sm bg-green-200 text-green-700 px-2 py-1 rounded">
          AI Generated
        </span>
      </div>

      {isEditing ? (
        <>
          <textarea
            value={message}
            maxLength={maxChars}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-60 p-4 rounded-lg border bg-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="text-right text-sm text-gray-500 mt-1">
            {message.length} / {maxChars} characters
          </div>
        </>
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

        <button
          onClick={handleSend}
          disabled={sending}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg disabled:opacity-50"
        >
          {sending ? "Sending..." : "Send to Traveler"}
        </button>
      </div>

    </div>
  );
}
