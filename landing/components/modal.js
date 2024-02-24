import React, { useEffect } from 'react';

export default function Modal({ onClose, children }) {
  useEffect(() => {
    function keyListener(e) {
      if (e.code === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", keyListener);
    return () => document.removeEventListener("keydown", keyListener);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg">
        {children}
        <button 
          onClick={onClose} 
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          aria-label="Close modal"
        >
          Close
        </button>
      </div>
    </div>
  );
}
