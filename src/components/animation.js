"use client";
import React, { useState } from "react";

const WatchAnimation = () => {
  const [isZoomed, setIsZoomed] = useState(true);

  const handleAnimation = () => {
    setIsZoomed((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Customize Your Watch</h1>
      <div
        className={`transition-transform duration-500 ease-in-out ${
          isZoomed ? "scale-125" : "scale-75"
        }`}
      >
        <img
          src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv"
          alt="Watch"
          className="rounded-lg shadow-lg h-[500px]"
        />
      </div>
      <button
        onClick={handleAnimation}
        className="mt-26 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300"
      >
        Get Started
      </button>
    </div>
  );
};

export default WatchAnimation;
