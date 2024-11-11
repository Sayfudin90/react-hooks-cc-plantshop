import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../../components/App";

// Mock the fetch function before each test
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([
        { id: 1, name: "Aloe", image: "image1.jpg", price: 10, soldOut: false },
        { id: 2, name: "ZZ Plant", image: "image2.jpg", price: 15, soldOut: true }
      ])
    })
  );
});

// Restore the fetch mock after each test
afterEach(() => {
  jest.restoreAllMocks();
});

test("creates a new plant", async () => {
  render(<App />);
  
  // Test that creating a new plant works (example)
  fireEvent.click(screen.getByText(/Add Plant/i)); // Adjust based on your UI
  
  // Simulate filling out the form to create a plant
  fireEvent.change(screen.getByPlaceholderText(/Plant Name/i), { target: { value: "New Plant" } });
  fireEvent.click(screen.getByText(/Submit/i)); // Adjust based on your UI
  
  // Wait for the plant to be added
  await screen.findByText(/Some Text/i);

});
