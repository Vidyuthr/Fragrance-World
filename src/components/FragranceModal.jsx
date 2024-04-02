import React from "react";
import "./FragranceModal.css";

const FragranceModal = ({ fragrance, onClose }) => {
  if (!fragrance) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{fragrance.name}</h2>
        <img src={fragrance.image} alt={fragrance.name} />
        <p>Rating: {fragrance.rating} / 10</p>
        <p>Notes: {fragrance.prominentNotes.join(" | ")}</p>
        <p>Occasion: {fragrance.occasion}</p>
        <p>Price Range: {fragrance.priceRange}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default FragranceModal;