import './Usuarios.css';

const Usuarios = () => {
  const listaUsuarios = [
    { id: 1, nome: "Gustavo", email: "gustavo@email.com", tel: "(18) 98123-4567" },
    { id: 2, nome: "Kazu", email: "kazu@email.com", tel: "(21) 98176-5432" },
    { id: 3, nome: "Yuki", email: "yuki@email.com", tel: "(31) 98198-9819" },
  ];

  return (
    <div className="tela-usuarios">
      {listaUsuarios.map(usuario => (
        <div key={usuario.id} className="usuario-card">
          <h3>{usuario.nome}</h3>
          <p><strong>Email:</strong> {usuario.email}</p>
          <p><strong>Tel:</strong> {usuario.tel}</p>
        </div>
      ))}
    </div>
  );
};

export default Usuarios;