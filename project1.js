 // Get reference to buttons
    const blueBtn = document.getElementById('blueBtn');
    const redBtn = document.getElementById('redBtn');
    const greenBtn = document.getElementById('greenBtn');


    // Add event listeners to buttons
    blueBtn.addEventListener('click', () => {
      document.body.style.backgroundColor = '#007bff';
    });

    greenBtn.addEventListener('click', () => {
      document.body.style.backgroundColor = '#28a745';
    });

    redBtn.addEventListener('click', () => {
      document.body.style.backgroundColor = '#dc3545';
    });