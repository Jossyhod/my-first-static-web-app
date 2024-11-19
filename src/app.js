// src/app.js

// Import the Application Insights SDK
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

// Initialize Application Insights
const appInsights = new ApplicationInsights({
    config: {
        connectionString: 'Your_Connection_String_Here', // Replace with your actual connection string
        enableAutoRouteTracking: true, // Tracks navigation events automatically
    },
});
appInsights.loadAppInsights();
appInsights.trackPageView(); // Manually call to track the initial page load

// Add event listener for fetching data
document.getElementById('fetchData').addEventListener('click', async function() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();

        // Track a custom event for API fetch
        appInsights.trackEvent({ name: 'FetchDataButtonClicked' });

        // Display the data in the 'apiResponse' div
        document.getElementById('apiResponse').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error fetching data:', error);

        // Track an exception
        appInsights.trackException({ 
            error: new Error('Error fetching data'), 
            severityLevel: 3 // Use severity levels: 0 (Verbose), 1 (Information), 2 (Warning), 3 (Error), 4 (Critical)
        });

        document.getElementById('apiResponse').innerText = 'Error fetching data.';
    }
});

