import BookingForm from "./components/bookingForm";
import Hero from "./components/hero";
export default function BookingPage() {
  return (
    <>
      <Hero />
      <section className="container booking-page">
        <BookingForm />
      </section>
    </>
  );
}
