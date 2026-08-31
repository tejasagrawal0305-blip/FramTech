'use client';

import Link from 'next/link';
import '../styles/layout.css';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About FarmTech</h4>
            <p>Your trusted platform for renting agricultural equipment. Making farming more accessible and affordable for everyone.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/equipment">Browse Equipment</Link></li>
              <li><Link href="/my-rentals">My Rentals</Link></li>
              <li><Link href="/login">Account</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><Link href="#help">Help Center</Link></li>
              <li><Link href="#faq">FAQ</Link></li>
              <li><Link href="#contact">Contact Us</Link></li>
              <li><Link href="#terms">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#twitter">Twitter</a></li>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#linkedin">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 FarmTech. All rights reserved. | Privacy Policy | Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
}
