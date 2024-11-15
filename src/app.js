// src/app.js
document.getElementById('fetchData').addEventListener('click', async function() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();

        // Display the data in the 'apiResponse' div
        document.getElementById('apiResponse').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('apiResponse').innerText = 'Error fetching data.';
    }
});
