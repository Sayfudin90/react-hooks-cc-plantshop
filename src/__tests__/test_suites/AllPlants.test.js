import { render, screen, waitFor } from "@testing-library/react";
import App from "../../components/App";

// Mock fetch
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

// Restore mocks
afterEach(() => {
  jest.restoreAllMocks();
});

test("fetches and displays plants", async () => {
  render(<App />);
  
  // Using waitFor with getByText
  
  await screen.findByText(/Some Text/i);
  expect(screen.getByText(/ZZ Plant/i)).toBeInTheDocument();
});
