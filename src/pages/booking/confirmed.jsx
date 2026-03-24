import Hero from "../../components/hero";

export default function ConfirmedBooking() {
  return (
    <>
      <Hero
        title="Reserve a table"
        subtitle="Book your table now"
        cta="Make a reservation in our restaurant"
      />
      <section className="container text-center py-5">
        <h1>Booking Confirmed 🎉</h1>
        <p className="text-center">
          Your reservation has been successfully submitted.
        </p>
      </section>
    </>
  );
}
