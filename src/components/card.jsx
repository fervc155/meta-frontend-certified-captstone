export default function Card({ img, title, price, desc }) {
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
