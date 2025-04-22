console.log("User email:", userEmail); // Check if it's getting correct email

fetch(`/api/bookings?email=${userEmail}`)
  .then(res => res.json())
  .then(bookings => {
    console.log("Bookings received:", bookings); // Debug

    const container = document.getElementById('historyContainer');

    if (bookings.length === 0) {
      container.innerHTML = "<p>No bookings yet.</p>";
      return;
    }

    bookings.forEach(b => {
      const card = document.createElement("div");
      card.className = "booking-card";
      card.innerHTML = `
        <h3>${b.movieTitle}</h3>
        <p>Time: ${b.time}</p>
        <p>Seats: ${b.seats.join(", ")}</p>
        <p>Total Paid: $${b.price}</p>
        <p>Booked on: ${new Date(b.date).toLocaleString()}</p>
      `;
      container.appendChild(card);
    });
});
