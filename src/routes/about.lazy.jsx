// src/routes/about.lazy.jsx
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/about')({
  component: About,
});

function About() {
  return (
    <section>
      <h1>ABOUT US</h1>
      <p>
        This is the about page. You can explain how user data is handled here.
      </p>
    </section>
  );
}
