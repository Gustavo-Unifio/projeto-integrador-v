import './ListaNotas.css';

const ListaNotas = () => {
  const alunos = [
    { id: 1, nome: "Danilo", nota: 8.5 },
    { id: 2, nome: "Gustavo", nota: 5.0 },
    { id: 3, nome: "Kayque", nota: 7.0 },
    { id: 4, nome: "Nelson", nota: 4.5 },
  ];

  return (
    <div className="container-notas">
      <h2>Relatório de Notas</h2>
      <ul className="lista-alunos">
        {alunos.map((aluno) => (
          <li key={aluno.id} className="aluno-item">
            <span>{aluno.nome}</span>
            <span className={aluno.nota >= 7 ? 'aprovado' : 'reprovado'}>
              Nota: {aluno.nota.toFixed(1)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaNotas;