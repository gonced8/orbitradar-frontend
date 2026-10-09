import { useState, useCallback, useEffect } from "react";

const FAVORITES_KEY = "orbitradar_favorites";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(FAVORITES_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save to localStorage whenever favorites change
  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.warn("Could not save favorites:", error);
    }
  }, [favorites]);

  // Check if a satellite is favorited
  const isFavorite = useCallback(
    (noradId: number): boolean => {
      return favorites.includes(noradId);
    },
    [favorites],
  );

  // Toggle favorite status
  const toggleFavorite = useCallback((noradId: number): void => {
    setFavorites((prev) => {
      if (prev.includes(noradId)) {
        return prev.filter((id) => id !== noradId);
      }
      return [...prev, noradId];
    });
  }, []);

  // Add to favorites
  const addFavorite = useCallback((noradId: number): void => {
    setFavorites((prev) => {
      if (prev.includes(noradId)) return prev;
      return [...prev, noradId];
    });
  }, []);

  // Remove from favorites
  const removeFavorite = useCallback((noradId: number): void => {
    setFavorites((prev) => prev.filter((id) => id !== noradId));
  }, []);

  // Clear all favorites
  const clearFavorites = useCallback((): void => {
    setFavorites([]);
  }, []);

  return {
    favorites,
    isFavorite,
    toggleFavorite,
    addFavorite,
    removeFavorite,
    clearFavorites,
  };
};
