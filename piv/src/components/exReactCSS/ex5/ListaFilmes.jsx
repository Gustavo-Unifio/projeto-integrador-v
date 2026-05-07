import './ListaFilmes.css';

const ListaFilmes = () => {
  const filmes = [
    { id: 1, nome: "Inception", cat: "Ficção Científica", nota: 8.8 },
    { id: 2, nome: "O Poderoso Chefão", cat: "Drama", nota: 9.2 },
    { id: 3, nome: "Interestelar", cat: "Aventura", nota: 8.6 },
    { id: 4, nome: "Parasita", cat: "Suspense", nota: 8.5 },
  ];

  return (
    <div className="vitrine-filmes">
      {filmes.map((filme) => (
        <div key={filme.id} className="filme-card">
          <div className="filme-info">
            <h3 className="filme-nome">{filme.nome}</h3>
            <span className="filme-cat">{filme.cat}</span>
            <div className="filme-nota">⭐ {filme.nota}</div>
          </div>
          <button className="btn-assistir">Assistir</button>
        </div>
      ))}
    </div>
  );
};

export default ListaFilmes;