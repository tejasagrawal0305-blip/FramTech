'use client';

import Link from 'next/link';
import '../styles/layout.css';

export default function Header() {
  return (
    <header>
      <nav className="container">
        <Link href="/" className="logo">
          🚜 FarmTech
        </Link>
        
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/equipment">Equipment</Link></li>
          <li><Link href="/my-rentals">My Rentals</Link></li>
        </ul>

        <div className="nav-buttons">
          <Link href="/login" className="nav-button login">Login</Link>
          <Link href="/register" className="nav-button signup">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
}
