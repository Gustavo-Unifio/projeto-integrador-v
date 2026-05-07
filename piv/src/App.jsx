import './App.css'
{/*import Contador from './components/ex1/Contador'
import Saudacao from './components/ex2/Saudacao'
import FormularioLivro from './components/teste/Formulario'
import FormularioCadastro from './components/teste/Exform'*/}
import CardAluno from './components/exReactCSS/ex1/CardAluno'
import ListaProdutos from './components/exReactCSS/ex2/ListaProdutos'
import Vitrine from './components/exReactCSS/ex10/Vitrine'
import Menu from './components/exReactCSS/ex3/Menu'
import ListaNotas from './components/exReactCSS/ex4/ListaNotas'
import ListaFilmes from './components/exReactCSS/ex5/ListaFilmes'
import CabecalhoInline from './components/exReactCSS/ex6/CabecalhoInline'
import Usuarios from './components/exReactCSS/ex7/Usuarios'
import GridProdutos from './components/exReactCSS/ex8/GridProdutos'
import BotoesDinamicos from './components/exReactCSS/ex9/BotoesDinamicos'

function App(){
  return(
    <div>   
      {/*<Contador/><br></br>

      <Saudacao/><br></br>

      <FormularioLivro/>

      <FormularioCadastro/>*/}

      <CardAluno nome="Kazu" curso="Engenharia de Software"/>

      <hr/>  

      <ListaProdutos/>

      <hr/>  

      <Menu/>

      <hr/> 

      <ListaNotas/>

      <hr/>

      <ListaFilmes/>

      <hr/>

      <CabecalhoInline/>

      <hr/>

      <Usuarios/>

      <hr/>

      <GridProdutos/>

      <hr/>

      <Vitrine/>

      <hr/>

      <BotoesDinamicos/>
    </div>
  )
}

export default App
