import './App.css'
import Contador from './components/ex1/Contador'
import Saudacao from './components/ex2/Saudacao'
import FormularioLivro from './components/teste/Formulario'
import FormularioCadastro from './components/teste/Exform'

function App(){
  return(
    <div>   
      <Contador/><br></br>

      <Saudacao/><br></br>

      <FormularioLivro/>

      <FormularioCadastro/>
    </div>
  )
}

export default App
