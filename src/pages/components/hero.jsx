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
