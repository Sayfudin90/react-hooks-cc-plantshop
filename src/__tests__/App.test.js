import { render, screen, waitFor } from "@testing-library/react";
import App from "../components/App"; 


// Mock the fetch request
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

// Restore mocks after each test
afterEach(() => {
  jest.restoreAllMocks();
});

test("loads and displays plants", async () => {
    render(<App />);
  
    // Wait for the Aloe plant to be present in the document
    await waitFor(() => {
      expect(screen.getByText(/Aloe/i)).toBeInTheDocument();
    });
  
    // Similarly for ZZ Plant
    await waitFor(() => {
      expect(screen.getByText(/ZZ Plant/i)).toBeInTheDocument();
    });
  });
