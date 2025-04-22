const movies = {
    "1": { title: "Avengers: Endgame", time: "6:30 PM", price: 10, poster: "/images/avengers.jpg" },
    "2": { title: "The Batman", time: "8:00 PM", price: 12, poster: "/images/batman.jpg" },
    "3": { title: "Joker", time: "5:00 PM", price: 8, poster: "/images/joker.jpg" }
  };
  
  const params = new URLSearchParams(window.location.search);
  const movieId = params.get('movieId');
  const movie = movies[movieId];
  const bookingCard = document.getElementById('bookingCard');
  const seatsContainer = document.getElementById('seatsContainer');
  const totalDisplay = document.getElementById('total');
  
  const rows = 6;
  const cols = 8;
  let selectedSeats = new Set();
  let bookedSeats = new Set(["B3", "C5", "E7"]); // Use new label style
  
  if (movie) {
    bookingCard.innerHTML = `
      <img src="${movie.poster}" style="width: 250px; border-radius: 10px;" />
      <h2>${movie.title}</h2>
      <p>Time: ${movie.time}</p>
      <p>Price per seat: $${movie.price}</p>
    `;
  
    renderSeats();
  } else {
    bookingCard.innerHTML = `<p>Movie not found.</p>`;
  }
  

  function renderSeats() {
    seatsContainer.innerHTML = "";
  
    for (let r = 0; r < rows; r++) {
      const rowEl = document.createElement("div");
      rowEl.classList.add("seat-row");
      const rowLetter = String.fromCharCode(65 + r); // A, B, C...
  
      for (let c = 1; c <= cols; c++) {
        const seatLabel = `${rowLetter}${c}`;
        const seat = document.createElement("div");
        seat.className = "seat";
  
        if (bookedSeats.has(seatLabel)) {
          seat.classList.add("booked");
        } else {
          seat.addEventListener("click", () => toggleSeat(seatLabel, seat));
        }
  
        if (selectedSeats.has(seatLabel)) {
          seat.classList.add("selected");
        }
  
        seat.textContent = seatLabel;
        rowEl.appendChild(seat);
      }
  
      seatsContainer.appendChild(rowEl);
    }
  
    updateTotal();
  }
  
  
  function toggleSeat(seatId, seatEl) {
    if (selectedSeats.has(seatId)) {
      selectedSeats.delete(seatId);
      seatEl.classList.remove("selected");
    } else {
      selectedSeats.add(seatId);
      seatEl.classList.add("selected");
    }
    updateTotal();
  }
  
  function updateTotal() {
    const total = selectedSeats.size * movie.price;
    totalDisplay.textContent = total;
  }
  
  function confirmBooking() {
    if (selectedSeats.size === 0) {
      alert("Please select at least one seat.");
      return;
    }
  
    alert(`🎟️ Booked seats: ${[...selectedSeats].join(", ")} for ${movie.title}`);
    // TODO: Save to MongoDB
    window.location.href = "/";
  }
  