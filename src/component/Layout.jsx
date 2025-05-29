import { Link, Outlet } from '@tanstack/react-router'

export default function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/about">About</Link> |{' '}
        <Link to="/contact">Contact</Link>|{' '}
        <Link to="/privacy">Privacy</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  )
}
