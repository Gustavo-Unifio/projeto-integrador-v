import './Menu.css';

const Menu = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><a href="#home" className="nav-link">Home</a></li>
        <li><a href="#produtos" className="nav-link">Produtos</a></li>
        <li><a href="#contato" className="nav-link">Contato</a></li>
        <li><a href="#sobre" className="nav-link">Sobre</a></li>
      </ul>
    </nav>
  );
};

export default Menu;