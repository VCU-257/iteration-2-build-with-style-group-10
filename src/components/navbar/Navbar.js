import { Link, useLocation } from 'react-router-dom';

const links = [
  { label: 'Transactions', to: '/transactions', icon: 'bi-currency-dollar' },
  { label: 'Connections', to: '/connections', icon: 'bi-people' },
  { label: 'Home', to: '/', icon: 'bi-house-door-fill' },
  { label: 'Profile', to: '/profile', icon: 'bi-person-square' },
  { label: 'Settings', to: '/settings', icon: 'bi-gear-wide-connected' },
];

function Navbar({ mobileOnly = false }) {
  const { pathname } = useLocation();

  function isActive(to) {
    return to === '/' ? pathname === '/' : pathname.startsWith(to);
  }

  return (
    <>
      {!mobileOnly && (
        <nav className="navbar navbar-expand-md navbar-light bg-light border-bottom d-none d-md-flex">
          <div className="container">
            <Link className="navbar-brand" to="/">Budget Buckets</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                {links.map(({ label, to, icon }) => (
                  <li className="nav-item" key={to}>
                    <Link
                      className={`nav-link ${isActive(to) ? 'text-primary' : 'text-secondary'}`}
                      to={to}
                    >
                      <i className={`bi ${icon}`}></i> {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      )}

      <div className="d-flex d-md-none fixed-bottom bg-light border-top text-center fs-5">
        {links.map(({ label, to, icon }) => (
          <Link
            key={to}
            to={to}
            className={`flex-fill py-2 text-decoration-none ${isActive(to) ? 'text-primary fw-bold' : 'text-secondary'}`}
            aria-label={label}
          >
            <i className={`bi ${icon}`}></i>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Navbar;
