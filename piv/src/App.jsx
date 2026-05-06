import './App.css'
{/*import Contador from './components/ex1/Contador'
import Saudacao from './components/ex2/Saudacao'
import FormularioLivro from './components/teste/Formulario'
import FormularioCadastro from './components/teste/Exform'*/}
import CardAluno from './components/exReact/ex1/CardAluno'
import ListaProdutos from './components/exReact/ex2/ListaProdutos'
import Vitrine from './components/exReact/ex10/Vitrine'

function App(){
  return(
    <div>   
      {/*<Contador/><br></br>

      <Saudacao/><br></br>

      <FormularioLivro/>

      <FormularioCadastro/>*/}

      <CardAluno nome="Kazu" curso="Engenharia de Software"/>

      <ListaProdutos/>

      <Vitrine/>
    </div>
  )
}

export default App
