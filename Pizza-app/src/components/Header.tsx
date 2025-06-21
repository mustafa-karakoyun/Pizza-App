
import { useContext, type JSX } from "react";
import { CartContext } from "../contexts/CartContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";

export default function Header(): JSX.Element {
  const { color } = useContext(ThemeContext);
  const { items } = useContext(CartContext);

  const totalCartItems = items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <header>
      <nav
        className={`custom-navbar bg-${color} `}
        data-bs-theme="dark"
      >
        <div className="container ms-auto me-auto d-flex align-items-center">
          <a href="/" className="navbar-brand">
            🍕 KRAL PİZZA
          </a>
          <Link to="/cart" className="btn btn-dark ms-auto">
            <i className="bi bi-cart3"></i>
            <span className="ms-2">{totalCartItems}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}



