// src/routes/contact.lazy.jsx
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/contact')({
  component: Contact,
});
function Contact() {
  return (
    <section>
      <h1>Contact Us</h1>
      <p>
        We'd love to hear from you! Fill out the form below or reach us directly
        via email.
      </p>
    </section>
  );
}
