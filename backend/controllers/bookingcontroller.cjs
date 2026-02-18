const mockBookings = [
  { name: "Sarah Johnson", hotel: "Grand Plaza Hotel", date: "2026-02-20", status: "Confirmed" },
  { name: "Michael Chen", hotel: "Skyline Suites Downtown", date: "2026-02-18", status: "Issue" },
  { name: "Emily Rodriguez", hotel: "Oceanview Resort & Spa", date: "2026-02-22", status: "Confirmed" },
  { name: "David Park", hotel: "Metropolitan Business Hotel", date: "2026-02-19", status: "Confirmed" },
  { name: "Lisa Anderson", hotel: "Airport Gateway Inn", date: "2026-02-21", status: "Pending" }
];

exports.getBookings = (req, res) => {
  res.json(mockBookings);
};
