const inquirer = require('inquirer');
const axios = require('axios');

async function fetchJobMarketData() {
  try {
    const appId = 'd4d8ff00'; // Replace with your actual app ID
    const apiKey = 'b9a1c40e567d3ce8de7bc86107cac03c'; // Replace with your actual app key
    const baseUrl = 'https://api.adzuna.com/v1/api/jobs/gb/search/1'; // Corrected endpoint
    const params = {
      app_id: appId,
      app_key: apiKey,
      what: 'Node.js, React.js, Web Developer, Frontend Developer, Software Engineer, Backend Developer ', // Search query
      where: 'London, USA, India, Britain, America, UK, United states', // Location
      results_per_page: 10,
    };

    const response = await axios.get(baseUrl, { params });
    console.log(response.data);

    if (response.data.results) {
      response.data.results.forEach(job => {
        console.log(`Job Title: ${job.title}, Location: ${job.location.display_name}`);
      });
    }
    return response.data.results;
  } catch (error) {
    console.error('Error fetching job data:', error);
    throw error;
  }
}

module.exports = { fetchJobMarketData };
