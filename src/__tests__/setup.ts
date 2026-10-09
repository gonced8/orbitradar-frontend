// Test setup file
// This file is run before each test file

import { beforeAll, afterAll, beforeEach, afterEach } from "vitest";

// Mock localStorage for testing
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string): string | null => store[key] || null,
    setItem: (key: string, value: string): void => {
      store[key] = value;
    },
    removeItem: (key: string): void => {
      delete store[key];
    },
    clear: (): void => {
      store = {};
    },
  };
})();

// Assign mock to global
Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

// Mock navigator.geolocation
Object.defineProperty(navigator, "geolocation", {
  value: {
    getCurrentPosition: (success: PositionCallback) => {
      // Default to a location in Brazil
      success({
        coords: {
          latitude: -23.5505,
          longitude: -46.6333,
          accuracy: 100,
          altitude: null,
          altitudeAccuracy: null,
          heading: null,
          speed: null,
        },
        timestamp: Date.now(),
      });
    },
    watchPosition: () => {},
    clearWatch: () => {},
  },
  writable: true,
});

// Global test setup
beforeAll(() => {
  // Any global setup
});

afterAll(() => {
  // Any global cleanup
});

beforeEach(() => {
  // Clear localStorage before each test
  window.localStorage.clear();
});

afterEach(() => {
  // Any cleanup after each test
});
