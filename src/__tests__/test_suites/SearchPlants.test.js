import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from '../../components/App';
import '@testing-library/jest-dom';

// Mock fetch to simulate the data response
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({
        plants: [
          { id: 1, name: 'Aloe', image: 'image1.jpg', price: 10, soldOut: false },
          { id: 2, name: 'ZZ Plant', image: 'image2.jpg', price: 15, soldOut: true },
          { id: 3, name: 'Cactus', image: 'image3.jpg', price: 5, soldOut: false }
        ]
      })
    })
  );
});

describe('4th Deliverable', () => {
  test('filters plants by name on search', async () => {
    render(<App />);

    // Ensure the fetch is called once
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

    // Get the search input element
    const searchInput = screen.getByPlaceholderText('Type a name to search...');

    // Type 'aloe' into the search input
    fireEvent.change(searchInput, { target: { value: 'aloe' } });

    // Wait for the filtered plants to update and verify the result
    await waitFor(() => {
      const filteredPlants = screen.queryAllByTestId('plant-item');
      expect(filteredPlants).toHaveLength(1);
    });

    // Type 'p' into the search input
    fireEvent.change('p', { target: { value: 'p' } });

    // Wait for the filtered plants to update and verify the result
    await waitFor(() => {
      const filteredPlants = screen.queryAllByTestId('plant-item');
      expect(filteredPlants).toHaveLength(3); // Should be 3 plants: Aloe, ZZ Plant, Cactus
    });
  });
});
