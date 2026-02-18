import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export default function Dashboard() {
  const navigate = useNavigate();

  const bookings = [
    { id: 1, name: "Sarah Johnson", hotel: "Grand Plaza Hotel", checkin: "Feb 20, 2026", status: "Confirmed" },
    { id: 2, name: "Michael Chen", hotel: "Skyline Suites Downtown", checkin: "Feb 18, 2026", status: "Issue" },
    { id: 3, name: "Emily Rodriguez", hotel: "Oceanview Resort & Spa", checkin: "Feb 22, 2026", status: "Confirmed" },
    { id: 4, name: "David Park", hotel: "Metropolitan Business Hotel", checkin: "Feb 19, 2026", status: "Confirmed" },
    { id: 5, name: "Lisa Anderson", hotel: "Airport Gateway Inn", checkin: "Feb 21, 2026", status: "Pending" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch = booking.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

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
    <MainLayout>

      <h2 className="text-2xl font-bold mb-6">Bookings</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow border hover:shadow-lg transition">
          <p className="text-gray-500 text-sm">Total</p>
          <p className="text-xl font-bold">{bookings.length}</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow border hover:shadow-lg transition">
          <p className="text-gray-500 text-sm">Issues</p>
          <p className="text-xl font-bold text-red-600">
            {bookings.filter(b => b.status === "Issue").length}
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow border hover:shadow-lg transition">
          <p className="text-gray-500 text-sm">Pending</p>
          <p className="text-xl font-bold text-yellow-600">
            {bookings.filter(b => b.status === "Pending").length}
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow border hover:shadow-lg transition">
          <p className="text-gray-500 text-sm">Confirmed</p>
          <p className="text-xl font-bold text-green-600">
            {bookings.filter(b => b.status === "Confirmed").length}
          </p>
        </div>
      </div>

      {/* Search + Filter */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search by customer..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Issue">Issue</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow border overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
            <tr>
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Hotel</th>
              <th className="px-6 py-4">Check-in</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {filteredBookings.map((booking) => (
              <tr
                key={booking.id}
                className={`transition hover:bg-gray-50 ${
                  booking.status === "Issue" ? "bg-red-50" : ""
                }`}
              >
                <td className="px-6 py-4 font-medium">{booking.name}</td>
                <td className="px-6 py-4">{booking.hotel}</td>
                <td className="px-6 py-4">{booking.checkin}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${getStatusStyle(booking.status)}`}>
                    {booking.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  {booking.status === "Issue" && (
                    <button
                      onClick={() => navigate(`/issue/${booking.id}`)}
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

    </MainLayout>
  );
}
