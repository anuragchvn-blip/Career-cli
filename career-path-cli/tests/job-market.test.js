import axios from 'axios';
import { fetchJobMarketData } from '../src/job-market/insights';

describe('Job Market Insights', () => {
  test('should fetch job market data successfully', async () => {
    const data = await fetchJobMarketData();
    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBe(true);
  });

  test('should handle errors when fetching job market data', async () => {
    // Mocking the Axios get method to simulate an error
    jest.spyOn(axios, 'get').mockImplementation(() => Promise.reject(new Error('API Error')));

    await expect(fetchJobMarketData()).rejects.toThrow('API Error');

    // Restore the original Axios get function
    axios.get.mockRestore();
  });
});
