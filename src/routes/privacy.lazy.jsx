import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/privacy')({
  component: Privacy,
});

function Privacy() {
  return (
    <section>
      <h1>Privacy Policy</h1>
      <p>
        This is the privacy policy page. You can explain how user data is
        handled here.
      </p>
    </section>
  );
}
