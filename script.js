const form = document.getElementById('raffleForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const winnerDiv = document.getElementById('winner');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;
    if (!name || !email) {
        alert("Please enter your name and email");
        return;
    }
    // Add the user to the raffle pool
    fetch('/api/raffle', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    }).then(response => response.json())
      .then(data => {
          console.log(data);
          if (data.success) {
              winnerDiv.innerHTML = `Congratulations, ${name}! You have been entered into the raffle.`;
          } else {
              alert(`Error: ${data.message}`);
          }
      });
});
