'use client';

import Link from 'next/link';
import '../styles/equipment.css';

export default function EquipmentCard({ id, name, type, price, rating, location, availability, image }) {
  return (
    <div className="equipment-card">
      <div className="equipment-image">
        {image || '🚜'}
      </div>
      
      <div className="equipment-info">
        <h3 className="equipment-name">{name}</h3>
        <p className="equipment-type">{type}</p>

        <div className="equipment-rating">
          <span className="stars">★★★★★</span>
          <span>({rating} reviews)</span>
        </div>

        <div className="equipment-location">
          📍 {location}
        </div>

        <div className={`availability ${availability === 'Available' ? '' : 'unavailable'}`}>
          {availability}
        </div>

        <div className="price-section">
          <div>
            <div className="price">₹{price}</div>
            <div className="price-period">per day</div>
          </div>
        </div>

        <Link href={`/equipment/${id}`} className="btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
}
