import React from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Specials />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="container nav">
      <div className="logo">
        <img className="logo" src="/assets/Logo.svg" alt="logo" />"
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container row">
        <div className="col-4 hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="cta">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="btn">Reserve a Table</button>
        </div>
        <div className="col-4"></div>
        <div className="col-4">
          <div className="img-restaurante">
            <img
              src="/assets/restauranfood.jpg"
              alt="food"
              className="hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Specials() {
  return (
    <section className="container specials mt-5">
      <div className="row header">
        <p className="h1">This weeks specials!</p>
        <button className="btn">Online Menu</button>
      </div>

      <div className="row">
        <Card
          img="/assets/salad.jpg"
          title="Greek salad"
          price="$12.99"
          desc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese."
        />

        <Card
          img="/assets/bruchetta.svg"
          title="Bruschetta"
          price="$5.99"
          desc="Grilled bread smeared with garlic and seasoned with salt and olive oil."
        />

        <Card
          img="/assets/lemon.jpg"
          title="Lemon Dessert"
          price="$5.00"
          desc="Straight from grandma's recipe book, every ingredient has been sourced."
        />
      </div>
    </section>
  );
}

function Card({ img, title, price, desc }) {
  return (
    <div className="col-4">
      <div className="card">
        <img src={img} alt={title} />
        <div className="card-body">
          <div className="card-header">
            <h4>{title}</h4>
            <span>{price}</span>
          </div>
          <p>{desc}</p>
          <button className="link extra">Order a delivery 🚚</button>
        </div>
      </div>
    </div>
  );
}
