'use client';

import { useState } from 'react';
import EquipmentCard from '../components/EquipmentCard';
import FilterBar from '../components/FilterBar';
import '../styles/equipment.css';

// Sample equipment data
const allEquipment = [
  { id: 1, name: 'John Deere Tractor', type: 'Tractor', price: 1500, rating: 4.8, location: 'Punjab', availability: 'Available', image: '🚜' },
  { id: 2, name: 'Combine Harvester', type: 'Harvester', price: 2500, rating: 4.9, location: 'Haryana', availability: 'Available', image: '🌾' },
  { id: 3, name: 'Seed Drill', type: 'Seeding Equipment', price: 800, rating: 4.7, location: 'Rajasthan', availability: 'Available', image: '⚙️' },
  { id: 4, name: 'Sprayer Equipment', type: 'Spraying', price: 600, rating: 4.6, location: 'Maharashtra', availability: 'Unavailable', image: '💧' },
  { id: 5, name: 'Power Thresher', type: 'Threshing', price: 1200, rating: 4.7, location: 'Delhi', availability: 'Available', image: '🔄' },
  { id: 6, name: 'Rotavator', type: 'Cultivation', price: 900, rating: 4.5, location: 'Punjab', availability: 'Available', image: '⚙️' },
  { id: 7, name: 'Disc Harrow', type: 'Soil Preparation', price: 700, rating: 4.6, location: 'Haryana', availability: 'Available', image: '📦' },
  { id: 8, name: 'Pump Set', type: 'Irrigation', price: 500, rating: 4.8, location: 'Karnataka', availability: 'Available', image: '💧' },
];

export default function Equipment() {
  const [filters, setFilters] = useState({});
  const [equipment, setEquipment] = useState(allEquipment);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    let filtered = allEquipment;

    if (newFilters.search) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(newFilters.search.toLowerCase()) ||
        item.type.toLowerCase().includes(newFilters.search.toLowerCase())
      );
    }

    if (newFilters.category) {
      filtered = filtered.filter(item =>
        item.type.toLowerCase().includes(newFilters.category.toLowerCase())
      );
    }

    if (newFilters.location) {
      filtered = filtered.filter(item =>
        item.location.toLowerCase().includes(newFilters.location.toLowerCase())
      );
    }

    setEquipment(filtered);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="equipment-hero">
        <div className="container hero-content">
          <h1 className="hero-title">Equipment Rental Marketplace</h1>
          <p className="hero-subtitle">Find the perfect agricultural equipment for your farming needs</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section">
        <div className="container">
          <FilterBar onFilterChange={handleFilterChange} />

          {/* Results Count */}
          <div style={{ marginBottom: '1.5rem', color: '#666' }}>
            Showing {equipment.length} equipment
          </div>

          {/* Equipment Grid */}
          {equipment.length > 0 ? (
            <div className="equipment-grid">
              {equipment.map((item) => (
                <EquipmentCard key={item.id} {...item} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <h3>No equipment found</h3>
              <p style={{ color: '#666', marginBottom: '2rem' }}>Try adjusting your filters</p>
              <button 
                className="btn-primary"
                onClick={() => setEquipment(allEquipment)}
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Pagination */}
          <div className="pagination">
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>Next →</button>
          </div>
        </div>
      </section>
    </main>
  );
}
