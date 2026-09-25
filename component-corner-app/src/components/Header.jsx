import "./Header.css";

function Header({ storeName }) {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="store-name">{storeName}</h1>

        <nav>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;