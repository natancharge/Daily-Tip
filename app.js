document.addEventListener('DOMContentLoaded', function () {
    // Fetch tips from the JSON file
    fetch('tips.json')
      .then(response => response.json())
      .then(data => {
        // Get the tips array
        const tips = data.tips;
  
        // Get the current date
        const currentDate = new Date();
  
        // Get the day of the year (1-365)
        const dayOfYear = Math.floor((currentDate - new Date(currentDate.getFullYear(), 0, 0)) / (24 * 60 * 60 * 1000));
  
        // Use the day of the year to select a tip
        const selectedTip = tips[dayOfYear % tips.length];
  
        // Display the tip in the HTML
        document.getElementById('dailyTip').textContent = selectedTip;
      })
      .catch(error => console.error('Error fetching tips:', error));
  });