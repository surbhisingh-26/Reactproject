import React from 'react';
import './App.css';

const destinations = [ 
  { name: 'Athens', image: 'athens.jpg' },
  { name: 'Fira', image: 'fira.jpg' },
  { name: 'Mykonos', image: 'mykonos1.jpg' },
  { name: 'Santorini', image: 'santorini.jpg' },
  { name: 'Mykonos', image: 'mykonos2.jpg' },
  { name: 'Chania', image: 'chania.jpg' },
  { name: 'Corfu', image: 'corfu.jpg' },
  { name: 'Rhodes', image: 'rhodes.jpg' },
];

const itineraries = [
  { days: '1 Day', image: 'itinerary1.jpg', description: 'Osaka Castle is one of the most famous landmarks in Japan...' },
  { days: '2 Day', image: 'itinerary2.jpg', description: 'It’s easy to enjoy what Osaka is famous for—shopping and food...' },
  { days: '3 Day', image: 'itinerary3.jpg', description: 'There are plenty of ways to spend your flight in Donostia...' },
];

const App = () => {
  return (
    <div className="app">
      <header className="hero">
        <nav className="navbar">
          <h1>Spirit of Discovery</h1>
          <ul>
            <li>Discover</li>
            <li>Book</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <div className="hero-text">
          <p>Adventure Awaits at Your Fingertips</p>
          <h2>Discover, Explore, Thrive</h2>
          <button>ACT NOW</button>
        </div>
      </header>

      <section className="destinations">
        <h2>Top Destinations</h2>
        <p>
          It’s easy to customise your travel experience with our robust flight and hotel search filter options and <strong>Spirit of Discovery</strong> travel tools like flight fare alerts, deal-finder calendar, and early bird deals.
        </p>
        <div className="grid">
          {destinations.map((dest, index) => (
            <div key={index} className="card">
              <img src={dest.image} alt={dest.name} />
              <span>{dest.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="vacation-plan">
        <h2>Plan Your Vacation</h2>
        <p>
          It’s easy to customise your travel experience with our robust flight and hotel search filter options and <strong>Spirit of Discovery</strong> travel tools like flight fare alerts, deal-finder calendar, and early bird deals.
        </p>
        <div className="icons">
          <div className="icon-box">📦<p>Why</p></div>
          <div className="icon-box">📅<p>When</p></div>
          <div className="icon-box">👨‍👩‍👧‍👦<p>Best for</p></div>
          <div className="icon-box">♿<p>Accessible by</p></div>
        </div>
      </section>

      <section className="explore">
        <h2>Explore <button className="view-all">View All</button></h2>
        <p>
          It’s easy to customise your travel experience with our robust flight and hotel search filter options and <strong>Spirit of Discovery</strong> travel tools like flight fare alerts, deal-finder calendar, and early bird deals.
        </p>
        <div className="itinerary-grid">
          {itineraries.map((item, i) => (
            <div key={i} className="itinerary-card">
              <img src={item.image} alt={item.days + ' itinerary'} />
              <h3>{item.days} itinerary</h3>
              <p>{item.description}</p>
              <button>Learn More</button>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <p>I'm sold... Let's go</p>
        <div className="cta-buttons">
          <button className="whatsapp">WhatsApp</button>
          <button className="call">Call us</button>
          <button className="mail">Mail us</button>
        </div>
      </section>

      <section className="tourist-traps">
        <h2>Tourist – Traps to Avoid</h2>
        <p>
          Hey! Travel is here to help you find your dream holiday. Easy—you just find where you want to go and buy the ticket.
        </p>
        <ul>
          <li>
            <strong>Overcrowded Trails</strong>
            <p>Some hiking trails like Cinque Terre’s can get overcrowded. Visit early or late to avoid crowds.</p>
          </li>
          <li>
            <strong>Tourist Traps in Vernazza and Monterosso</strong>
            <p>Explore lesser-known areas like Corniglia, Manarola for a more authentic experience.</p>
          </li>
          <li>
            <strong>Parking Scams</strong>
            <p>Use official parking areas recommended by locals to avoid scams or fines.</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default App; 
