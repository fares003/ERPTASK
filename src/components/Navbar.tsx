import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="nav-logo">
          SKU Management
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">Branches</Link>
          </li>
          <li>
            <Link to="/add-branch" className="nav-link">Add Branch</Link>
          </li>
          <li>
            <Link to="/skus" className="nav-link">SKUs</Link>
          </li>
          <li>
            <Link to="/add-sku" className="nav-link">Add SKU</Link>
          </li>
          <li>
            <Link to="/scan-qr" className="nav-link">Scan QR</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 