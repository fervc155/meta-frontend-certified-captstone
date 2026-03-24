export default function Hero({ title, subtitle, cta }) {
  return (
    <section className="hero">
      <div className="container row">
        <div className="col-4 hero-text">
          <h1>{title}</h1>
          <h2 className="mt--1">{subtitle}</h2>
          <p className="cta">{cta}</p>
        </div>
      </div>
    </section>
  );
}
