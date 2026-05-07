import './BotoesDinamicos.css';

const BotoesDinamicos = () => {
  const tipos = [
    { id: 1, label: "Confirmar", tipo: "sucesso" },
    { id: 2, label: "Excluir", tipo: "erro" },
    { id: 3, label: "Atenção", tipo: "aviso" }
  ];

  return (
    <div className="container-botoes">
      {tipos.map((btn) => (
        <button 
          key={btn.id} 
          className={`botao ${btn.tipo}`}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default BotoesDinamicos;