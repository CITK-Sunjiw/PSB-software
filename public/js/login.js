document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // <-- This is what prevents the page from reloading!
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
  
    const data = await res.json();
    const messageEl = document.getElementById('loginMessage');
  
    if (res.ok) {
      messageEl.style.color = 'green';
      messageEl.textContent = data.message;
      setTimeout(() => {
        window.location.href = '/'; // Redirect to homepage
      }, 1000);
    } else {
      messageEl.style.color = 'red';
      messageEl.textContent = data.error;
    }

    localStorage.setItem("userEmail", email);
  });
  