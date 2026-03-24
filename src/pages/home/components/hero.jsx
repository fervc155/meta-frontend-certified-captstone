import { Link } from "react-router-dom";

export default function Hero() {
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
          <Link to="/booking">
            <button className="btn">Reserve a Table</button>
          </Link>
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
