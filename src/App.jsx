function App() {
  const nomeCurso = "Técnico em Desenvolvimento de Sistemas - 2025.08.53";
  return (
    <main style={{padding: '20px', fontFamily: 'sans-serif'}}>
      <h1>Bem-vindo ao curso {nomeCurso}!</h1>
      <p>Este é o seu primeiro aplicativo React.</p>
      <StatusCard mensagem="Curso iniciado com sucesso!"/>
    </main>
  );
}

function StatusCard({ mensagem }) {
  return (
   <div style={{border: '1px solid #0078d4', borderRadius: '8px', padding: '10px', marginTop: '10px'}}>
     <strong>{mensagem}</strong>
   </div>
  );
}

export default App;