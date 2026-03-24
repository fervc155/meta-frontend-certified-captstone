import Card from "../../../components/card";

export default function Specials() {
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
