// server.js
const express = require('express');
const path = require('path');
const axios = require('axios');
require('dotenv').config();  // Load environment variables

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'src')));

// Endpoint to proxy API requests to Azure APIM
app.get('/api/data', async (req, res) => {
    try {
        //const apiUrl = 'https://<your-apim-name>.azure-api.net/<api-name>/<operation>'; // Replace with actual API URL
        const apiUrl = 'https://apimtool.azure-api.net/Bobbytestfunc/sendit?name=Daniel';
        const response = await axios.get(apiUrl);
        /*, {
            headers: {
                'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`, // Use OAuth2 token if required
                'Ocp-Apim-Subscription-Key': process.env.SUBSCRIPTION_KEY // If using subscription key
            }
        });*/
        res.json(response.data);  // Send API response to the frontend
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from API');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
