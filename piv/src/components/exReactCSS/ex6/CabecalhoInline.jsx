const CabecalhoInline = () => {
  return (
    <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
      <h1 style={{ color: '#333', fontSize: '32px', fontWeight: 'bold' }}>
        Exercício 6 - Estilos Inline
      </h1>
      <h2 style={{ color: '#666', fontSize: '18px' }}>
        Foram utilizados estilos inline para personalizar o cabeçalho deste componente.
        O estilo é aplicado diretamente aos elementos HTML usando a propriedade "style". 
        Isso permite uma personalização rápida e fácil, embora seja recomendado usar classes CSS para estilos mais complexos ou reutilizáveis.
        (só escrevi duas palavra e cliquei Tab)
      </h2>
    </div>
  );
};

export default CabecalhoInline;