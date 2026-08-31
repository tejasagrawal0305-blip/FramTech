'use client';

import { useState } from 'react';
import '../styles/equipment.css';

export default function FilterBar({ onFilterChange }) {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    location: '',
    search: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="filters-section">
      <div className="search-bar">
        <input
          type="text"
          name="search"
          placeholder="Search equipment..."
          value={filters.search}
          onChange={handleChange}
        />
        <button className="btn-primary">Search</button>
      </div>

      <div className="filters-row">
        <div className="filter-group">
          <label>Category</label>
          <select
            name="category"
            value={filters.category}
            onChange={handleChange}
          >
            <option value="">All Categories</option>
            <option value="tractors">Tractors</option>
            <option value="harvesters">Harvesters</option>
            <option value="plows">Plows</option>
            <option value="sprayers">Sprayers</option>
            <option value="threshers">Threshers</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Price Range</label>
          <select
            name="priceRange"
            value={filters.priceRange}
            onChange={handleChange}
          >
            <option value="">All Prices</option>
            <option value="0-500">₹0 - ₹500</option>
            <option value="500-1000">₹500 - ₹1000</option>
            <option value="1000-2000">₹1000 - ₹2000</option>
            <option value="2000+">₹2000+</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Location</label>
          <select
            name="location"
            value={filters.location}
            onChange={handleChange}
          >
            <option value="">All Locations</option>
            <option value="delhi">Delhi</option>
            <option value="punjab">Punjab</option>
            <option value="maharashtra">Maharashtra</option>
            <option value="karnataka">Karnataka</option>
            <option value="rajasthan">Rajasthan</option>
          </select>
        </div>
      </div>
    </div>
  );
}
