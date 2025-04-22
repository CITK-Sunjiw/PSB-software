const ticketBox = document.getElementById("ticketBox");
const booking = JSON.parse(localStorage.getItem("lastBooking"));

if (!booking) {
  ticketBox.innerHTML = "<p>No booking found.</p>";
} else {
  ticketBox.innerHTML = `
    <div class="ticket-left">
      <h2>${booking.movieTitle}</h2>
      <p>🎬 <strong>Time:</strong> ${booking.time}</p>
      <p>🪑 <strong>Seats:</strong> ${booking.seats.join(", ")}</p>
      <p>💵 <strong>Total:</strong> $${booking.total}</p>
    </div>
    <div class="ticket-right">
      <div class="barcode"></div>
      <p>#${booking.bookingId}</p>
      <button class="btn" onclick="window.location.href='/'">Home</button>
    </div>
  `;
}
