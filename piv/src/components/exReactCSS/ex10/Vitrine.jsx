import './Vitrine.css';

const Vitrine = () => {
  const produtos = [
    { id: 1, nome: "Teclado mecânico", preco: "250.00", cat: "Eletrônicos" },
    { id: 2, nome: "Mouse gamer", preco: "120.00", cat: "Eletrônicos" },
    { id: 3, nome: "Monitor 144hz", preco: "1.200.00", cat: "Eletrônicos" },
    { id: 4, nome: "Headset USB", preco: "180.00", cat: "Eletrônicos" },
  ];

  return (
    <section className="vitrine-container">
      {produtos.map(p => (
        <div key={p.id} className="produto-card">
          <div className="produto-img-placeholder" />
          <span className="produto-tag">{p.cat}</span>
          <h3 className="produto-titulo">{p.nome}</h3>
          <p className="produto-valor">R$ {p.preco}</p>
          <button className="btn-comprar">Comprar</button>
        </div>
      ))}
    </section>
  );
};

export default Vitrine;