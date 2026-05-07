import './ListaProdutos.css';

const ListaProdutos = () => {
  const produtos = [
    { id: 1, nome: "Teclado mecânico", preco: 250.00, cor: "#FFE4E1" },
    { id: 2, nome: "Mouse gamer", preco: 120.00, cor: "#E0FFFF" },
    { id: 3, nome: "Monitor 144hz", preco: 1200.00, cor: "#F5F5DC" },
    { id: 4, nome: "Headset USB", preco: 180.00, cor: "#E6E6FA" },
  ];

  return (
    <div className="container-lista">
      {produtos.map((produto) => (
        <div 
          key={produto.id} 
          className="produto-item" 
          style={{ backgroundColor: produto.cor }}
        >
          <span className="produto-nome">{produto.nome}</span>
          <span className="produto-preco">R$ {produto.preco.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
};

export default ListaProdutos;