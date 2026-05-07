import './GridProdutos.css';

const GridProdutos = () => {
  const produtos = [
    { id: 1, nome: "Cadeira Gamer", preco: "899,00" },
    { id: 2, nome: "Mouse sem Fio", preco: "150,00" },
    { id: 3, nome: "Teclado RGB", preco: "320,00" },
    { id: 4, nome: "Monitor 24'", preco: "750,00" },
    { id: 5, nome: "Headset 7.1", preco: "280,00" },
    { id: 6, nome: "Suporte Articulado", preco: "190,00" },
  ];

  return (
    <div className="grid-container">
      {produtos.map(produto => (
        <div key={produto.id} className="produto-card">
          <div className="foto-fake"></div>
          <h3>{produto.nome}</h3>
          <p>R$ {produto.preco}</p>
          <button className="btn-comprar">Comprar</button>
        </div>
      ))}
    </div>
  );
};

export default GridProdutos;