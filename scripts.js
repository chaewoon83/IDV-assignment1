let outputElement = document.getElementById('psi-data');

async function fetchAndDisplayRawJSON() {
    try {
        const response = await fetch('https://api-open.data.gov.sg/v2/real-time/api/psi');
        
        if (!response.ok) {
             throw new Error(`Cannot fetch data from URL: ${response.status}`);
        }
        
        const data = await response.json();

        const jsonString = JSON.stringify(data, null, 2);

        outputElement.textContent = jsonString;

    } catch (error) {
        console.error("API request failed:", error);
        outputElement.textContent = `failed to fetch data: ${error.message}`;
    }
}

fetchAndDisplayRawJSON();