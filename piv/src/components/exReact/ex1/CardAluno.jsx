import './CardAluno.css';

const CardAluno = ({ nome, curso }) => {
  return (
    <div className="card-aluno">
      <h2 className="aluno-nome">{nome}</h2>
      <p className="aluno-curso">{curso}</p>
      <button className="btn-perfil">Ver Perfil</button>
    </div>
  );
};

export default CardAluno;