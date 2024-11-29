"use client";

import { useState, useEffect } from "react";

export default function MediaLoader({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const loadMedia = async () => {
      const mediaElements = document.querySelectorAll("img, video");
      const totalMedia = mediaElements.length;
      let loadedCount = 0;

      const updateProgress = () => {
        const progress = Math.round((loadedCount / totalMedia) * 100);
        setLoadingProgress(progress);
      };

      const mediaLoadPromises = Array.from(mediaElements).map((media) => {
        return new Promise((resolve) => {
          if (media.tagName === "IMG") {
            if (media.complete) {
              loadedCount++;
              updateProgress();
              resolve();
            } else {
              media.onload = () => {
                loadedCount++;
                updateProgress();
                resolve();
              };
              media.onerror = () => {
                loadedCount++;
                updateProgress();
                resolve();
              };
            }
          } else if (media.tagName === "VIDEO") {
            media.onloadedmetadata = () => {
              loadedCount++;
              updateProgress();
              resolve();
            };
            media.onerror = () => {
              loadedCount++;
              updateProgress();
              resolve();
            };
          }
        });
      });

      try {
        await Promise.all(mediaLoadPromises);
        setTimeout(() => setIsLoading(false), 500);
      } catch (error) {
        console.error("Media loading error:", error);
        setIsLoading(false);
      }
    };

    loadMedia();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="loader">
          <div className="spinner"></div>
          <div className="progress">Loading... {loadingProgress}%</div>
        </div>
      )}
      {!isLoading && children}
    </>
  );
}
