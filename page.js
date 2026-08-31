'use client';

import Link from 'next/link';
import EquipmentCard from './components/EquipmentCard';
import './styles/home.css';

// Sample data
const categories = [
  { id: 1, name: 'Tractors', icon: '🚜' },
  { id: 2, name: 'Harvesters', icon: '🌾' },
  { id: 3, name: 'Plows', icon: '⚙️' },
  { id: 4, name: 'Sprayers', icon: '💧' },
  { id: 5, name: 'Threshers', icon: '🔄' },
  { id: 6, name: 'Other Equipment', icon: '📦' },
];

const popularEquipment = [
  { id: 1, name: 'John Deere Tractor', type: 'Tractor', price: 1500, rating: 4.8, location: 'Punjab', availability: 'Available', image: '🚜' },
  { id: 2, name: 'Combine Harvester', type: 'Harvester', price: 2500, rating: 4.9, location: 'Haryana', availability: 'Available', image: '🌾' },
  { id: 3, name: 'Seed Drill', type: 'Seeding Equipment', price: 800, rating: 4.7, location: 'Rajasthan', availability: 'Available', image: '⚙️' },
  { id: 4, name: 'Sprayer Equipment', type: 'Spraying', price: 600, rating: 4.6, location: 'Maharashtra', availability: 'Unavailable', image: '💧' },
];

const stats = [
  { number: '10,000+', label: 'Equipment Available' },
  { number: '5,000+', label: 'Happy Farmers' },
  { number: '50+', label: 'Cities Covered' },
  { number: '₹5 Crore', label: 'Savings Made' },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1>Rent Agricultural Equipment Online</h1>
          <p>Easy, affordable, and reliable equipment rental for farmers</p>
          
          <div className="search-section">
            <input 
              type="text" 
              placeholder="Search for equipment..."
            />
          </div>

          <div className="quick-actions">
            <div className="action-card">
              <div className="icon">🔍</div>
              <h3>Browse Equipment</h3>
              <p>Explore our wide range of farming equipment</p>
              <Link href="/equipment">View All</Link>
            </div>

            <div className="action-card">
              <div className="icon">📋</div>
              <h3>My Rentals</h3>
              <p>Track your current and past rentals</p>
              <Link href="/my-rentals">View Rentals</Link>
            </div>

            <div className="action-card">
              <div className="icon">💰</div>
              <h3>Best Prices</h3>
              <p>Save up to 70% compared to buying new</p>
              <Link href="/equipment">Explore Deals</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          
          <div className="categories-grid">
            {categories.map((category) => (
              <div key={category.id} className="category-card">
                <div className="category-icon">{category.icon}</div>
                <p className="category-name">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Equipment Section */}
      <section className="popular-section">
        <div className="container">
          <h2 className="section-title">Popular Equipment</h2>
          
          <div className="equipment-showcase">
            {popularEquipment.map((equipment) => (
              <EquipmentCard key={equipment.id} {...equipment} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/equipment" className="btn-primary" style={{ display: 'inline-block', padding: '0.75rem 2rem' }}>
              View All Equipment
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-white">
        <div className="container text-center">
          <h2>Ready to Rent?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            Sign up today and get access to thousands of farming equipment across India
          </p>
          <Link href="/register" className="btn-primary" style={{ display: 'inline-block', padding: '0.75rem 2rem' }}>
            Create Free Account
          </Link>
        </div>
      </section>
    </main>
  );
}
