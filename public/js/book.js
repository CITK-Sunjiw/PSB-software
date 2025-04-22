// Dummy movie data (can come from backend later)
const movies = [
    {
      id: '1',
      title: 'Avengers: Endgame',
      time: '6:30 PM',
      price: 10,
      poster: 'images/avengers.jpg'
    },
    {
      id: '2',
      title: 'The Batman',
      time: '8:00 PM',
      price: 12,
      poster: 'images/batman.jpg'
    },
    {
      id: '3',
      title: 'Joker',
      time: '5:00 PM',
      price: 8,
      poster: 'images/joker.jpg'
    }
  ];
  
  const movieGrid = document.getElementById('movieGrid');
  
  movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';
  
    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>Time: ${movie.time}</p>
      <p>Price: $${movie.price}</p>
      <button class="btn" onclick="bookMovie('${movie.id}')">Book Now</button>
    `;
  
    movieGrid.appendChild(card);
  });
  
  function bookMovie(movieId) {
    // You can later pass movieId to booking.html
    window.location.href = `/booking.html?movieId=${movieId}`;
  }
  